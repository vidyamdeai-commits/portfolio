import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Steps } from "@/components/sections/steps";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import { SectionHeading } from "@/components/shared/section-heading";
import { teachWithUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Teach with us",
  description:
    "Teach AI, computer science, data and wellbeing to students across Classes 5 to 12, in colleges and in professional batches. Interview, 20-minute demo class and verification.",
};

export default function TeachWithUsPage() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-navy-900 pb-16 pt-12 text-white sm:pt-16 lg:pb-20 lg:pt-20">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <span aria-hidden="true" className="absolute -right-24 -top-28 hidden size-80 rounded-full bg-gold-400/90 lg:block" />
        <Container className="relative">
          <Kicker tone="light" className="enter">
            {teachWithUs.hero.eyebrow}
          </Kicker>
          <h1 className="enter mt-6 max-w-3xl text-balance font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight [--d:1] sm:text-6xl">
            {teachWithUs.hero.title}
          </h1>
          <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 [--d:2]">{teachWithUs.hero.body}</p>
          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row [--d:3]">
            <ButtonLink href="/contact">Apply to teach</ButtonLink>
            <ButtonLink href={teachWithUs.hero.secondary.href} variant="light">
              {teachWithUs.hero.secondary.label}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who we are looking for"
            title="Four kinds of people, one standard"
            body="You do not need to have taught before. You do need to know your subject and be willing to be watched teaching it."
          />
          <div className="mt-12">
            <FeatureGrid items={teachWithUs.lookingFor} />
          </div>
        </Container>
      </section>

      <section className="bg-lilac-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How selection works"
            title="What happens after you apply"
            body="No stage is skipped, and nobody meets a learner before the last one is finished."
          />
          <div className="mt-14">
            <Steps steps={teachWithUs.process} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading align="left" eyebrow="Onboarding" title={teachWithUs.onboarding.title} body={teachWithUs.onboarding.body} />
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {teachWithUs.onboarding.items.map((item) => (
              <li key={item} className="reveal flex items-center gap-4 rounded-2xl bg-white px-5 py-4 font-medium text-navy-900 shadow-card ring-1 ring-navy-900/5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                  <Check className="size-4.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Once you are teaching"
            title="What we ask of you"
            body="These are the four things that keep a programme running for the students, so we are strict about them."
          />
          <div className="mt-12">
            <FeatureGrid items={teachWithUs.expectations} />
          </div>
        </Container>
      </section>

      <section className="on-dark bg-navy-900 py-16 text-white sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Kicker tone="light">Safeguarding</Kicker>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{teachWithUs.safeguarding.title}</h2>
            <p className="mt-4 leading-relaxed text-navy-100">{teachWithUs.safeguarding.body}</p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {teachWithUs.safeguarding.items.map((item) => (
                <li key={item} className="on-light flex gap-4 rounded-2xl bg-white p-5 leading-relaxed text-ink">
                  <ShieldCheck className="mt-0.5 size-6 shrink-0 text-gold-800" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p role="note" className="mt-6 leading-relaxed text-navy-100">
              {teachWithUs.safeguarding.note}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal mx-auto max-w-3xl rounded-[2rem] bg-sun-100 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">{teachWithUs.terms.title}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink">{teachWithUs.terms.body}</p>
          </div>
        </Container>
      </section>

      <CtaBand
        title={teachWithUs.cta.title}
        body={teachWithUs.cta.body}
        cta={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
