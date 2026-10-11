import type { Cta, Feature, Step } from "@/lib/content/types";

/**
 * Division two. Source: "Website, Services & Growth Recommendations", section 4,
 * with course detail from the AI & Future Skills Course Brochure 2026-27, section 02.
 */

export const hero = {
  eyebrow: "Colleges & students",
  title: "Leave with a working project, not just a certificate",
  body: "Technical programmes for engineering and general-graduate students: modern tools, real projects and something worth showing a recruiter. Delivered on campus with your department, student club or placement cell.",
  primary: { label: "Explore technical programmes", href: "/programmes/college" } satisfies Cta,
  secondary: { label: "Request a training proposal", href: "/contact" } satisfies Cta,
};

export const courses: Feature[] = [
  {
    icon: "ai",
    title: "Programming foundations",
    body: "Python, backend development, APIs and databases, with Git, GitHub and CI/CD practice alongside.",
  },
  {
    icon: "automation",
    title: "Generative AI & LLMs",
    body: "LLM fundamentals, prompt design and building responsible AI applications that hold up in use.",
  },
  {
    icon: "data",
    title: "RAG & AI agents",
    body: "Retrieval applications, document-based question answering and introductory AI-agent workflows.",
  },
  {
    icon: "check",
    title: "Testing & automation",
    body: "Software testing and automation, including Playwright, plus deployment and engineering practice.",
  },
];

/** The signature programme identity from the recommendations document. */
export const labs = {
  eyebrow: "AI Innovation Labs & Hackathons",
  title: "A short learning session, then a real challenge",
  body: "Our signature campus format combines teaching with a practical challenge, mentoring through it, and a final demonstration. Students work in teams and present what they built.",
  outcomes: [
    "A working prototype, not a slide deck",
    "A project presentation the team delivers themselves",
    "A GitHub repository they can point an employer at",
  ],
};

export const alsoOffered: Feature[] = [
  { icon: "users", title: "Faculty sessions", body: "Practical sessions for teaching staff on current tools and responsible use." },
  { icon: "trophy", title: "Student-club events", body: "Workshops and challenges run with technical clubs and societies." },
  { icon: "briefcase", title: "Placement-focused workshops", body: "Short, targeted technical workshops timed around the placement season." },
  { icon: "route", title: "Capstone & portfolio guidance", body: "Guided capstone projects and help building a portfolio that reads well." },
];

/** How a college engagement starts. */
export const steps: Step[] = [
  { title: "Talk to us", body: "A conversation with your department head, faculty coordinator, club or placement cell about what your students need." },
  { title: "Agree the outcome", body: "We write down what students will leave with: a prototype, a presentation, a repository, or a specific skill." },
  { title: "Run it on campus", body: "We deliver the programme, mentor the teams through it, and finish with demonstrations." },
];

export const cta = {
  title: "Bring AI Innovation Labs to your campus",
  body: "Tell us your department, the student group and the term you have in mind. We will send a proposal with a defined outcome.",
};
