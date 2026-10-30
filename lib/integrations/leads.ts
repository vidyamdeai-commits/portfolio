import "server-only";

export type Lead = { type: "demo" | "workshop" | "enquiry" | "teach"; data: Record<string, unknown> };

/**
 * Sends a lead to every configured destination. A failing destination is logged,
 * not thrown, so one outage never loses the lead.
 * Env: SHEETS_WEBHOOK_URL + SHEETS_WEBHOOK_TOKEN (Google Apps Script web app),
 * RESEND_API_KEY + LEAD_NOTIFY_EMAIL. See docs/lead-delivery.md.
 */
export async function deliverLead(lead: Lead): Promise<{ delivered: number; failed: number }> {
  const tasks: Promise<unknown>[] = [];
  const submittedAt = new Date().toISOString();

  if (process.env.SHEETS_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // An Apps Script web app deployed to "anyone" is a public URL, so the
        // script rejects posts without this shared token. See docs/lead-delivery.md.
        body: JSON.stringify({ ...lead, submittedAt, token: process.env.SHEETS_WEBHOOK_TOKEN ?? "" }),
      }).then(async (r) => {
        if (!r.ok) throw new Error(`Sheets HTTP ${r.status}`);
        // Apps Script answers 200 even when it rejects the payload, so read the body.
        const body = await r.text();
        if (!body.includes('"ok":true')) throw new Error(`Sheets rejected: ${body.slice(0, 120)}`);
      }),
    );
  }

  if (process.env.RESEND_API_KEY) {
    if (process.env.LEAD_NOTIFY_EMAIL) {
      const rows = Object.entries(lead.data)
        .map(([k, v]) => `<tr><td><b>${escape(k)}</b></td><td>${escape(Array.isArray(v) ? v.join(", ") : String(v ?? ""))}</td></tr>`)
        .join("");
      tasks.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: process.env.LEAD_FROM_EMAIL ?? "Vidyam deAi Website <onboarding@resend.dev>",
            to: process.env.LEAD_NOTIFY_EMAIL.split(","),
            subject: `New ${lead.type} request`,
            html: `<table cellpadding="6">${rows}</table><p>${submittedAt}</p>`,
          }),
        }).then((r) => {
          if (!r.ok) throw new Error(`Resend ${r.status}`);
        }),
      );
    }

    // Automatic confirmation email to user via Resend (client answer 4.2)
    if (lead.data.email && typeof lead.data.email === "string" && lead.data.email.includes("@")) {
      const recipientName = String(lead.data.name || "there");
      const isDemo = lead.type === "demo" || lead.type === "workshop";
      tasks.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: process.env.LEAD_FROM_EMAIL ?? "Vidyam deAi <contact@vidyamdeai.com>",
            to: [lead.data.email.trim()],
            subject: isDemo ? "We received your demo request · Vidyam deAi" : "Thank you for contacting Vidyam deAi",
            html: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; padding: 24px; color: #0f172a; line-height: 1.6;">
              <h2 style="color: #0b192c; font-size: 22px; margin-bottom: 16px;">Namaste ${escape(recipientName)},</h2>
              <p>Thank you for reaching out to <strong>Vidyam deAi</strong>.</p>
              <p>We have successfully received your request for <strong>${escape(lead.type === "demo" ? "Free Orientation & Demo Session" : "Workshop & Programme Enquiry")}</strong>.</p>
              <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 14px 18px; margin: 20px 0; border-radius: 6px;">
                <p style="margin: 0; font-weight: 600; color: #0b192c;">What happens next:</p>
                <p style="margin: 6px 0 0; color: #334155; font-size: 14px;">Our academic team will connect with you via WhatsApp or email <strong>within one working day</strong> to confirm your schedule and tailor the session to your institution.</p>
              </div>
              <p style="font-size: 14px; color: #475569;">Following your orientation, we will provide the complete syllabus breakdown and sample activity workbook excerpt.</p>
              <p style="font-size: 14px; color: #475569;">Need immediate assistance? Feel free to reach out directly on WhatsApp at <strong>+91 79803 60789</strong> or reply to this email.</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 28px 0;" />
              <p style="font-size: 12px; color: #64748b; line-height: 1.5;">
                <strong>Vidyam deAi</strong> · Knowledge · Intelligence · Future<br />
                88/4, Lal Bahadur Sastri Rd, near Konnagar Railway Station, Rammohan Place, Konnagar, West Bengal 712235<br />
                <a href="https://www.vidyamdeai.com" style="color: #0b192c;">www.vidyamdeai.com</a>
              </p>
            </div>`,
          }),
        }).catch((err) => {
          console.error("[lead] user confirmation email failed:", err);
        }),
      );
    }
  }

  // No destination configured. In development that is normal: the lead is printed so you
  // can see it. Anywhere else it means a misconfiguration, and reporting success would
  // tell a school we had their request when nothing received it, so it counts as a failure.
  if (tasks.length === 0) {
    if (process.env.NODE_ENV === "production") {
      console.error("[lead] NO DESTINATION CONFIGURED - lead not delivered:", lead.type);
      return { delivered: 0, failed: 1 };
    }
    console.info("[lead] no destinations configured, logging only:", lead);
    return { delivered: 0, failed: 0 };
  }

  const results = await Promise.allSettled(tasks);
  const failed = results.filter((r) => r.status === "rejected");
  failed.forEach((f) => console.error("[lead] delivery failed:", (f as PromiseRejectedResult).reason));
  return { delivered: results.length - failed.length, failed: failed.length };
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
