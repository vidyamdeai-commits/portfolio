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
  { label: "For Schools", href: "/for-schools" },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "School (Class 5 to 12)", href: "/programmes/school" },
      { label: "College", href: "/programmes/college" },
      { label: "Industry", href: "/programmes/industry" },
      { label: "AI for Everyday Life", href: "/programmes/everyday-ai" },
      { label: "Mind & Wellness", href: "/programmes/mind-and-wellness" },
    ],
  },
  { label: "How We Teach", href: "/how-we-teach" },
  { label: "Teach With Us", href: "/teach-with-us" },
  { label: "About", href: "/about" },
];
