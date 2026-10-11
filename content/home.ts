import type { Feature, Step } from "@/lib/content/types";

export const hero = {
  eyebrow: "For schools · Classes 6 to 12",
  title: "Future-ready students, with a healthy mind and body",
  body: "AI, automation and database skills taught by people who use them at work, plus wellbeing, fitness and nutrition powered by AI.",
  secondary: { label: "See what students learn", href: "/for-schools" },
};

/** Top-of-page strip and hero badge. Restates the primary offer. */
export const offer = "Free 1-hour AI workshop for your school";

export const differentiators: Feature[] = [
  {
    icon: "briefcase",
    title: "Real domain knowledge",
    body: "Trainers who build AI and automation in industry, not only teach from books.",
  },
  {
    icon: "route",
    title: "Step-by-step pathway",
    body: "A clear curriculum from Class 6 to 12 that grows harder each year.",
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
