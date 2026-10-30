import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  async redirects() {
    // The booking form moved to /contact with spec v2 (29 Oct 2026).
    // Old addresses from before spec v2 forward to the page that replaced them, so no link breaks.
    // Mind & Wellness, Everyday AI, Creative Studio, How We Teach and Teach With Us stay live.
    return [
      { source: "/book-workshop", destination: "/contact", permanent: true },
      { source: "/for-schools", destination: "/k12-school", permanent: true },
      { source: "/programmes/school", destination: "/k12-school", permanent: true },
      { source: "/for-colleges", destination: "/higher-education", permanent: true },
      { source: "/programmes/college", destination: "/higher-education", permanent: true },
      { source: "/for-industry", destination: "/fde-industry-track", permanent: true },
      { source: "/programmes/industry", destination: "/fde-industry-track", permanent: true },
      { source: "/programmes", destination: "/", permanent: true },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
