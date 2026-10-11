import type { Cta, Feature, Step } from "@/lib/content/types";

/**
 * Source: the client's "AI & Future Skills Course Brochure 2026-27", section 06,
 * which is already written for parents and schools. Fees and durations are blank
 * in the brochure too, so they stay placeholders (see docs/content-status.md).
 */

export const hero = {
  eyebrow: "How we teach",
  title: "Learn by building, in the format that suits you",
  body: "Every module ends with something the learner has made, not just notes they have taken. Classes run in school, after school, on campus or online, and the same curriculum and the same standards apply whichever one you choose.",
  secondary: { label: "See the programmes", href: "/programmes" } satisfies Cta,
};

/** The six delivery formats, brochure section 06. */
export const formats: Feature[] = [
  {
    icon: "school",
    title: "In-school programme",
    body: "Timetabled classes run by our teachers at partner schools, planned around your calendar, exams and holidays.",
  },
  {
    icon: "calendar",
    title: "After-school & weekend",
    body: "Small batches at our centre or online live, for families who want the programme outside school hours.",
  },
  {
    icon: "college",
    title: "College bootcamps",
    body: "Intensive tracks and workshops delivered on campus for engineering and general-graduate students.",
  },
  {
    icon: "briefcase",
    title: "Professional batches",
    body: "Evening and weekend domain specialisations for working professionals who cannot attend in the day.",
  },
  {
    icon: "users",
    title: "One-to-one coaching",
    body: "Personalised AI-for-life and wellness sessions, shaped around one learner's goals and pace.",
  },
  {
    icon: "automation",
    title: "Corporate & institutions",
    body: "Custom AI and wellbeing programmes built for a team, a department or an institution.",
  },
];

/** "Every learner gets", brochure section 06. */
export const included = [
  "Hands-on projects in every module",
  "Mentor support and doubt-clearing sessions",
  "Progress reports for parents and schools",
  "A verified certificate on completion",
  "A project portfolio on GitHub (technology tracks)",
  "Access to the learning portal and session recordings",
];

/** How a class actually runs. Descriptive, from the delivery and assessment process. */
export const inTheClassroom: Feature[] = [
  {
    icon: "route",
    title: "Planned before the class, not during it",
    body: "Teachers work from an approved session plan and prepare it the day before. Batches are grouped by grade and level so nobody is sitting through material they have already met.",
  },
  {
    icon: "check",
    title: "Attendance and a session log, every time",
    body: "Attendance is taken at the start of each session and the teacher files a log the same day, recording what was covered and anything a learner struggled with.",
  },
  {
    icon: "trophy",
    title: "Assessed on projects, then a term test",
    body: "Each term is assessed on what the learner has built, plus a short written test. Marked work is sampled and re-checked before results go out.",
  },
  {
    icon: "chart",
    title: "Reported back to you",
    body: "Schools and parents get a progress report at the end of the term, and eligible learners get a certificate.",
  },
];

/** Three-step join, brochure section 06. */
export const steps: Step[] = [
  {
    title: "Book a free demo",
    body: "A free counselling session or demo class, so the learner and the family can see how a class actually runs before deciding anything.",
  },
  {
    title: "Take a short level check",
    body: "A quick check of what the learner already knows, so they join at the right level rather than the one their age suggests.",
  },
  {
    title: "Enrol and join a batch",
    body: "Enrol online and join the next batch, with the timetable confirmed in writing before the programme starts.",
  },
];

/** Fees. Every row is blank in the client's own brochure: see docs/content-status.md. */
export const fees = {
  intro:
    "Fees depend on the programme and the format. We will confirm the current fee when you enquire, in writing, before you commit to anything.",
  rows: [
    { programme: "School levels 1–4 (per term)", unit: "hours", duration: null, fee: null },
    { programme: "College engineering track", unit: "weeks", duration: null, fee: null },
    { programme: "College general graduate track", unit: "weeks", duration: null, fee: null },
    { programme: "Domain specialisation (each)", unit: "weeks", duration: null, fee: null },
    { programme: "AI for everyday life (per course)", unit: "sessions", duration: null, fee: null },
    { programme: "Mind & Wellness programme", unit: "sessions", duration: null, fee: null },
  ],
  note: "Group, sibling and partner-school discounts are available, and we keep scholarship places for deserving students.",
};

export const cta = {
  title: "Start with a free demo class",
  body: "See how a class runs before you decide anything. We will come to your school, or set up a session online.",
};
