import "server-only";

export type Lead = { type: "workshop" | "enquiry" | "teach"; data: Record<string, unknown> };

/**
 * Sends a lead to every configured destination. A failing destination is logged,
 * not thrown, so one outage never loses the lead.
 * Env: SHEETS_WEBHOOK_URL (Google Apps Script web app), RESEND_API_KEY + LEAD_NOTIFY_EMAIL.
 */
export async function deliverLead(lead: Lead): Promise<{ delivered: number; failed: number }> {
  const tasks: Promise<unknown>[] = [];
  const submittedAt = new Date().toISOString();

  if (process.env.SHEETS_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, submittedAt }),
      }).then((r) => {
        if (!r.ok) throw new Error(`Sheets ${r.status}`);
      }),
    );
  }

  if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL) {
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

  if (tasks.length === 0) {
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
