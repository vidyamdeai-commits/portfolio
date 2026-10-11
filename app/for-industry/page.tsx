import type { Metadata } from "next";
import { Info } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Steps } from "@/components/sections/steps";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import { SectionHeading } from "@/components/shared/section-heading";
import * as C from "@/content/industry";

export const metadata: Metadata = {
  title: "For industry",
  description:
    "Practical AI engineering and automation: workflow automation, custom AI assistants, agent prototypes, testing and CI/CD, and corporate upskilling. Starts with a discovery call and a defined pilot.",
};

export default function IndustryPage() {
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
            eyebrow="Services"
            title="Six things we actually build"
            body="Each one starts from a defined business need, not from a tool we want to use."
          />
          <div className="mt-12">
            <FeatureGrid items={C.services} />
          </div>
        </Container>
      </section>

      <section className="bg-sun-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we engage"
            title="Discovery, then a small pilot"
            body="Nothing is built before we agree in writing what it has to do to count as working."
          />
          <div className="mt-14">
            <Steps steps={C.approach} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Domain specialisations"
            title="Upskilling in four domains"
            body="Add-on tracks for final-year students, graduates and working professionals, on realistic, anonymised data."
          />
          <div className="mt-12">
            <FeatureGrid items={C.domains} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <p role="note" className="reveal mx-auto flex max-w-3xl gap-4 rounded-3xl border-2 border-gold-500 bg-white p-6 leading-relaxed text-ink sm:p-8">
            <Info className="mt-0.5 size-6 shrink-0 text-gold-800" aria-hidden="true" />
            <span>
              <strong className="font-display text-navy-900">{C.honesty.title}.</strong> {C.honesty.body}
            </span>
          </p>
        </Container>
      </section>

      <CtaBand title={C.cta.title} body={C.cta.body} cta={{ label: "Book a discovery call", href: "/contact" }} />
    </>
  );
}
