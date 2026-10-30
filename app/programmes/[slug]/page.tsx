import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Info, Rocket } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { WorkflowMock } from "@/components/sections/mock-screens";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { JsonLd } from "@/components/shared/json-ld";
import { Kicker } from "@/components/shared/kicker";
import { Placeholder } from "@/components/shared/placeholder";
import { getProgramme, getProgrammes, site } from "@/lib/content";
import { toneAt, tones, verticalTone } from "@/lib/theme";

export function generateStaticParams() {
  return getProgrammes().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programmes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) return {};
  return { title: `${p.shortTitle} programme`, description: `${p.summary} ${p.intro}` };
}

// Partial Prefetching is on, so params are awaited inside <Suspense> (see the Cache Components migration guide).
export default function ProgrammePage({ params }: PageProps<"/programmes/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-[70vh] bg-navy-900" />}>
      <ProgrammeContent params={params} />
    </Suspense>
  );
}

const isProject = (topic: string) => topic.startsWith("Project") || topic.startsWith("Capstone");

async function ProgrammeContent({ params }: Pick<PageProps<"/programmes/[slug]">, "params">) {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) notFound();

  const theme = tones[verticalTone[p.vertical]];
  const facts = [
    { label: "Duration", value: p.duration },
    { label: "Batch size", value: p.batchSize },
    { label: "Fee", value: p.fee },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: `${p.shortTitle}: ${p.title}`,
          description: p.intro,
          provider: { "@type": "EducationalOrganization", name: site.name, url: site.url },
        }}
      />
      <section className="on-dark relative overflow-hidden bg-navy-900 text-white">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative grid items-center gap-x-12 gap-y-10 pb-28 pt-12 sm:pt-16 lg:grid-cols-12 lg:pt-20">
          <div className="lg:col-span-8">
            <Kicker tone="light" className="enter">
              {p.number} · {p.shortTitle}
            </Kicker>
            <h1 className="enter mt-6 text-balance font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight [--d:1] sm:text-6xl">
              {p.title}
            </h1>
            <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 [--d:2]">{p.intro}</p>
            <div className="enter mt-9 [--d:3]">
              <ButtonLink href={p.cta.href} className="w-full sm:w-auto">
                {p.cta.label}
              </ButtonLink>
            </div>
          </div>
          {/* Most visitors arrive on a phone, so the hero visual shows at every width: a wide
              banner under the text on small screens, the tall aside beside it from `lg`. */}
          {p.heroImage ? (
            <div aria-hidden="true" className="enter relative mx-auto w-full [--d:2] lg:col-span-4 lg:max-w-sm">
              <span className="absolute -right-4 -top-4 size-20 rounded-full bg-gold-400 sm:-right-6 sm:-top-6 sm:size-28" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/15 lg:aspect-[4/5]">
                <Image src={p.heroImage} alt="" fill sizes="(min-width: 1024px) 24rem, 100vw" className="object-cover" />
              </div>
            </div>
          ) : p.vertical === "industry" ? (
            /* No stock photo qualifies for this page (India-set and face-free), so it gets an illustration. */
            <div className="enter relative mx-auto w-full max-w-sm [--d:2] lg:col-span-4">
              <span aria-hidden="true" className="absolute -right-4 -top-4 size-20 rounded-full bg-gold-400 sm:-right-6 sm:-top-6 sm:size-28" />
              <WorkflowMock className="bob relative rotate-2" />
            </div>
          ) : (
            <div aria-hidden="true" className="enter relative mx-auto size-48 [--d:2] sm:size-64 lg:col-span-4">
              <span className="absolute inset-0 rounded-full bg-gold-400" />
              <span className={`absolute inset-6 flex items-center justify-center rounded-[2rem] ${theme.bg} ${theme.text} bob rotate-6 shadow-lift sm:inset-8 sm:rounded-[2.5rem]`}>
                <Icon name={p.vertical} className="size-16 -rotate-6 sm:size-24" />
              </span>
            </div>
          )}
        </Container>
      </section>

      {/* Key facts: a card that overlaps the hero */}
      <section className="relative -mt-16">
        <Container>
          <dl className="grid gap-px overflow-hidden rounded-3xl bg-navy-900/10 shadow-lift sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6">
              <dt className="label text-muted">For</dt>
              <dd className="mt-2 font-display font-bold leading-snug text-navy-900">{p.audience}</dd>
            </div>
            {facts.map((f) => (
              <div key={f.label} className="bg-white p-6">
                <dt className="label text-muted">{f.label}</dt>
                <dd className="mt-2 font-display font-bold text-navy-900">
                  {f.value ?? <Placeholder label={f.label.toLowerCase()} fallback="On request" />}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            What you&apos;ll learn
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {p.modules.map((m, i) => {
              const t = toneAt(i);
              return (
                <li key={m.title} className="reveal flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-900/5">
                  <div className={`${t.bg} px-6 py-5`}>
                    <p className="label flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 ${t.chip}`}>{m.code ?? `Module ${i + 1}`}</span>
                      {m.badge && <span className="normal-case tracking-normal text-navy-900">{m.badge}</span>}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-navy-900">{m.title}</h3>
                  </div>
                  <ul className="flex-1 space-y-3 p-6">
                    {m.topics.map((topic) =>
                      isProject(topic) ? (
                        <li key={topic} className="flex gap-3 rounded-2xl bg-navy-900 px-4 py-3 font-medium leading-relaxed text-white">
                          <Rocket className="mt-0.5 size-5 shrink-0 text-gold-300" aria-hidden="true" />
                          {topic}
                        </li>
                      ) : (
                        <li key={topic} className="flex gap-3 leading-relaxed">
                          <span className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${t.bg} ${t.text}`}>
                            <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                          </span>
                          {topic}
                        </li>
                      ),
                    )}
                  </ul>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className={`${theme.bg} py-16 sm:py-24`}>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="rounded-3xl bg-white p-7 shadow-card sm:p-9 lg:col-span-7">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              {p.vertical === "wellness" ? "Programmes for every age" : "You leave with"}
            </h2>
            <ul className="mt-6 space-y-4">
              {p.outcomes.map((o) => (
                <li key={o} className="flex gap-3 leading-relaxed">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                    <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-navy-900 p-7 text-white shadow-card sm:p-9 lg:col-span-5">
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Formats</h2>
            <ul className="mt-6 space-y-3">
              {p.formats.map((f) => (
                <li key={f} className="rounded-2xl bg-white/10 px-5 py-4 font-display font-bold ring-1 ring-white/15">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Container>
        {p.disclaimer && (
          <Container className="mt-8">
            <p role="note" className="flex gap-4 rounded-3xl border-2 border-gold-500 bg-white p-6 leading-relaxed text-ink sm:p-8">
              <Info className="mt-0.5 size-6 shrink-0 text-gold-800" aria-hidden="true" />
              <span>{p.disclaimer}</span>
            </p>
          </Container>
        )}
      </section>

      <CtaBand title="Ready to start?" body="Tell us a little about you and we'll get back within one working day." cta={p.cta} />
    </>
  );
}
