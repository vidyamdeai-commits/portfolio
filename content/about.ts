import type { Cta, Feature } from "@/lib/content/types";

/**
 * Source: the client's Business Bible & SOP Framework v2.0, chapter 01 (Foundation).
 * Vision and mission are marked "Final wording: TBD by founders" in that document,
 * so they are placeholders here and must not be invented (docs/content-status.md).
 * Founder names and bios are also outstanding.
 */

export const hero = {
  eyebrow: "About us",
  title: "Human intelligence first. AI for a better future.",
  body: "Vidyam deAi is an education and technology initiative bridging the gap between what is taught in class and what workplaces now expect, across India. We teach AI from Class 3, through B.Tech, and into industry. We are new, and we would rather tell you exactly what we are than claim more than we have.",
  secondary: { label: "See our pathways", href: "/k12-school" } satisfies Cta,
};

/** Spec v2 section 1 and 4.3: the emblem. */
export const emblem = {
  title: "Our emblem",
  body: "A human figure holds up an open book topped by a luminous flame, while circuit-like pathways run through one of its pages. The book and flame stand for knowledge and the human spark; the circuits stand for artificial intelligence. Together they show what we teach: human wisdom and AI working in harmony, with people leading.",
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
  body: "One learning path, three pathways: a K–12 curriculum from Class 3 to 12 aligned to CBSE Skill Codes 417 and 843, a four-year B.Tech AI pathway aligned to the AICTE model curriculum, and a Forward Deployed AI Engineer track for industry.",
};

/** Deliberately honest about what is not settled yet. */
export const honest = {
  title: "Where we are today",
  items: [
    "We are a new venture, so we do not have student numbers, school logos or testimonials to show you. When we have them, and permission to use them, they will appear here.",
    "Our first offer to every school and college is 1 free orientation session, because we would rather you judged us on a real session than on a brochure.",
    "Indicative prices are published on our Pricing page. Your final quote is confirmed in writing after the orientation session.",
  ],
};

export const cta = {
  title: "Come and see a class",
  body: "The fastest way to know whether we are any good is to watch us teach. Book 1 free orientation session for your school or college.",
};
