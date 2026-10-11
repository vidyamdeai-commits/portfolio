import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/sections/cta-band";
import { ProgrammeCards } from "@/components/sections/programme-cards";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import { getProgrammes, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Learn AI, build with AI, live better with AI: programmes for schools, colleges, industry professionals, everyday life, and mind and wellness.",
};

const headline = ["Learn AI.", "Build with AI.", "Live better with AI."];

export default function ProgrammesPage() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-navy-900 pb-40 pt-12 text-white sm:pt-16 lg:pt-20">
        <div aria-hidden="true" className="dots absolute inset-0" />
        <Container className="relative grid items-center gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Kicker tone="light" className="enter">
              Course curriculum 2026–27
            </Kicker>
            <h1 className="enter mt-6 font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-tight [--d:1] sm:text-6xl lg:text-[4.25rem]">
              {headline.map((line, i) => (
                <span key={line} className={i === headline.length - 1 ? "block text-gold-300" : "block"}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="enter mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 [--d:2]">
              One learning path from Class 6 to college and career: hands-on computer science and AI, industry-ready
              domain skills, AI coaching for everyday life, and a dedicated programme for mental health and mindfulness.
            </p>
          </div>
          <div aria-hidden="true" className="enter relative [--d:2] lg:col-span-5">
            <span className="absolute -right-4 -top-4 size-20 rounded-full bg-gold-400 sm:-right-6 sm:-top-6 sm:size-28" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/15 lg:aspect-[4/5]">
              <Image src="/images/school-corridor-arches.webp" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <section className="relative -mt-28 pb-8">
        <Container>
          <ProgrammeCards programmes={getProgrammes()} />
        </Container>
      </section>
      <CtaBand
        title="Not sure which programme fits?"
        body="Tell us about your school, college or goals and we'll suggest the right track."
        cta={{ label: "Talk to us", href: "/contact" }}
      />
      <span className="sr-only">{site.name}</span>
    </>
  );
}
