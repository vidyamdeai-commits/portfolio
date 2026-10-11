import type { Feature } from "@/lib/content/types";

/**
 * The four divisions, from the client's "Website, Services & Growth Recommendations".
 * That document is a team discussion paper, not a ratified plan; the owner asked on
 * 11 Oct 2026 for it to be built anyway. See docs/content-status.md.
 */

export const positioning = {
  headline: "Human intelligence first. AI for a better future.",
  body: "Learn, innovate, create and grow with responsible artificial intelligence — from school learning and college projects to business solutions and creative content.",
  supporting:
    "Responsible AI education for young minds, practical innovation for students, and useful AI-powered solutions for businesses and creators.",
};

export type Division = Feature & { href: string; focus: string; customers: string; cta: string };

export const divisions: Division[] = [
  {
    icon: "school",
    title: "For Schools",
    href: "/for-schools",
    body: "Thinking skills, creativity, responsible AI and digital wellbeing for Classes 6 to 12.",
    focus: "Thinking skills, creativity, responsible AI and digital wellbeing",
    customers: "Schools, teachers, parents",
    cta: "Discuss a school workshop",
  },
  {
    icon: "college",
    title: "Colleges & Students",
    href: "/for-colleges",
    body: "Technical skills, AI projects, hackathons and the portfolio that gets you hired.",
    focus: "Technical skills, AI projects, hackathons and employability",
    customers: "Colleges, student clubs, placement cells",
    cta: "Explore technical programmes",
  },
  {
    icon: "industry",
    title: "For Industry",
    href: "/for-industry",
    body: "AI engineering, workflow automation, software testing and corporate upskilling.",
    focus: "AI engineering, workflow automation, software testing and upskilling",
    customers: "Companies, IT teams, working professionals",
    cta: "Discuss business solutions",
  },
  {
    icon: "automation",
    title: "Creative Studio",
    href: "/creative-studio",
    body: "AI-assisted video, photo editing, scripts, animation and digital content.",
    focus: "AI-assisted videos, photo editing, scripts, stories, animation and digital content",
    customers: "Businesses, creators, educators, agencies and event organisers",
    cta: "Request a creative project",
  },
];

/** Stated plainly, because the divisions share a brand but not a service list. */
export const note =
  "The four divisions support one another, but what each one delivers is different. A school programme is not a simplified version of professional software training.";
