import { z } from "zod";

/** Spec v2 section 4.9: the 2-step demo booking funnel. */
export const programmes = ["K–12 Schools", "Higher Education", "FDE Industry Track", "Partnerships", "Teacher training", "Other"] as const;

export const slots = ["Morning (10 am – 12 pm)", "Afternoon (12 – 3 pm)", "Evening (3 – 6 pm)"] as const;

export const phonePattern = /^[+\d][\d\s-]{7,15}$/;

/** Step 1 fields, in order. The form checks these before showing step 2. */
export const step1Fields = ["name", "email", "whatsapp", "institution", "designation"] as const;

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Please pick a date")
  .refine((d) => d >= todayIST(), "Please pick a date from today onwards");

export const demoSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  whatsapp: z.string().trim().regex(phonePattern, "Please enter a valid WhatsApp number"),
  institution: z.string().trim().min(2, "Please enter your institution or company"),
  designation: z.string().trim().min(2, "Please enter your designation"),
  programmes: z.array(z.enum(programmes)).min(1, "Pick at least one programme"),
  preferredDate: dateString,
  preferredSlot: z.enum(slots, { error: "Please pick a time slot" }),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal("on", { error: "Please agree so we can contact you" }),
});

export type DemoInput = z.infer<typeof demoSchema>;

export type DemoState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof DemoInput, string>>;
  values?: Record<string, string | string[]>;
};

export function readDemoForm(formData: FormData) {
  return {
    name: formData.get("name"),
    email: formData.get("email"),
    whatsapp: formData.get("whatsapp"),
    institution: formData.get("institution"),
    designation: formData.get("designation"),
    programmes: formData.getAll("programmes"),
    preferredDate: formData.get("preferredDate"),
    preferredSlot: formData.get("preferredSlot") || undefined,
    message: formData.get("message") || undefined,
    consent: formData.get("consent"),
  };
}

/** Today's date in India as YYYY-MM-DD, so "today" means the same thing on the server and in the form. */
export function todayIST() {
  return new Date(Date.now() + 5.5 * 3600_000).toISOString().slice(0, 10);
}
