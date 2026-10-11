import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { CurriculumExplorer } from "@/components/sections/curriculum-explorer";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero, HeroCollage } from "@/components/sections/hero";
import { ProgrammeCards } from "@/components/sections/programme-cards";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { Steps } from "@/components/sections/steps";
import { ToolsStrip } from "@/components/sections/tools-strip";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { JsonLd } from "@/components/shared/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { automationTools, getProgramme, getProgrammes, home, site, strands } from "@/lib/content";

export default function HomePage() {
  const school = getProgramme("school");
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
        }}
      />
      <Hero {...home.hero} primary={site.primaryCta} aside={<HeroCollage badge={home.offer} />} />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Why Vidyam deAi" title="Why we are different" />
          <div className="mt-12">
            <FeatureGrid items={home.differentiators} />
          </div>
        </Container>
      </section>

      <section className="relative bg-sky-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="For schools"
            title="AI and data skills for every class"
            body="Five strands that grow harder each year, so students move from using AI well to building with it."
          />
          <div className="mt-10">
            <CurriculumExplorer strands={strands} />
          </div>
          <div className="mt-14">
            <ToolsStrip label="Automation tools students meet by Class 10–12" tools={automationTools} />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/for-schools" variant="navy">
              See the full school programme
            </ButtonLink>
          </div>
        </Container>
      </section>

      {school && (
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Learning by building"
              title="What students build"
              body="Every class ends with a real project students can show."
            />
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading align="left" tone="light" eyebrow="What your school gets" title="A complete programme, run by us" />
            {/* Stock photo of a computer lab (docs/image-credits.md); decorative */}
            <div className="reveal relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white/90">
              <Image
                src="/images/computer-lab.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-12">
            <FeatureGrid items={home.schoolGets} tone="dark" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How it works" title="From a free workshop to a full programme" />
          <div className="mt-14">
            <Steps steps={home.howItWorks} />
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

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="One learning path"
            title="From Class 5 to college and career"
            body="Beyond schools, we teach college students, professionals and families, and run a dedicated programme for mental health and mindfulness."
          />
          <div className="mt-12">
            <ProgrammeCards programmes={getProgrammes()} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="See it in your school, free"
        body="Book a 1-hour hands-on AI workshop and demo class for your students. No cost, no obligation."
        cta={site.primaryCta}
        image="/images/classroom-laptop.webp"
      />
    </>
  );
}
