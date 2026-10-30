import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { GatedSyllabus } from "@/components/sections/gated-syllabus";
import { Hero } from "@/components/sections/hero";
import { StageCards, type Teaser } from "@/components/sections/stage-cards";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShareBar } from "@/components/shared/share-bar";
import { fdeModules, higherEdYears, k12Stages, moduleCount, totalHours } from "@/content/curriculum";
import { home, site } from "@/lib/content";
import { toneAt } from "@/lib/theme";

export const metadata: Metadata = {
  title: "K–12 Schools",
  description:
    "A complete AI pathway for Classes 3 to 12: computational thinking, then CBSE Skill Code 417 (AI) and 843 (AI & Data Science). Book a free demo.",
  alternates: { canonical: "/k12-school" },
};

/**
 * Public teaser per stage. Themes and the sample project are written at stage level on
 * purpose: the sub-module list itself stays behind the demo gate (spec v2, section 6).
 */
const teaser: Teaser = {
  "Preparatory Stage": {
    themes: ["Patterns in nature and numbers", "Breaking a problem into steps", "Unplugged logic games and flowcharts", "Spotting AI in everyday life"],
    sample: "An observational portfolio of AI around them, presented in a short viva",
  },
  "Middle Stage": {
    themes: ["Abstraction and flowcharts", "Rule-based systems vs machine learning", "Block coding and simple chatbots", "A group research project on a UN SDG"],
    sample: "A Scratch interactive project and a hands-on data labelling lab",
  },
  "Secondary Level": {
    themes: ["The AI project cycle", "Python programming", "Computer vision and language basics", "Generative AI, bias and ethics"],
    sample: "An OpenCV image lab and a CBSE project portfolio",
  },
  "Senior Secondary": {
    themes: ["Python for data: NumPy and Pandas", "Machine learning and model evaluation", "Vision and language models", "A 30-hour practical capstone"],
    sample: "A CNN image classifier and a board capstone with video portfolio",
  },
};

const shareText = "The Vidyam deAi K–12 AI roadmap: Class 3 to 12, CBSE 417 and 843 aligned";

export default function K12Page() {
  const k12Modules = moduleCount(k12Stages);
  const k12Hours = totalHours(k12Stages);
  const siteModules = moduleCount([...k12Stages, ...higherEdYears, ...fdeModules]);

  const glance = [
    { label: "Classes", value: "3 to 12, in four stages" },
    { label: "Frameworks", value: "CBSE Skill Codes 417 and 843" },
    { label: "Depth", value: `${k12Modules} sub-modules, ${k12Hours} hours` },
    { label: "First step", value: "1 free orientation session" },
  ];

  return (
    <>
      <Hero
        eyebrow="K–12 Schools · Classes 3 to 12"
        title="A complete AI pathway, from Class 3 to Class 12"
        accent="from Class 3 to Class 12"
        body="Computational thinking in the early years, then CBSE Skill Code 417 (Artificial Intelligence) in Classes 9 and 10 and 843 (AI & Data Science) in 11 and 12. Every hour is practical, in your lab."
        size="long"
        primary={site.primaryCta}
        secondary={{ label: "See the four stages", href: "#stages" }}
        aside={
          <dl className="grid gap-4 sm:grid-cols-2">
            {glance.map((g, i) => (
              <div key={g.label} className={`rounded-3xl ${toneAt(i).bg} p-6 text-navy-900 shadow-lift`}>
                <dt className={`label ${toneAt(i).text}`}>{g.label}</dt>
                <dd className="mt-2 font-display text-xl font-bold leading-snug">{g.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section id="stages" className="scroll-mt-28 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The K–12 roadmap"
            title="Four stages that grow with your students"
            body="Each stage builds on the last, from unplugged logic games to machine learning models and a board capstone."
          />
          <StageCards stages={k12Stages} teaser={teaser} stageLabel="Stage" />
          <ShareBar path="/k12-school" text={shareText} label="Share the K–12 roadmap" className="mt-10 justify-center" />
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Full syllabus"
            title={`All ${k12Modules} sub-modules, with codes and hours`}
            body="The detailed syllabus, with every sub-module, its hours and how it is assessed, is shared with schools after a free demo."
          />
          <div className="mt-12">
            <GatedSyllabus rows={k12Modules} codePrefix="CT" phaseCount={k12Modules} phaseTitle="K–12 sub-modules" totalModules={siteModules} />
          </div>
        </Container>
      </section>

      <section className="on-dark relative overflow-hidden bg-navy-900 py-16 sm:py-24">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading align="left" tone="light" eyebrow="How we deliver" title="Run by us, inside your timetable" />
            {/* Stock photo (docs/image-credits.md); decorative */}
            <div className="reveal relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white/90">
              <Image src="/images/student-blackboard.webp" alt="" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
            </div>
          </div>
          <div className="mt-12">
            <FeatureGrid items={home.pillars} tone="dark" />
          </div>
        </Container>
      </section>

      <CtaBand
        title="See the full K–12 syllabus"
        body="Book a free demo for your school. We'll send the complete syllabus and a sample activity workbook."
        cta={site.primaryCta}
        image="/images/school-classroom-chennai.webp"
      />
    </>
  );
}
