import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/sections/cta-band";
import { CurriculumExplorer } from "@/components/sections/curriculum-explorer";
import { FaqList } from "@/components/sections/faq-list";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { Steps } from "@/components/sections/steps";
import { ThinkingHabit } from "@/components/sections/thinking-habit";
import { ToolsStrip } from "@/components/sections/tools-strip";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  automationTools,
  getProgramme,
  home,
  schoolFaqs,
  schools,
  site,
  strands,
  thinkingHabit,
} from "@/lib/content";
import { toneAt } from "@/lib/theme";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "An after-school AI, automation and data programme for Classes 6 to 12, with wellbeing built in. Book a free 1-hour AI workshop for your school.",
};

export default function ForSchoolsPage() {
  const school = getProgramme("school");
  return (
    <>
      <Hero
        {...schools.hero}
        size="long"
        primary={site.primaryCta}
        aside={
          <dl className="grid gap-4 sm:grid-cols-2">
            {schools.glance.map((g, i) => (
              <div key={g.label} className={`rounded-3xl ${toneAt(i).bg} p-6 text-navy-900 shadow-lift`}>
                <dt className={`label ${toneAt(i).text}`}>{g.label}</dt>
                <dd className="mt-2 font-display text-xl font-bold leading-snug">{g.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section id="curriculum" className="scroll-mt-28 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title="A clear pathway from Class 6 to 12"
            body="Each strand grows harder every year. Every class ends with a real project students can show."
          />
          <div className="mt-10 rounded-[2rem] bg-sky-100 p-4 sm:p-8">
            <CurriculumExplorer strands={strands} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <ThinkingHabit intro={thinkingHabit.intro} steps={thinkingHabit.steps} />
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Stock photo (docs/image-credits.md); decorative, nobody identifiable */}
            <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white">
              <Image
                src="/images/student-blackboard.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <SectionHeading
              align="left"
              eyebrow="Automation"
              title="From Scratch blocks to the tools software companies use"
              body="Class 6–7 start with steps and flowcharts, Class 8–10 move to Python and APIs, and Class 11–12 learn real test automation and CI/CD."
            />
          </div>
          <div className="mt-12">
            <ToolsStrip label="Test automation in Class 10–12" tools={automationTools} />
          </div>
        </Container>
      </section>

      {school && (
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Learning by building" title="What students build" />
            <div className="mt-12">
              <ProjectShowcase modules={school.modules} />
            </div>
            <p className="mt-6 text-center text-sm text-muted">Screens are illustrations of each project type.</p>
          </Container>
        </section>
      )}

      <section className="on-dark relative overflow-hidden bg-navy-900 py-16 sm:py-24">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative">
          <SectionHeading tone="light" eyebrow="What your school gets" title="We plan, staff and run it" />
          <div className="mt-12">
            <FeatureGrid items={home.schoolGets} tone="dark" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How it works" title="Five simple steps" />
          <div className="mt-14">
            <Steps steps={home.howItWorks} />
          </div>
        </Container>
      </section>

      <section className="bg-sun-100 py-16 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions schools ask" />
          <div className="mt-10">
            <FaqList faqs={schoolFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Start with a free AI workshop"
        body="A 1-hour hands-on session and demo class for your students, plus a short planning meeting with your team."
        cta={site.primaryCta}
        image="/images/school-classroom-chennai.webp"
      />
    </>
  );
}
