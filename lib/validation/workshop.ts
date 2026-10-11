import { z } from "zod";

export const classBands = ["Class 6–7", "Class 8–9", "Class 10–12"] as const;

export const workshopSchema = z.object({
  schoolName: z.string().trim().min(2, "Please enter your school's name"),
  contactName: z.string().trim().min(2, "Please enter your name"),
  role: z.string().trim().min(2, "Please tell us your role"),
  email: z.email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, "Please enter a valid phone number"),
  city: z.string().trim().min(2, "Please enter your city"),
  classes: z.array(z.enum(classBands)).min(1, "Pick at least one class group"),
  students: z.string().trim().optional(),
  hasLab: z.enum(["yes", "no", "not-sure"]).optional(),
  preferredTime: z.string().trim().optional(),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal("on", { error: "Please agree so we can contact you" }),
});

export type WorkshopInput = z.infer<typeof workshopSchema>;

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof WorkshopInput, string>>;
  values?: Record<string, string | string[]>;
};

export function readWorkshopForm(formData: FormData) {
  return {
    schoolName: formData.get("schoolName"),
    contactName: formData.get("contactName"),
    role: formData.get("role"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    city: formData.get("city"),
    classes: formData.getAll("classes"),
    students: formData.get("students") || undefined,
    hasLab: formData.get("hasLab") || undefined,
    preferredTime: formData.get("preferredTime") || undefined,
    message: formData.get("message") || undefined,
    consent: formData.get("consent"),
  };
}
