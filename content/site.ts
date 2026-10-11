import type { NavItem, SiteConfig } from "@/lib/content/types";

export const site: SiteConfig = {
  name: "Vidyam deAi",
  tagline: "Knowledge · Intelligence · Future",
  description:
    "AI, automation and data skills for students from Class 6 to 12, taught by people who build AI at work, with mental wellbeing built into every class.",
  // TBD: confirm the official domain (docs/content-status.md)
  url: "https://www.vidyamdeai.com",
  email: null,
  phone: null,
  whatsapp: null,
  address: null,
  primaryCta: { label: "Book a free AI workshop", href: "/book-workshop" },
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "For Schools", href: "/for-schools" },
  { label: "Colleges & Students", href: "/for-colleges" },
  { label: "For Industry", href: "/for-industry" },
  { label: "Creative Studio", href: "/creative-studio" },
  { label: "About", href: "/about" },
];

/**
 * The footer, not the nav, is what keeps every page reachable. The four-division nav
 * has no room for the individual programmes, How We Teach or Teach With Us, so they
 * live here. AI for Everyday Life and Mind & Wellness stay live at their own URLs
 * (owner decision, 11 Oct 2026) even though they are no longer top-level.
 */
export const footerSections: { title: string; links: NavItem[] }[] = [
  {
    title: "Programmes",
    links: [
      { label: "School (Class 6 to 12)", href: "/programmes/school" },
      { label: "College", href: "/programmes/college" },
      { label: "Industry", href: "/programmes/industry" },
      { label: "AI for Everyday Life", href: "/programmes/everyday-ai" },
      { label: "Mind & Wellness", href: "/programmes/mind-and-wellness" },
      { label: "All programmes", href: "/programmes" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "How We Teach", href: "/how-we-teach" },
      { label: "Teach With Us", href: "/teach-with-us" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
