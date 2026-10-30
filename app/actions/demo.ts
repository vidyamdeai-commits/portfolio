"use server";

import { deliverLead } from "@/lib/integrations/leads";
import { demoSchema, readDemoForm, type DemoState } from "@/lib/validation/demo";

export async function requestDemo(_prev: DemoState, formData: FormData): Promise<DemoState> {
  // Honeypot: real people never fill this hidden field.
  if (formData.get("website")) return { status: "success" };

  const raw = readDemoForm(formData);
  const parsed = demoSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: DemoState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<DemoState["errors"]>;
      errors[key] ??= issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values: Object.fromEntries(
        Object.entries(raw).map(([k, v]) => [k, Array.isArray(v) ? v.map(String) : String(v ?? "")]),
      ),
    };
  }

  const data: Partial<typeof parsed.data> = { ...parsed.data };
  delete data.consent;
  // Lands in its own "leads-demo" tab of the same Google Sheet, with the same Gmail alert.
  const result = await deliverLead({ type: "demo", data });

  if (result.delivered === 0 && result.failed > 0) {
    return { status: "error", message: "Sorry, something went wrong sending your request. Please try again." };
  }
  return { status: "success" };
}
