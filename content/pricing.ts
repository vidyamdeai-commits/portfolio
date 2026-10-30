/**
 * Commercial models from spec v2 section 4.8.
 * Per client decision: Do not show any specific amounts on website.
 * Pricing is structured around tailored scopes with GST extra as applicable.
 */
export type Price =
  | { kind: "custom"; label: string; note: string }
  | { kind: "included"; note: string };

export type Sector = { id: string; title: string; audience: string };

export const sectors: Sector[] = [
  { id: "school", title: "School", audience: "Classes 3–12" },
  { id: "college", title: "College", audience: "B.Tech Y1–Y4" },
  { id: "fde", title: "FDE", audience: "Industry track" },
];

export type Service = { id: string; title: string; prices: Record<string, Price> };

export const services: Service[] = [
  {
    id: "seminar",
    title: "Seminar",
    prices: {
      school: { kind: "custom", label: "Custom quote", note: "Keynote event & orientation" },
      college: { kind: "custom", label: "Custom quote", note: "Dean, faculty & student talk" },
      fde: { kind: "included", note: "Scoping seminar" },
    },
  },
  {
    id: "teacher-training",
    title: "Teacher Training",
    prices: {
      school: { kind: "custom", label: "Cohort pricing", note: "60-hour Train-the-Trainer cohort" },
      college: { kind: "custom", label: "FDP model", note: "Faculty development programme" },
      fde: { kind: "custom", label: "Certification", note: "Lead trainer certification" },
    },
  },
  {
    id: "student-training",
    title: "Student Training",
    prices: {
      school: { kind: "custom", label: "Per-session model", note: "100% in-lab practicals" },
      college: { kind: "custom", label: "Per-course model", note: "B.Tech GPU-backed labs" },
      fde: { kind: "custom", label: "Bootcamp model", note: "12–16 week intensive track" },
    },
  },
  {
    id: "workshop",
    title: "Workshop",
    prices: {
      school: { kind: "custom", label: "Per-student quote", note: "2-day hackathon & competition" },
      college: { kind: "custom", label: "Per-student quote", note: "3-day deep learning clinic" },
      fde: { kind: "custom", label: "Specialist clinic", note: "Specialist AI clinic" },
    },
  },
  {
    id: "creative-studio",
    title: "Creative Studio",
    prices: {
      school: { kind: "custom", label: "Scope-based", note: "Lab setup & digital assets" },
      college: { kind: "custom", label: "Scope-based", note: "GPU sandbox & assets" },
      fde: { kind: "included", note: "VPC sandbox access" },
    },
  },
  {
    id: "personalized-ai",
    title: "Personalized AI",
    prices: {
      school: { kind: "custom", label: "Institutional licence", note: "Annual RAG assistant licence" },
      college: { kind: "custom", label: "Campus licence", note: "Institutional model licence" },
      fde: { kind: "included", note: "Git & portfolio review" },
    },
  },
];
