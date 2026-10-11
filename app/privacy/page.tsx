import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Placeholder } from "@/components/shared/placeholder";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy policy" };

// DRAFT: needs review by the client's legal adviser before launch (DPDP Act 2023).
export default function PrivacyPage() {
  return (
    <section className="py-16">
      <Container className="max-w-3xl space-y-5 leading-relaxed text-ink">
        <h1 className="font-display text-4xl text-navy-900">Privacy policy</h1>
        <p className="text-sm text-muted">Draft · pending review</p>
        <p>
          {site.name} collects only the details you give us through forms on this website, such as your name, school,
          role, email and phone number, so that we can respond to your request.
        </p>
        <h2 className="font-display text-2xl text-navy-900">How we use your details</h2>
        <p>
          We use them to contact you about your request, plan workshops and programmes, and keep a record of our
          conversation. We do not sell your details or share them with anyone for marketing.
        </p>
        <h2 className="font-display text-2xl text-navy-900">Students</h2>
        <p>This website does not collect any student data. Student photos are never published without consent.</p>
        <h2 className="font-display text-2xl text-navy-900">Your rights</h2>
        <p>
          Under India&apos;s Digital Personal Data Protection Act, 2023, you can ask us to see, correct or delete your
          details at any time by writing to {site.email ?? <Placeholder label="email" />}.
        </p>
      </Container>
    </section>
  );
}
