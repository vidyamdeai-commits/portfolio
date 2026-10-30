import type { Metadata } from "next";
import { Check, Globe, Mail, MapPin, Phone } from "lucide-react";
import { DemoForm } from "@/components/forms/demo-form";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import { Placeholder } from "@/components/shared/placeholder";
import { SocialLinks } from "@/components/shared/social-links";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Book a Free Demo",
  description:
    "Book a free demo or orientation session with Vidyam deAi for your school, college or company, or reach us by email or phone.",
  alternates: { canonical: "/contact" },
};

const afterBooking = [
  "We confirm your slot on WhatsApp or email within one working day",
  "A free orientation session for your students, faculty or team",
  "The full syllabus and a sample activity workbook, shared after the demo",
];

export default function ContactPage() {
  const contacts = [
    { icon: Globe, label: "Website", value: site.url.replace("https://", ""), href: site.url },
    site.email && { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    ...site.phones.map((p) => ({ icon: Phone, label: "Phone", value: p, href: `tel:${p.replace(/[^+\d]/g, "")}` })),
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string }[];

  return (
    <section id="book" className="on-dark relative overflow-hidden bg-navy-900 pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
      <div aria-hidden="true" className="dots absolute inset-0" />
      <span aria-hidden="true" className="absolute -right-24 -top-24 hidden size-80 rounded-full bg-gold-400/90 lg:block" />
      <Container className="relative grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-start">
        <div className="text-white lg:col-span-5">
          <div>
            <Kicker tone="light" className="enter">
              Contact & demo booking
            </Kicker>
            <h1 className="enter mt-6 font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-tight [--d:1] sm:text-6xl">
              Book a <span className="text-gold-300">free demo</span>
            </h1>
            <p className="enter mt-6 max-w-md text-lg leading-relaxed text-navy-100 [--d:2]">
              Two short steps: tell us who you are, then pick a programme and a time that suits you.
            </p>
          </div>
        </div>

        {/* Form sits right after the intro on phones, and beside it from lg */}
        <div className="enter [--d:2] lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <DemoForm followUs={<SocialLinks withLabel className="flex-wrap justify-center" />} />
        </div>

        <div className="text-white lg:col-span-5 lg:col-start-1">
          <div>

            <ul className="enter max-w-md space-y-3 [--d:3]">
              {afterBooking.map((item) => (
                <li key={item} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 font-medium text-navy-900 shadow-card">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                    <Check className="size-4.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="enter mt-10 max-w-md rounded-3xl bg-white/5 p-6 ring-1 ring-white/15 [--d:4]">
              <h2 className="font-display text-lg font-bold text-white">Official contact</h2>
              <ul className="mt-4 space-y-2">
                {contacts.map((c) => (
                  <li key={c.value} className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                      <c.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="sr-only">{c.label}: </span>
                    <a href={c.href} className="inline-flex min-h-11 items-center break-all text-white underline-offset-4 hover:text-gold-300 hover:underline">
                      {c.value}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="sr-only">Registered address: </span>
                  <span className="text-white">{site.address ?? <Placeholder label="registered address, West Bengal" fallback="West Bengal, India" />}</span>
                </li>
              </ul>
              <SocialLinks withLabel className="mt-5 flex-wrap" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
