import type { Cta, Feature, Step } from "@/lib/content/types";

/**
 * Division four. Source: "Website, Services & Growth Recommendations", section 6.
 *
 * The owner decided on 11 Oct 2026 to publish this as a live, operating division.
 * The source document advises not advertising a capability before the team can
 * deliver it reliably, so every service listed here is a real commitment.
 * See docs/content-status.md.
 */

export const hero = {
  eyebrow: "Creative Studio",
  title: "Content made with AI, finished by people",
  body: "For businesses, creators and educators who need video, images and copy but have no production team. AI helps with ideas and production; a person checks quality, accuracy, originality, brand fit and rights before anything reaches you.",
  primary: { label: "Request a creative project", href: "/contact" } satisfies Cta,
};

/** The seven service areas from the recommendations document. */
export const services: (Feature & { customers: string })[] = [
  {
    icon: "automation",
    title: "AI video creation",
    body: "Promotional videos, explainers, reels, shorts and product videos.",
    customers: "Small businesses, agencies, creators, travel operators",
  },
  {
    icon: "check",
    title: "Photo editing",
    body: "Enhancement, cleanup, background changes, product images and restoration.",
    customers: "Sellers, photographers, local brands",
  },
  {
    icon: "ai",
    title: "Script & story writing",
    body: "Ad scripts, short stories, dialogue, video scripts and story concepts.",
    customers: "Creators, educators, marketing teams",
  },
  {
    icon: "trophy",
    title: "Animation & motion graphics",
    body: "Animated explainers, title sequences, simple 2D animation and motion graphics.",
    customers: "Schools, startups, trainers",
  },
  {
    icon: "users",
    title: "Social media creative",
    body: "Post concepts, captions, thumbnails, campaign visuals and reels.",
    customers: "Small businesses, consultants, creators",
  },
  {
    icon: "school",
    title: "Educational content",
    body: "Learning videos, visual aids, presentations and illustrated materials.",
    customers: "Schools, tutors, edtech teams",
  },
  {
    icon: "briefcase",
    title: "Business design support",
    body: "Brochures, posters, presentations and digital advertisements.",
    customers: "Companies, colleges, event organisers",
  },
];

/** How work is packaged. */
export const packages: Feature[] = [
  { icon: "check", title: "Single deliverables", body: "One edited image, one short video, one script or one presentation." },
  { icon: "trophy", title: "Content bundles", body: "A set of social posts, captions and short-form videos for one campaign." },
  { icon: "calendar", title: "Monthly content support", body: "An agreed number of assets each month, with clear revision limits." },
  { icon: "school", title: "Educational packages", body: "Scripts, visuals and short explainer videos for one topic or course." },
];

/** Agreed before a project starts, so nothing is a surprise later. */
export const beforeWeStart: Step[] = [
  { title: "Scope and format", body: "Format, length and language, agreed in writing before anyone starts producing." },
  { title: "Revisions and turnaround", body: "How many rounds of changes are included, and when you get each version." },
  { title: "Usage rights", body: "Who owns the result and where you may use it. We confirm images, music, fonts and voices can be used commercially." },
];

export const standards = {
  title: "How we use AI responsibly",
  items: [
    "A person reviews every output for facts, spelling, cultural context, visual glitches and misleading claims before delivery.",
    "We disclose AI use where it matters to your contract, your platform's rules or the nature of the work.",
    "We do not use a real person's likeness or private photographs without their permission.",
    "We confirm that images, music, fonts and voices are cleared for commercial use.",
  ],
};

export const cta = {
  title: "Tell us what you need made",
  body: "Describe the piece, who it is for and roughly when you need it. We will come back with a format, a timeline and a price.",
};
