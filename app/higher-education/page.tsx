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
import type { Feature } from "@/lib/content";
import { site } from "@/lib/content";
import { toneAt } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Higher Education",
  description:
    "A four-year AI pathway for B.Tech Computer Science, aligned to the AICTE model curriculum: from linear algebra to deep learning, MLOps and an industry capstone.",
  alternates: { canonical: "/higher-education" },
};

/** Year-level summary written from the spec's course list. The course table itself stays gated. */
const teaser: Teaser = {
  "Year 1": {
    themes: ["Linear algebra, calculus and statistics", "Problem solving in Python", "Data structures and algorithms", "Digital logic and discrete maths"],
    sample: "Python lab practicals and a data-structures coding lab",
  },
  "Year 2": {
    themes: ["Maths for machine learning", "Classical AI and search", "Databases, SQL and NoSQL", "Statistical machine learning"],
    sample: "An AI search algorithm project and an ETL data pipeline",
  },
  "Year 3": {
    themes: ["Deep learning with PyTorch or TensorFlow", "Computer vision and NLP", "Transformers and large language models", "Reinforcement learning, big data and AI ethics"],
    sample: "A transformer pre-training lab and a vision object-tracking lab",
  },
  "Year 4": {
    themes: ["Generative AI, RAG and agents", "MLOps and model deployment", "Electives: explainable and edge AI", "Capstone and industry internship"],
    sample: "An agentic RAG system and a production MLOps pipeline",
  },
};

const forColleges: Feature[] = [
  {
    icon: "layers",
    title: "Fits your scheme",
    body: "Courses map to the AICTE 163-credit model, so they sit inside your existing semesters.",
  },
  {
    icon: "users",
    title: "Faculty development",
    body: "A faculty development programme so your own teachers can deliver and extend the courses.",
  },
  {
    icon: "lab",
    title: "Lab-first teaching",
    body: "Every course is assessed through lab work, projects and benchmarks, not theory alone.",
  },
  {
    icon: "git",
    title: "Portfolio-ready graduates",
    body: "Capstones and labs end up on public GitHub profiles that recruiters can review.",
  },
];

const shareText = "A four-year AI pathway for B.Tech, aligned to AICTE, from Vidyam deAi";

export default function HigherEducationPage() {
  const courses = moduleCount(higherEdYears);
  const hours = totalHours(higherEdYears);
  const siteModules = moduleCount([...k12Stages, ...higherEdYears, ...fdeModules]);

  const glance = [
    { label: "Programme", value: "B.Tech CSE, Year 1 to 4" },
    { label: "Framework", value: "AICTE 163-credit model" },
    { label: "Depth", value: `${courses} courses, ${hours.toLocaleString("en-IN")} hours` },
    { label: "First step", value: "1 free orientation session" },
  ];

  return (
    <>
      <Hero
        eyebrow="Higher Education · B.Tech pathway"
        title="A four-year AI pathway, aligned to AICTE"
        accent="aligned to AICTE"
        body="Built on the AICTE 163-credit model curriculum for B.Tech Computer Science Engineering: from linear algebra in Year 1 to generative AI, MLOps and an industry capstone in Year 4."
        size="long"
        primary={site.primaryCta}
        secondary={{ label: "See the four years", href: "#years" }}
        aside={
          <dl className="grid gap-4 sm:grid-cols-2">
            {glance.map((g, i) => (
              <div key={g.label} className={`rounded-3xl ${toneAt(i + 4).bg} p-6 text-navy-900 shadow-lift`}>
                <dt className={`label ${toneAt(i + 4).text}`}>{g.label}</dt>
                <dd className="mt-2 font-display text-xl font-bold leading-snug">{g.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section id="years" className="scroll-mt-28 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Year by year"
            title="From foundations to deployment"
            body="Each year builds on the last: maths and programming first, then core AI, deep learning, and finally generative AI and production systems."
          />
          <StageCards stages={higherEdYears} teaser={teaser} countLabel="courses" />
          <ShareBar path="/higher-education" text={shareText} label="Share the B.Tech pathway" className="mt-10 justify-center" />
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Full syllabus"
            title={`All ${courses} courses, with codes and hours`}
            body="The detailed course list, with hours and assessment for each course, is shared with colleges after a free demo."
          />
          <div className="mt-12">
            <GatedSyllabus rows={courses} codePrefix="UG" phaseCount={courses} phaseTitle="B.Tech courses" totalModules={siteModules} columns={["Code", "Course", "Hours", "Delivery & assessment"]} />
          </div>
        </Container>
      </section>

      <section className="on-dark relative overflow-hidden bg-navy-900 py-16 sm:py-24">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading align="left" tone="light" eyebrow="For colleges" title="Built to sit inside your programme" />
            {/* Stock photo (docs/image-credits.md); decorative */}
            <div className="reveal relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white/90">
              <Image src="/images/college-campus-india.webp" alt="" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
            </div>
          </div>
          <div className="mt-12">
            <FeatureGrid items={forColleges} tone="dark" />
          </div>
        </Container>
      </section>

      <CtaBand
        title="See the full B.Tech syllabus"
        body="Book a free demo for your department. We'll send the complete course list and a sample activity workbook."
        cta={site.primaryCta}
        image="/images/student-laptop-above.webp"
      />
    </>
  );
}
