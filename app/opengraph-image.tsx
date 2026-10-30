import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Vidyam deAi: AI learning that fits your goals";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Structured education. Practical projects.",
    title: "AI learning that fits your goals",
    fact: "68 sub-modules · 2,234 hours · 1 free orientation session",
  });
}
