import type { MetadataRoute } from "next";
import { getProgrammes, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/for-schools", "/programmes", "/book-workshop", "/how-we-teach", "/teach-with-us", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}` })),
    ...getProgrammes().map((p) => ({ url: `${site.url}/programmes/${p.slug}` })),
  ];
}
