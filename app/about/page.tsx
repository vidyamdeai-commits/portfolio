import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return <ComingSoon title="About us" body="Our story, founders and values are coming soon." />;
}
