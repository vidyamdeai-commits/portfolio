import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Vidyam deAi B.Tech AI pathway";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Higher Education · B.Tech",
    title: "A four-year AI pathway, aligned to AICTE",
    fact: "25 courses · Year 1 to Year 4",
  });
}
