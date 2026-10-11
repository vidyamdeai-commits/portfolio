import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Steps } from "@/components/sections/steps";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import { SectionHeading } from "@/components/shared/section-heading";
import * as C from "@/content/colleges";

export const metadata: Metadata = {
  title: "Colleges & students",
  description:
    "Technical AI programmes for engineering and general-graduate students: AI Innovation Labs, hackathons, capstone projects and portfolio outcomes, delivered on campus.",
};

export default function CollegesPage() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-navy-900 pb-16 pt-12 text-white sm:pt-16 lg:pb-20 lg:pt-20">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <span aria-hidden="true" className="absolute -right-24 -top-28 hidden size-80 rounded-full bg-gold-400/90 lg:block" />
        <Container className="relative">
          <Kicker tone="light" className="enter">
            {C.hero.eyebrow}
          </Kicker>
          <h1 className="enter mt-6 max-w-3xl text-balance font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight [--d:1] sm:text-6xl">
            {C.hero.title}
          </h1>
          <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 [--d:2]">{C.hero.body}</p>
          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row [--d:3]">
            <ButtonLink href={C.hero.primary.href}>{C.hero.primary.label}</ButtonLink>
            <ButtonLink href={C.hero.secondary.href} variant="light">
              {C.hero.secondary.label}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we teach"
            title="Current tools, taught by people who use them"
            body="The strongest thing a student can leave with is a working project and the vocabulary to explain it."
          />
          <div className="mt-12">
            <FeatureGrid items={C.courses} />
          </div>
        </Container>
      </section>

      <section className="on-dark bg-navy-900 py-16 text-white sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Kicker tone="light">{C.labs.eyebrow}</Kicker>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{C.labs.title}</h2>
            <p className="mt-4 leading-relaxed text-navy-100">{C.labs.body}</p>
          </div>
          <ul className="space-y-3 lg:col-span-6">
            {C.labs.outcomes.map((o) => (
              <li key={o} className="on-light flex items-center gap-4 rounded-2xl bg-white px-5 py-4 font-medium text-navy-900">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                  <Check className="size-4.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {o}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Also offered" title="Ways we work with a campus" />
          <div className="mt-12">
            <FeatureGrid items={C.alsoOffered} />
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How it starts" title="Three steps to a programme on your campus" />
          <div className="mt-14">
            <Steps steps={C.steps} />
          </div>
        </Container>
      </section>

      <CtaBand title={C.cta.title} body={C.cta.body} cta={{ label: "Request a proposal", href: "/contact" }} />
    </>
  );
}
