import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero, HeroCollage } from "@/components/sections/hero";
import { Steps } from "@/components/sections/steps";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { JsonLd } from "@/components/shared/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShareBar } from "@/components/shared/share-bar";
import { fdeModules, higherEdYears, k12Stages, moduleCount, totalHours } from "@/content/curriculum";
import { home, site } from "@/lib/content";
import { tones } from "@/lib/theme";

const fmt = (n: number) => n.toLocaleString("en-IN");

export default function HomePage() {
  const all = [...k12Stages, ...higherEdYears, ...fdeModules];
  const metrics = [
    { value: fmt(moduleCount(all)), label: "Unique sub-modules", detail: "23 K–12 · 25 Higher Ed · 20 FDE" },
    { value: fmt(totalHours(all)), label: "Cumulative instructional hours" },
    { value: "4", label: "Core national frameworks", detail: "CBSE 417 · CBSE 843 · AICTE · NEP 2020" },
  ];

  const pathways = [
    {
      icon: "school",
      tone: tones.sky,
      title: "K–12 Schools",
      audience: "Classes 3 to 12",
      body: "Computational thinking from Class 3, through CBSE Skill Code 417 (AI) and 843 (AI & Data Science).",
      stats: `${moduleCount(k12Stages)} sub-modules · ${fmt(totalHours(k12Stages))} hours`,
      href: "/k12-school",
    },
    {
      icon: "college",
      tone: tones.lilac,
      title: "Higher Education",
      audience: "B.Tech Year 1 to 4",
      body: "A four-year AI pathway aligned to the AICTE model curriculum, from linear algebra to MLOps and a capstone.",
      stats: `${moduleCount(higherEdYears)} courses · ${fmt(totalHours(higherEdYears))} hours`,
      href: "/higher-education",
    },
    {
      icon: "industry",
      tone: tones.sun,
      title: "FDE Industry Track",
      audience: "Graduates and professionals",
      body: "A 12 to 16 week Forward Deployed AI Engineer bootcamp: data pipelines, RAG, agents, fine-tuning and deployment.",
      stats: `${fdeModules.length} modules · ${moduleCount(fdeModules)} sub-modules`,
      href: "/fde-industry-track",
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: site.name,
          slogan: site.tagline,
          description: site.description,
          url: site.url,
          logo: `${site.url}/brand/logo-lockup.jpg`,
          ...(site.email && { email: site.email }),
          ...(site.phones.length > 0 && { telephone: site.phones[0].replace(/[^+\d]/g, "") }),
          ...(Object.values(site.social).some(Boolean) && { sameAs: Object.values(site.social).filter(Boolean) }),
        }}
      />
      <ShareBar path="/" text={home.shareText} variant="floating" />

      <Hero {...home.hero} aside={<HeroCollage badge={home.offer} />} />

      {/* Impact metrics, computed from content/curriculum.ts so they never drift from the tables */}
      <section className="relative -mt-2 pb-6 pt-4 sm:pt-8">
        <Container>
          <dl className="grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="reveal flex flex-col rounded-3xl bg-cream-100 px-6 py-7 text-center ring-1 ring-navy-900/5">
                <dt className="label text-muted">{m.label}</dt>
                {m.detail && <p className="mt-1 text-xs font-semibold text-navy-900/70">{m.detail}</p>}
                <dd className="order-first font-display text-5xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
          <ShareBar path="/" text={home.shareText} label="Share this page" className="mt-6 justify-center min-[1440px]:hidden" />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Three pathways"
            title="One curriculum, from Class 3 to the workplace"
            body="Each pathway builds on the one before it, so learners move from using AI well to building and deploying it."
          />
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {pathways.map((p) => (
              <li key={p.href} className="reveal">
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-900/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className={`flex size-14 items-center justify-center rounded-2xl ${p.tone.bg} ${p.tone.text}`}>
                    <Icon name={p.icon} className="size-7" />
                  </span>
                  <span className="label mt-6 block text-muted">{p.audience}</span>
                  <span className="mt-2 font-display text-2xl font-bold leading-snug text-navy-900">{p.title}</span>
                  <span className="mt-2.5 flex-1 leading-relaxed text-ink/80">{p.body}</span>
                  <span className="mt-5 font-mono text-sm font-semibold text-navy-900">{p.stats}</span>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-navy-900">
                    View the pathway
                    <span className="flex size-7 items-center justify-center rounded-full bg-gold-400 text-navy-950 transition-transform duration-300 group-hover:translate-x-1.5">
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="on-dark relative overflow-hidden bg-navy-900 py-16 sm:py-24">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              align="left"
              tone="light"
              eyebrow="How we deliver"
              title="Practical learning, run by us on your campus"
            />
            {/* Stock photo of a computer lab (docs/image-credits.md); decorative */}
            <div className="reveal relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white/90">
              <Image src="/images/computer-lab.webp" alt="" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
            </div>
          </div>
          <div className="mt-12">
            <FeatureGrid items={home.pillars} tone="dark" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From one free session to a full programme"
            body="Every partnership starts small and is judged on results before it grows."
          />
          <div className="mt-14">
            <Steps steps={home.startSteps} />
          </div>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/partnerships" variant="navy">
              Partnership models
            </ButtonLink>
            <ButtonLink href="#demo" variant="secondary">
              Book a free demo
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="reveal relative grid gap-6 overflow-hidden rounded-[2rem] bg-mint-100 p-7 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
            <span aria-hidden="true" className="absolute -bottom-16 -right-10 size-56 rounded-full bg-white/60" />
            <span className="relative flex size-20 items-center justify-center rounded-3xl bg-white text-mint-700 shadow-card sm:size-24">
              <ShieldCheck className="size-10 sm:size-12" aria-hidden="true" />
            </span>
            <div className="relative">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                {home.safeguarding.title}
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink">{home.safeguarding.body}</p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Start with 1 free orientation session"
        body="A complimentary first step for every school and college. No cost, no obligation."
        cta={home.hero.primary}
        image="/images/classroom-laptop.webp"
      />
    </>
  );
}
