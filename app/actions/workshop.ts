"use server";

import { deliverLead } from "@/lib/integrations/leads";
import { readWorkshopForm, workshopSchema, type FormState } from "@/lib/validation/workshop";

export async function requestWorkshop(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real people never fill this hidden field.
  if (formData.get("website")) return { status: "success" };

  const raw = readWorkshopForm(formData);
  const parsed = workshopSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: FormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<FormState["errors"]>;
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
  const result = await deliverLead({ type: "workshop", data });

  if (result.delivered === 0 && result.failed > 0) {
    return { status: "error", message: "Sorry, something went wrong sending your request. Please try again." };
  }
  return { status: "success" };
}
