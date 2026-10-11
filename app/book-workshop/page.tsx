import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { WorkshopForm } from "@/components/forms/workshop-form";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import { schools } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a free AI workshop",
  description: "Request a free 1-hour hands-on AI workshop and demo class for your school's students.",
};

export default function BookWorkshopPage() {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-900 pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
      <div aria-hidden="true" className="dots absolute inset-0" />
      <span aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-gold-400/90" />
      <Container className="relative grid gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="text-white lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <Kicker tone="light" className="enter">
              For schools
            </Kicker>
            <h1 className="enter mt-6 font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-tight [--d:1] sm:text-6xl">
              Book a free <span className="text-gold-300">AI workshop</span>
            </h1>
            <p className="enter mt-6 max-w-md text-lg leading-relaxed text-navy-100 [--d:2]">
              See how your students respond before you decide anything. Fill in a few details and we&apos;ll call you to
              fix a date.
            </p>
            <div aria-hidden="true" className="enter relative mt-9 h-36 max-w-md overflow-hidden rounded-[1.5rem] shadow-lift ring-1 ring-white/15 [--d:3] sm:h-40">
              <Image src="/images/school-building-aerial.webp" alt="" fill sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover" />
            </div>
            <ul className="enter mt-6 max-w-md space-y-3 [--d:4]">
              {schools.workshopIncludes.map((item) => (
                <li key={item} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 font-medium text-navy-900 shadow-card">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                    <Check className="size-4.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="enter [--d:2] lg:col-span-7">
          <WorkshopForm />
        </div>
      </Container>
    </section>
  );
}
