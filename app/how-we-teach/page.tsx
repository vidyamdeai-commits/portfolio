import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Steps } from "@/components/sections/steps";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import { Placeholder } from "@/components/shared/placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { howWeTeach, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "How we teach",
  description:
    "Six formats, hands-on projects in every module, progress reports for parents and schools, and a three-step way to join.",
};

export default function HowWeTeachPage() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-navy-900 pb-16 pt-12 text-white sm:pt-16 lg:pb-20 lg:pt-20">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <span aria-hidden="true" className="absolute -right-24 -top-28 hidden size-80 rounded-full bg-gold-400/90 lg:block" />
        <Container className="relative">
          <Kicker tone="light" className="enter">
            {howWeTeach.hero.eyebrow}
          </Kicker>
          <h1 className="enter mt-6 max-w-3xl text-balance font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight [--d:1] sm:text-6xl">
            {howWeTeach.hero.title}
          </h1>
          <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 [--d:2]">{howWeTeach.hero.body}</p>
          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row [--d:3]">
            <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
            <ButtonLink href={howWeTeach.hero.secondary.href} variant="light">
              {howWeTeach.hero.secondary.label}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Formats"
            title="Six ways to run the same curriculum"
            body="The syllabus, the projects and the standards do not change with the format. Only the place and the timetable do."
          />
          <div className="mt-12">
            <FeatureGrid items={howWeTeach.formats} />
          </div>
        </Container>
      </section>

      <section className="bg-sky-100 py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading align="left" eyebrow="Every learner gets" title="What is included, whichever format you pick" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {howWeTeach.included.map((item) => (
              <li key={item} className="reveal flex items-center gap-4 rounded-2xl bg-white px-5 py-4 font-medium text-navy-900 shadow-card">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                  <Check className="size-4.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="In the classroom"
            title="How a class actually runs"
            body="The same four things happen in every session, so a parent or a principal always knows what to expect."
          />
          <div className="mt-12">
            <FeatureGrid items={howWeTeach.inTheClassroom} />
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How to join" title="Three steps, starting with a free class" />
          <div className="mt-14">
            <Steps steps={howWeTeach.steps} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading align="left" eyebrow="Fees" title="What it costs" body={howWeTeach.fees.intro} />
          <div className="mt-10 overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-900/5">
            <table className="w-full border-collapse bg-white text-left">
              <caption className="sr-only">Programme fees and durations</caption>
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th scope="col" className="px-5 py-4 font-display text-sm font-bold sm:px-7">
                    Programme
                  </th>
                  <th scope="col" className="px-5 py-4 font-display text-sm font-bold sm:px-7">
                    Duration
                  </th>
                  <th scope="col" className="px-5 py-4 font-display text-sm font-bold sm:px-7">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {howWeTeach.fees.rows.map((row) => (
                  <tr key={row.programme} className="border-t border-navy-900/10 align-top">
                    <th scope="row" className="px-5 py-4 font-display font-bold text-navy-900 sm:px-7">
                      {row.programme}
                    </th>
                    <td className="px-5 py-4 sm:px-7">
                      {row.duration ?? <Placeholder label={row.unit} fallback="On request" />}
                    </td>
                    <td className="px-5 py-4 sm:px-7">{row.fee ?? <Placeholder label="fee" fallback="On request" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">{howWeTeach.fees.note}</p>
        </Container>
      </section>

      <CtaBand title={howWeTeach.cta.title} body={howWeTeach.cta.body} cta={site.primaryCta} />
    </>
  );
}
