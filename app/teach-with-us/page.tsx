import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";

export const metadata: Metadata = { title: "Teach with us" };

export default function TeachWithUsPage() {
  return <ComingSoon title="Teach with us" body="We're building our trainer team. Applications open soon." />;
}
