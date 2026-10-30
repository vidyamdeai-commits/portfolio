import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Vidyam deAi K–12 AI roadmap";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "K–12 Schools · Classes 3 to 12",
    title: "A complete AI pathway, from Class 3 to Class 12",
    fact: "CBSE Skill Codes 417 & 843 · Book a free demo",
  });
}
