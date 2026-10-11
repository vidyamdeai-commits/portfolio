import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";

export const metadata: Metadata = { title: "Terms of use" };

export default function TermsPage() {
  return <ComingSoon title="Terms of use" body="Our terms of use are being finalised." />;
}
