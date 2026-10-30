import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Book a free demo with Vidyam deAi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Contact",
    title: "Book a free demo",
    fact: "1 free orientation session for every school and college",
  });
}
