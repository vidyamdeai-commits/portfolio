import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Partnerships with Vidyam deAi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Partnerships",
    title: "Partner with us to build job‑ready AI talent",
    fact: "Start with a small pilot",
  });
}
