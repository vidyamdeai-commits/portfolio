import type { Metadata } from "next";
import Image from "next/image";
import { Info } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { JsonLd } from "@/components/shared/json-ld";
import { Kicker } from "@/components/shared/kicker";
import { Placeholder } from "@/components/shared/placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { about, home, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vidyam deAi bridges classroom learning and workplace AI skills across India: K–12, B.Tech and an industry engineering track, taught through practical lab work.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: site.name,
          url: site.url,
          description: site.description,
          slogan: site.tagline,
        }}
      />

      <section className="on-dark relative overflow-hidden bg-navy-900 pb-16 pt-12 text-white sm:pt-16 lg:pb-20 lg:pt-20">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <span aria-hidden="true" className="absolute -right-24 -top-28 hidden size-80 rounded-full bg-gold-400/90 lg:block" />
        <Container className="relative">
          <Kicker tone="light" className="enter">
            {about.hero.eyebrow}
          </Kicker>
          <h1 className="enter mt-6 max-w-3xl text-balance font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight [--d:1] sm:text-6xl">
            {about.hero.title}
          </h1>
          <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 [--d:2]">{about.hero.body}</p>
          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row [--d:3]">
            <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
            <ButtonLink href={about.hero.secondary.href} variant="light">
              {about.hero.secondary.label}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="pt-16 sm:pt-24">
        <Container>
          <div className="reveal grid items-center gap-8 overflow-hidden rounded-[2rem] bg-cream-100 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
            <div className="mx-auto w-48 rounded-[2rem] bg-white p-6 shadow-card sm:w-60">
              <Image src="/brand/logo-mark.png" alt="The Vidyam deAi emblem: a human figure holding an open book topped by a flame, with circuit lines" width={620} height={640} className="h-auto w-full" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">{about.emblem.title}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{about.emblem.body}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="reveal rounded-[2rem] bg-sky-100 p-8 sm:p-10 lg:col-span-6">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">{about.name.title}</h2>
            <p className="mt-4 leading-relaxed text-ink">{about.name.body}</p>
            <p className="mt-6 font-display text-lg font-bold text-sky-700">{site.tagline}</p>
          </div>
          <div className="reveal rounded-[2rem] bg-mint-100 p-8 sm:p-10 lg:col-span-6">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">{about.doing.title}</h2>
            <p className="mt-4 leading-relaxed text-ink">{about.doing.body}</p>
            <ButtonLink href="/pricing" variant="navy" className="mt-7">
              See pricing
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="on-dark relative overflow-hidden bg-navy-900 py-16 sm:py-24">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="How we operate"
            title="Built for real campuses"
            body="The practical choices that make our programmes work inside a school or college timetable."
          />
          <div className="mt-12">
            <FeatureGrid items={home.pillars.slice(0, 3)} tone="dark" />
          </div>
        </Container>
      </section>

      {/* Vision and mission are "TBD by founders" in the client's Business Bible,
          so the page shows the gap rather than inventing wording. */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Vision & mission" title="Being written by our founders" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-navy-900">Vision</h3>
              <p className="mt-3 leading-relaxed text-ink">
                <Placeholder label="vision statement" fallback="Coming soon." />
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-navy-900">Mission</h3>
              <p className="mt-3 leading-relaxed text-ink">
                <Placeholder label="mission statement" fallback="Coming soon." />
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted">
            We would rather leave this blank than publish a sentence our founders have not agreed. The values below are
            settled, and they are what we actually run on.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Six values, and what each one means in practice"
            body="These are our operating rules, not decoration. Each one has a job in how a class is planned, taught and reported."
          />
          <div className="mt-12">
            <FeatureGrid items={about.values} />
          </div>
        </Container>
      </section>

      <section className="on-dark bg-navy-900 py-16 text-white sm:py-24">
        <Container>
          <Kicker tone="light">Straight answers</Kicker>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {about.honest.title}
          </h2>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {about.honest.items.map((item) => (
              <li key={item} className="on-light reveal flex gap-4 rounded-3xl bg-white p-6 leading-relaxed text-ink">
                <Info className="mt-0.5 size-6 shrink-0 text-gold-800" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title={about.cta.title} body={about.cta.body} cta={site.primaryCta} />
    </>
  );
}
