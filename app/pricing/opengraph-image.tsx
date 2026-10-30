import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Vidyam deAi pricing";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Pricing",
    title: "Clear prices for schools, colleges and industry",
    fact: "6 services · 3 sectors",
  });
}
