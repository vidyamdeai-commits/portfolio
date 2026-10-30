import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShareBar } from "@/components/shared/share-bar";
import { sectors, services, type Price } from "@/content/pricing";
import { site } from "@/lib/content";
import { toneAt } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Commercial Models & Engagements",
  description:
    "Tailored engagement models for seminars, teacher training, student training, workshops, lab setup and personalised AI for schools, colleges and the FDE industry track.",
  alternates: { canonical: "/pricing" },
};

function Cell({ p }: { p: Price }) {
  return (
    <>
      <span className={`block font-display text-lg font-extrabold leading-snug ${p.kind === "included" ? "text-mint-700" : "text-navy-900"}`}>
        {p.kind === "included" && <Check className="mr-1 inline size-4 align-[-2px]" aria-hidden="true" />}
        {p.kind === "included" ? "Included in track" : p.label}
      </span>
      <span className="mt-1 block text-sm text-muted">{p.note}</span>
    </>
  );
}

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Commercial models & engagements"
        title="Tailored engagements for every partner"
        accent="every partner"
        body="Six structured service areas for schools, colleges and the FDE industry track. Every engagement starts with 1 free orientation session, so you can judge our practical methodology before committing."
        primary={site.primaryCta}
        secondary={{ label: "See engagement models", href: "#models" }}
        size="long"
      />

      <section id="models" className="scroll-mt-28 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Engagement models"
            title="Six services, three sectors"
            body="All engagements are tailored to your student strength, lab infrastructure, and institutional calendar."
          />

          {/* Table from md up */}
          <div className="mt-12 hidden overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-navy-900/10 md:block">
            <table className="w-full text-left">
              <caption className="sr-only">Engagement models by service and sector</caption>
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th scope="col" className="px-6 py-5 font-display text-lg font-bold">
                    Service
                  </th>
                  {sectors.map((s) => (
                    <th key={s.id} scope="col" className="px-6 py-5">
                      <span className="block font-display text-lg font-bold">{s.title}</span>
                      <span className="block text-sm font-medium text-gold-300">{s.audience}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((svc, i) => (
                  <tr key={svc.id} className={i % 2 ? "bg-cream-100" : "bg-white"}>
                    <th scope="row" className="px-6 py-5 align-top">
                      <span className="font-mono text-sm font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="block font-display text-lg font-bold text-navy-900">{svc.title}</span>
                    </th>
                    {sectors.map((s) => (
                      <td key={s.id} className="px-6 py-5 align-top">
                        <Cell p={svc.prices[s.id]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Phones: one card per sector */}
          <div className="mt-12 grid gap-5 md:hidden">
            {sectors.map((s, si) => {
              const t = toneAt(si);
              return (
                <section key={s.id} aria-labelledby={`sector-${s.id}`} className={`rounded-3xl ${t.bg} p-6`}>
                  <h3 id={`sector-${s.id}`} className="font-display text-2xl font-extrabold text-navy-900">
                    {s.title}
                  </h3>
                  <p className={`label mt-1 ${t.text}`}>{s.audience}</p>
                  <dl className="mt-4 divide-y divide-navy-900/10 rounded-2xl bg-white px-4">
                    {services.map((svc) => (
                      <div key={svc.id} className="py-4">
                        <dt className="font-display font-bold text-navy-900">{svc.title}</dt>
                        <dd className="mt-1">
                          <Cell p={svc.prices[s.id]} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            Commercial terms are scoped on request. Taxes (GST) extra as applicable. A formal written quote is provided after your free orientation session.
          </p>
          <ShareBar path="/pricing" text="Vidyam deAi engagement models for schools, colleges and industry" className="mt-8 justify-center" />
        </Container>
      </section>

      <CtaBand
        title="Schedule your free orientation session"
        body="A complimentary first step for every school, college and team. We'll recommend the right scope and share a formal quote."
        cta={site.primaryCta}
      />
    </>
  );
}
