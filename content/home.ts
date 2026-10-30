import type { Feature, Step } from "@/lib/content/types";

/** Homepage hero, from spec v2 section 4.2 (29 Oct 2026). */
export const hero = {
  eyebrow: "Knowledge · Intelligence · Future",
  title: "AI learning that fits your goals",
  accent: "fits your goals",
  body: "Structured education. Practical projects. Personalised learning for a changing world.",
  primary: { label: "Book 1 Free Orientation Session", href: "/contact" },
  secondary: { label: "Explore the curriculum", href: "/k12-school" },
};

/** Hero badge (spec: "1 FREE ORIENTATION SESSION"). */
export const badge = "1 free orientation session: a complimentary first step for every school and college";

export const shareText = "Vidyam deAi: structured AI education for schools, colleges and industry";

/** Spec v2 "Operational Solutions" (About), reused as the homepage differentiators. */
export const pillars: Feature[] = [
  {
    icon: "rocket",
    title: "Level-0 cold-start bridge",
    body: "A 15-hour Term 1 orientation bootcamp, so every learner starts from the same footing.",
  },
  {
    icon: "lab",
    title: "100% in-lab practice",
    body: "Every session is scheduled, hands-on practical work in the lab, not slides.",
  },
  {
    icon: "users",
    title: "Resident AI instructors",
    body: "Full-time instructors on campus, certified through our 60-hour Train-the-Trainer bootcamp.",
  },
  {
    icon: "git",
    title: "Industry mentors, real portfolios",
    body: "Working engineers mentor learners, and every capstone ends up on a clean public GitHub profile.",
  },
];

/** Spec v2 Partnerships: 4-step pilot framework, preceded by the free orientation. */
export const startSteps: Step[] = [
  { title: "Free orientation", body: "One complimentary session for your students or faculty." },
  { title: "Define", body: "We agree the goals, learners and success measures for a pilot." },
  { title: "Agree", body: "Scope, schedule and commercial model are fixed in writing." },
  { title: "Evaluate", body: "The pilot runs in your lab and is assessed against the agreed measures." },
  { title: "Review", body: "We review results together and plan the full rollout." },
];

/** Top-of-page strip. Restates the primary offer. */
export const offer = "1 free orientation session for every school and college";

export const differentiators: Feature[] = [
  {
    icon: "briefcase",
    title: "Real domain knowledge",
    body: "Trainers who build AI and automation in industry, not only teach from books.",
  },
  {
    icon: "route",
    title: "Step-by-step pathway",
    body: "A clear curriculum from Class 3 to 12 that grows harder each year.",
  },
  {
    icon: "hammer",
    title: "Learning by building",
    body: "Every class ends with a real project students can show.",
  },
  {
    icon: "heart",
    title: "The whole child",
    body: "Mental health, thinking skills, fitness and nutrition sit beside tech.",
  },
];

export const schoolGets: Feature[] = [
  { icon: "calendar", title: "After-school programme", body: "Weekly AI, automation and data classes on your campus." },
  { icon: "users", title: "Teacher training", body: "Help your teachers use AI safely in class." },
  { icon: "trophy", title: "Workshops and hackathons", body: "Fun events that put your school on the map." },
  { icon: "chart", title: "Progress reports", body: "Clear updates for parents every month." },
];

export const howItWorks: Step[] = [
  { title: "Free AI workshop", body: "A 1-hour workshop and demo class for your students, at no cost." },
  { title: "Plan together", body: "We agree classes, batches and timings around your calendar and exams." },
  { title: "Vetted trainers", body: "Interviewed, demo-tested and background-checked trainers are assigned." },
  { title: "Learn by building", body: "Weekly classes, each ending in a project students can show." },
  { title: "Reports and certificates", body: "Monthly parent updates, assessments and certificates." },
];

export const safeguarding = {
  title: "Safe by design",
  body: "Every trainer signs a code of conduct and is verified before meeting students. No unsupervised one-to-one contact, no student photos without consent, and concerns are acted on the same day.",
};
