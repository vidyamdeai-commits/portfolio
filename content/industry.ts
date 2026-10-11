import type { Cta, Feature, Step } from "@/lib/content/types";

/**
 * Division three. Source: "Website, Services & Growth Recommendations", section 5,
 * with domain detail from the AI & Future Skills Course Brochure 2026-27, section 03.
 */

export const hero = {
  eyebrow: "For industry",
  title: "Start with one process, not a transformation programme",
  body: "Practical AI engineering and automation for teams that have a specific problem to solve. We begin with a discovery call, propose a small pilot, and agree what success looks like before any work starts.",
  primary: { label: "Discuss business solutions", href: "/contact" } satisfies Cta,
  secondary: { label: "See the domain tracks", href: "/programmes/industry" } satisfies Cta,
};

export const services: Feature[] = [
  {
    icon: "automation",
    title: "Workflow & process automation",
    body: "Find the steps a person repeats every week and move them to something that runs itself.",
  },
  {
    icon: "ai",
    title: "Custom AI assistants & document search",
    body: "Assistants and retrieval applications built on your own documents, with answers you can trace.",
  },
  {
    icon: "route",
    title: "AI-agent prototypes & integrations",
    body: "Agent prototypes wired into the systems your team already uses, rather than beside them.",
  },
  {
    icon: "data",
    title: "Backend, APIs & databases",
    body: "Backend development, APIs and database-connected applications that the automation can stand on.",
  },
  {
    icon: "check",
    title: "Automated testing & CI/CD",
    body: "Automated software testing, including Playwright, and continuous integration support.",
  },
  {
    icon: "users",
    title: "Corporate AI upskilling",
    body: "AI awareness sessions and hands-on technical workshops, scoped to the audience and their starting point.",
  },
];

/** The engagement model, stated so expectations are set before anyone commits. */
export const approach: Step[] = [
  { title: "Discovery call", body: "We learn the process, who touches it, how often it runs and where it currently hurts." },
  { title: "A defined pilot", body: "We propose something small and specific rather than a platform, with a scope you can read in a page." },
  { title: "Acceptance criteria", body: "We agree in writing what the pilot has to do to count as working, before building it." },
  { title: "Build and hand over", body: "We deliver, show it running against the criteria, and agree what support looks like afterwards." },
];

/** The four domain specialisations already defined in the course brochure. */
export const domains: Feature[] = [
  { icon: "chart", title: "Banking & financial services", body: "Lending and payments, credit and risk models, fraud detection, document AI for loan processing." },
  { icon: "responsible-ai", title: "AML tech & RegTech", body: "The AML lifecycle, KYC, transaction monitoring, screening, AI alert triage and explainability." },
  { icon: "heart", title: "Healthcare AI", body: "Health records and interoperability, imaging concepts and limits, clinical text summarisation, patient privacy." },
  { icon: "briefcase", title: "Retail pharmacy", body: "Demand forecasting, prescription digitisation, drug-interaction lookup as a pharmacist aid, compliance records." },
];

export const honesty = {
  title: "What we will not do",
  body: "We will not promise a broad transformation, quote before we understand the process, or describe a capability as ready when it is not. If a pilot is the wrong answer we will say so on the call.",
};

export const cta = {
  title: "Book a discovery call",
  body: "Describe the process that is costing your team time. We will tell you whether it is worth automating.",
};
