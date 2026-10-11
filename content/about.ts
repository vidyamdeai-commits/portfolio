import type { Cta, Feature } from "@/lib/content/types";

/**
 * Source: the client's Business Bible & SOP Framework v2.0, chapter 01 (Foundation).
 * Vision and mission are marked "Final wording: TBD by founders" in that document,
 * so they are placeholders here and must not be invented (docs/content-status.md).
 * Founder names and bios are also outstanding.
 */

export const hero = {
  eyebrow: "About us",
  title: "Teaching India's students to use AI well, not just quickly",
  body: "Vidyam deAi teaches AI, automation and data skills from Class 5 through college and into working life, with mental wellbeing built into the programme rather than bolted on. We are new, and we would rather tell you exactly what we are than claim more than we have.",
  secondary: { label: "See the programmes", href: "/programmes" } satisfies Cta,
};

/** The name, which is the clearest statement of what the venture is for. */
export const name = {
  title: "What the name means",
  body: "Vidyam is knowledge. deAi is the intelligence we are all learning to work with. Knowledge · Intelligence · Future is the order we think they belong in: understand it first, use it second, and let it shape what comes next.",
};

/** Core operating values, Business Bible 1.4, with their stated operating meanings. */
export const values: Feature[] = [
  {
    icon: "users",
    title: "Learner focus",
    body: "Programme decisions are made on whether they help the learner, not on what is easiest to deliver.",
  },
  {
    icon: "trophy",
    title: "Quality",
    body: "Work meets a defined standard before it goes out, whether that is a lesson plan, a marked script or a report to a parent.",
  },
  {
    icon: "check",
    title: "Integrity",
    body: "Academic, commercial and operational records are accurate. We do not publish claims, partnerships or outcomes we cannot evidence.",
  },
  {
    icon: "responsible-ai",
    title: "Responsible technology",
    body: "AI and digital tools are used with human oversight, privacy controls and safety limits, and we teach students to expect the same.",
  },
  {
    icon: "hammer",
    title: "Practical execution",
    body: "Our processes have to work in a real school on a real Tuesday, not just read well on paper.",
  },
  {
    icon: "route",
    title: "Continuous improvement",
    body: "Feedback, complaints and things that go wrong are fed back into how we work, rather than filed away.",
  },
];

export const doing = {
  title: "What we teach",
  body: "One learning path, five programmes: school computer science and AI from Class 5 to 12, two college tracks, industry specialisations for working professionals, practical AI for everyday life, and a dedicated Mind & Wellness programme.",
};

/** Deliberately honest about what is not settled yet. */
export const honest = {
  title: "Where we are today",
  items: [
    "We are a new venture, so we do not have student numbers, school logos or testimonials to show you. When we have them, and permission to use them, they will appear here.",
    "Our first offer to a school is a free one-hour workshop and a demo class, because we would rather you judged us on a real session than on a brochure.",
    "Fees, durations and batch sizes are confirmed in writing when you enquire.",
  ],
};

export const cta = {
  title: "Come and see a class",
  body: "The fastest way to know whether we are any good is to watch us teach. Book a free workshop for your school.",
};
