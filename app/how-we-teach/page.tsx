import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";

export const metadata: Metadata = { title: "How we teach" };

export default function HowWeTeachPage() {
  return <ComingSoon title="How we teach" body="Formats, what every learner gets and how to enrol, coming soon." />;
}
