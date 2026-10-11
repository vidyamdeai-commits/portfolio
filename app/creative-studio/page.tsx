import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Steps } from "@/components/sections/steps";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { Kicker } from "@/components/shared/kicker";
import { SectionHeading } from "@/components/shared/section-heading";
import * as C from "@/content/creative-studio";
import { toneAt } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Creative Studio",
  description:
    "AI-assisted video, photo editing, scripts, animation, social creative and educational content, reviewed by people before delivery.",
};

export default function CreativeStudioPage() {
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
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we make"
            title="Seven service areas"
            body="Start with one deliverable. If it works, we talk about a bundle or monthly support."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {C.services.map((s, i) => {
              const t = toneAt(i);
              // Seven services leave one card alone on the last row; centre it rather
              // than stranding it against the left edge.
              const orphan = C.services.length % 3 === 1 && i === C.services.length - 1;
              return (
                <li key={s.title} className={`reveal flex flex-col rounded-3xl p-7 ${t.bg} ${orphan ? "lg:col-start-2" : ""}`}>
                  <span className={`flex size-14 items-center justify-center rounded-2xl bg-white shadow-card ${t.text}`}>
                    <Icon name={s.icon} className="size-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold leading-snug text-navy-900">{s.title}</h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-ink/80">{s.body}</p>
                  <p className="mt-5 text-sm font-medium text-ink/70">
                    <span className="label block text-ink/60">For</span>
                    {s.customers}
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How work is packaged" title="Four ways to buy" />
          <div className="mt-12">
            <FeatureGrid items={C.packages} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Before we start"
            title="Agreed in writing, every time"
            body="Three things are settled before anyone starts producing, so nothing is a surprise at delivery."
          />
          <div className="mt-14">
            <Steps steps={C.beforeWeStart} />
          </div>
        </Container>
      </section>

      <section className="on-dark bg-navy-900 py-16 text-white sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Kicker tone="light">Standards</Kicker>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{C.standards.title}</h2>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {C.standards.items.map((item) => (
              <li key={item} className="on-light flex gap-4 rounded-2xl bg-white p-5 leading-relaxed text-ink">
                <ShieldCheck className="mt-0.5 size-6 shrink-0 text-gold-800" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title={C.cta.title} body={C.cta.body} cta={{ label: "Request a creative project", href: "/contact" }} />
    </>
  );
}
