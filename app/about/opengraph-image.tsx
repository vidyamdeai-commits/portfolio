import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "About Vidyam deAi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "About us",
    title: "Human intelligence first. AI for a better future.",
    fact: "Knowledge · Intelligence · Future",
  });
}
