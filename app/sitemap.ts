import type { MetadataRoute } from "next";
import { getProgrammes, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/k12-school", "/higher-education", "/fde-industry-track", "/partnerships", "/how-we-teach", "/teach-with-us", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}` })),
    // school, college and industry programme pages now redirect to the spec v2 pages
    ...getProgrammes()
      .filter((p) => !["school", "college", "industry"].includes(p.slug))
      .map((p) => ({ url: `${site.url}/programmes/${p.slug}` })),
    { url: `${site.url}/creative-studio` },
  ];
}
