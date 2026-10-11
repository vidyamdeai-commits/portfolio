import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";

export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  return <ComingSoon title="Contact us" body="A full contact page is coming soon. Schools can request a free workshop today." />;
}
