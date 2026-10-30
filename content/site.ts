import type { NavItem, SiteConfig } from "@/lib/content/types";

export const site: SiteConfig = {
  name: "Vidyam deAi",
  tagline: "Knowledge · Intelligence · Future",
  description:
    "Structured AI education for schools, colleges and industry: CBSE-aligned K-12 pathways, a B.Tech AI curriculum and a Forward Deployed AI Engineer track, taught through practical projects.",
  url: "https://www.vidyamdeai.com",
  email: "contact@vidyamdeai.com",
  phones: ["+91 79803 60789"],
  whatsapp: "+91 79803 60789",
  address: "88/4, Lal Bahadur Sastri Rd, near Konnagar Railway Station, Rammohan Place, Konnagar, West Bengal 712235",
  primaryCta: { label: "Book Free Demo", href: "#demo" },
  // TBD: official page URLs (client). Buttons stay hidden until these are set.
  social: { linkedin: null, facebook: null },
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "K–12 Schools", href: "/k12-school" },
  { label: "Higher Ed", href: "/higher-education" },
  { label: "FDE Track", href: "/fde-industry-track" },
  { label: "Partnerships", href: "/partnerships" },
  {
    label: "Unique Add-ons",
    href: "/creative-studio",
    children: [
      { label: "Creative Studio", href: "/creative-studio" },
      { label: "Mind & Wellness", href: "/programmes/mind-and-wellness" },
      { label: "AI for Everyday Life", href: "/programmes/everyday-ai" },
      { label: "How We Teach", href: "/how-we-teach" },
      { label: "Teach With Us", href: "/teach-with-us" },
    ],
  },
  { label: "About Us", href: "/about" },
];

/**
 * The footer keeps every page reachable. Unique add-ons are featured prominently per client instruction.
 */
export const footerSections: { title: string; links: NavItem[] }[] = [
  {
    title: "Programmes",
    links: [
      { label: "K–12 Schools", href: "/k12-school" },
      { label: "Higher Education", href: "/higher-education" },
      { label: "FDE Industry Track", href: "/fde-industry-track" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Unique Add-ons",
    links: [
      { label: "Mind & Wellness", href: "/programmes/mind-and-wellness" },
      { label: "AI for Everyday Life", href: "/programmes/everyday-ai" },
      { label: "Creative Studio", href: "/creative-studio" },
      { label: "How We Teach", href: "/how-we-teach" },
      { label: "Teach With Us", href: "/teach-with-us" },
    ],
  },
];
