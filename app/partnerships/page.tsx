import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { Steps } from "@/components/sections/steps";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShareBar } from "@/components/shared/share-bar";
import type { Feature, Step } from "@/lib/content";
import { site } from "@/lib/content";
import { toneAt } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Campus hiring drives, employer cohorts, school and college integration and joint talent programmes, starting with a small pilot judged on results.",
  alternates: { canonical: "/partnerships" },
};

/** Spec v2 section 4.7. Stream and step names are the client's; the one-line bodies are ours. */
const streams: Feature[] = [
  {
    icon: "briefcase",
    title: "Campus hiring drives",
    body: "We prepare and shortlist trained candidates, then run the drive with your recruiters on campus.",
  },
  {
    icon: "users",
    title: "Employer cohorts",
    body: "A cohort trained to your stack and roles, so new hires are productive from their first week.",
  },
  {
    icon: "school",
    title: "School & college integration",
    body: "Our curriculum, instructors and labs, built into your timetable and credit scheme.",
  },
  {
    icon: "handshake",
    title: "Joint talent programmes",
    body: "Co-designed programmes with industry partners, from syllabus to final interviews.",
  },
];

const pipeline: Step[] = [
  { title: "Share requirements", body: "You tell us the roles, skills and numbers you need." },
  { title: "Map skills", body: "We map each role to our modules and close the gaps." },
  { title: "Prepare candidates", body: "Learners train on real projects with mentors." },
  { title: "Screen profiles", body: "We assess and shortlist using portfolios and tests." },
  { title: "Employer interviews", body: "You interview a ready shortlist, not a crowd." },
  { title: "Improve", body: "Your feedback shapes the next cohort." },
];

const pilot: Step[] = [
  { title: "Define", body: "Goals, learners and success measures, agreed up front." },
  { title: "Agree", body: "Scope, schedule and commercial model fixed in writing." },
  { title: "Evaluate", body: "The pilot runs and is measured against what we agreed." },
  { title: "Review", body: "We review results together and decide on the full rollout." },
];

export default function PartnershipsPage() {
  const glance = [
    { label: "Engagement streams", value: "4" },
    { label: "Operating pipeline", value: "6 steps" },
    { label: "Pilot framework", value: "4 steps" },
    { label: "First step", value: "1 free session" },
  ];

  return (
    <>
      <Hero
        eyebrow="Partnerships & implementation"
        title="Partner with us to build job‑ready AI talent"
        accent="job‑ready AI talent"
        body="We work with schools, colleges and employers to prepare learners for real roles. Every partnership starts with a small pilot that is judged on results before it grows."
        size="long"
        primary={site.primaryCta}
        secondary={{ label: "How a pilot works", href: "#pilot" }}
        aside={
          <dl className="grid grid-cols-2 gap-4">
            {glance.map((g, i) => (
              <div key={g.label} className={`flex flex-col rounded-3xl ${toneAt(i).bg} p-6 text-navy-900 shadow-lift`}>
                <dt className={`label ${toneAt(i).text}`}>{g.label}</dt>
                <dd className="order-first font-display text-4xl font-extrabold tracking-tight">{g.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Ways to work with us"
            title="Four engagement streams"
            body="Pick the one that fits, or combine them. Each can start as a pilot."
          />
          <div className="mt-12">
            <FeatureGrid items={streams} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Operating pipeline"
            title="From your requirements to your next hire"
            body="The same six steps run behind every hiring drive, cohort and talent programme."
          />
          <div className="mt-14">
            <Steps steps={pipeline} />
          </div>
        </Container>
      </section>

      <section id="pilot" className="on-dark relative scroll-mt-28 overflow-hidden bg-navy-900 py-16 sm:py-24">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="Pilot framework"
            title="Start small, measure, then scale"
            body="No long contract up front. A pilot proves the fit first."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pilot.map((p, i) => (
              <li key={p.title} className="on-light reveal rounded-3xl bg-white p-7 shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-navy-950">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{p.body}</p>
              </li>
            ))}
          </ol>
          <ShareBar
            path="/partnerships"
            text="Partner with Vidyam deAi to build job‑ready AI talent"
            label="Share"
            className="on-light mx-auto mt-12 w-fit rounded-full bg-white px-4 py-2"
          />
        </Container>
      </section>

      <CtaBand
        title="Start with a pilot"
        body="Book a free orientation session and we'll scope a pilot around your goals."
        cta={site.primaryCta}
        image="/images/workshop-audience.webp"
      />
    </>
  );
}
