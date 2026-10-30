import type { Metadata } from "next";
import { GitBranch, MessagesSquare } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { GatedSyllabus } from "@/components/sections/gated-syllabus";
import { Hero } from "@/components/sections/hero";
import { StageCards, type Teaser } from "@/components/sections/stage-cards";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShareBar } from "@/components/shared/share-bar";
import { fdeModules, higherEdYears, k12Stages, moduleCount } from "@/content/curriculum";
import { site } from "@/lib/content";
import { toneAt } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Forward Deployed AI Engineer Track",
  description:
    "A 12 to 16 week bootcamp for Forward Deployed AI Engineers: data pipelines, RAG and agents, fine-tuning, MLOps and a live client deployment, mentored by working engineers.",
  alternates: { canonical: "/fde-industry-track" },
};

/** Module-level summary. Sub-module codes and hours stay behind the demo gate. */
const teaser: Teaser = {
  "Module 1": {
    themes: ["Production ETL and ELT pipelines", "Real-time streaming with Kafka", "Vector databases and hybrid search", "Data security, RBAC and VPC isolation"],
    sample: "An Airflow pipeline deployment and a vector database benchmark",
  },
  "Module 2": {
    themes: ["Document parsing and chunking", "Advanced RAG: query rewriting and re-ranking", "Autonomous agents and function calling", "Evaluating RAG systems and agents"],
    sample: "A multi-agent system build with an automated benchmark suite",
  },
  "Module 3": {
    themes: ["Open-source LLMs and dataset curation", "Fine-tuning with LoRA and QLoRA", "Preference alignment: RLHF and DPO", "Structured JSON output extraction"],
    sample: "A LoRA adapter fine-tune and a DPO alignment pipeline",
  },
  "Module 4": {
    themes: ["High-throughput inference with vLLM", "Quantisation and GPU acceleration", "Docker, Kubernetes and KServe", "CI/CD, observability and cost caching"],
    sample: "High-throughput model serving on a Kubernetes cluster",
  },
  "Module 5": {
    themes: ["AI safety and guardrails", "Private cloud and on-premise deployment", "Client scoping, proof of concept and ROI", "A real enterprise capstone"],
    sample: "A live client system, deployed and handed over",
  },
};

const readiness = [
  {
    icon: MessagesSquare,
    title: "Mentored by working engineers",
    body: "Practising software and AI engineers guide every cohort on what the job market wants now, real interview experiences and scenario-based problem solving.",
  },
  {
    icon: GitBranch,
    title: "A portfolio recruiters can open",
    body: "Clean code repositories, a structured Git profile and public GitHub capstone demos, reviewed before you start interviewing.",
  },
];

export default function FdePage() {
  const subModules = moduleCount(fdeModules);
  const siteModules = moduleCount([...k12Stages, ...higherEdYears, ...fdeModules]);

  const glance = [
    { label: "Format", value: "12 to 16 week bootcamp" },
    { label: "Curriculum", value: `${fdeModules.length} modules, ${subModules} sub-modules` },
    { label: "Capstone", value: "A live client deployment" },
    { label: "First step", value: "1 free orientation session" },
  ];

  return (
    <>
      <Hero
        eyebrow="Industry track · FDE"
        title="Become a Forward Deployed AI Engineer"
        accent="Forward Deployed AI Engineer"
        body="A hands-on bootcamp for graduates and working engineers who want to build and deploy AI inside real companies: data pipelines, RAG and agents, fine-tuning, production MLOps and a live client handover."
        size="long"
        primary={site.primaryCta}
        secondary={{ label: "See the five modules", href: "#modules" }}
        aside={
          <dl className="grid gap-4 sm:grid-cols-2">
            {glance.map((g, i) => (
              <div key={g.label} className={`rounded-3xl ${toneAt(i + 1).bg} p-6 text-navy-900 shadow-lift`}>
                <dt className={`label ${toneAt(i + 1).text}`}>{g.label}</dt>
                <dd className="mt-2 font-display text-xl font-bold leading-snug">{g.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section id="modules" className="scroll-mt-28 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Five modules"
            title="From raw data to a live client system"
            body="Each module ends in a real deliverable you can show. Share any module with a colleague using the buttons on its card."
          />
          <StageCards
            stages={fdeModules}
            teaser={teaser}
            share={{
              path: "/fde-industry-track",
              anchor: "module",
              text: (s) => `${s.title} of the Vidyam deAi Forward Deployed AI Engineer track: ${s.sub}`,
            }}
          />
        </Container>
      </section>

      <section className="on-dark relative overflow-hidden bg-navy-900 py-16 sm:py-24">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="Job-ready"
            title="Mentorship and a portfolio that gets you hired"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {readiness.map((r, i) => (
              <li key={r.title} className="on-light reveal rounded-3xl bg-white p-8 shadow-lift">
                <span className={`flex size-14 items-center justify-center rounded-2xl ${toneAt(i + 2).bg} ${toneAt(i + 2).text}`}>
                  <r.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">{r.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink/80">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Full syllabus"
            title={`All ${subModules} sub-modules, with codes and hours`}
            body="The detailed syllabus, with hours and the real-world deliverable for each sub-module, is shared after a free demo."
          />
          <div className="mt-12">
            <GatedSyllabus
              rows={subModules}
              codePrefix="FDE"
              phaseCount={subModules}
              phaseTitle="FDE sub-modules"
              totalModules={siteModules}
              columns={["Code", "Sub-module", "Hours", "Deliverable & assessment"]}
            />
          </div>
          <ShareBar path="/fde-industry-track" text="The Vidyam deAi Forward Deployed AI Engineer track" label="Share this track" className="mt-10 justify-center" />
        </Container>
      </section>

      <CtaBand
        title="Talk to us about the FDE track"
        body="Book a free orientation session for your team or cohort. We'll send the full syllabus and a sample workbook."
        cta={site.primaryCta}
        image="/images/hero-laptop.webp"
      />
    </>
  );
}
