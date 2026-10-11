/**
 * The only way pages read content. Swap these getters for a CMS later
 * without touching pages or components.
 */
import { programmes } from "@/content/programmes";
import type { Programme } from "./types";

export * from "./types";
export { site, nav } from "@/content/site";
export * as home from "@/content/home";
export * as schools from "@/content/schools";
export * as howWeTeach from "@/content/how-we-teach";
export * as teachWithUs from "@/content/teach-with-us";
export * as about from "@/content/about";
export { strands, automationTools, thinkingHabit } from "@/content/strands";
export { schoolFaqs } from "@/content/faqs";

export function getProgrammes(): Programme[] {
  return programmes;
}

export function getProgramme(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}
