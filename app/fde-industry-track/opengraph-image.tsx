import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Vidyam deAi Forward Deployed AI Engineer track";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Industry track · FDE",
    title: "Become a Forward Deployed AI Engineer",
    fact: "12–16 week bootcamp · 5 modules",
  });
}
