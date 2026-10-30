import Image from "next/image";
import { Gift } from "lucide-react";
import { ChatMock, ClassifierMock, CodeMock } from "@/components/sections/mock-screens";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Kicker } from "@/components/shared/kicker";
import type { Cta } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Splits a headline so its closing words can take the accent colour: at `accent` when
 * given (it must end the title), otherwise at the first comma.
 */
function splitTitle(title: string, accent?: string) {
  if (accent && title.endsWith(accent)) return [title.slice(0, -accent.length).trimEnd(), accent];
  const at = title.indexOf(", ");
  return at === -1 ? [title] : [title.slice(0, at + 1), title.slice(at + 2)];
}

/** Layered illustration of student projects, with the offer as a floating badge. */
export function HeroCollage({ badge }: { badge?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-md pb-6 pt-4 lg:max-w-none">
      <span aria-hidden="true" className="absolute -right-6 -top-2 size-64 rounded-full bg-gold-400 sm:size-80" />
      <span aria-hidden="true" className="absolute -left-4 bottom-0 size-28 rounded-3xl bg-sky-700 sm:size-36" />
      {/* Stock photo (see docs/image-credits.md). Decorative: no real student is shown or implied. */}
      <div className="relative ml-auto aspect-[4/3] w-[88%] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white/90">
        <Image
          src="/images/hero-laptop.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="relative -mt-24 grid grid-cols-12 items-end gap-3 sm:-mt-28 sm:gap-4">
        <ChatMock className="bob col-span-7" />
        <div className="col-span-5 space-y-3 sm:space-y-4">
          <ClassifierMock className="bob [--d:1]" />
          <CodeMock className="bob hidden sm:block [--d:2]" />
        </div>
      </div>
      {badge && (
        <p className="absolute -left-2 top-0 flex max-w-[15rem] items-center gap-2.5 rounded-2xl bg-white px-4 py-3 font-display text-sm font-bold leading-snug text-navy-900 shadow-lift sm:-left-6">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-coral-100 text-coral-700">
            <Gift className="size-5" aria-hidden="true" />
          </span>
          {badge}
        </p>
      )}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  accent,
  body,
  primary,
  secondary,
  aside,
  size = "display",
}: {
  eyebrow: string;
  title: string;
  /** Closing words of the title to show in gold. */
  accent?: string;
  body: string;
  primary: Cta;
  secondary?: Cta;
  aside?: React.ReactNode;
  size?: "display" | "long";
}) {
  const [lead, tail] = splitTitle(title, accent);
  return (
    <section className="on-dark relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden="true" className="dots absolute inset-0" />
      <Container className="relative grid items-center gap-x-12 gap-y-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:pb-28 lg:pt-20">
        <div className={aside ? "lg:col-span-6" : "lg:col-span-10"}>
          <Kicker tone="light" className="enter">
            {eyebrow}
          </Kicker>
          <h1
            className={cn(
              "enter mt-6 text-balance font-display font-extrabold tracking-tight [--d:1]",
              size === "display"
                ? "text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]"
                : "text-4xl leading-[1.1] sm:text-5xl lg:text-[2.75rem] xl:text-[3.4rem]",
            )}
          >
            {lead}
            {tail && <span className="text-gold-300"> {tail}</span>}
          </h1>
          <p className="enter mt-6 max-w-xl text-lg leading-relaxed text-navy-100 [--d:2]">{body}</p>
          <div className="enter mt-9 flex flex-col gap-4 [--d:3] sm:flex-row">
            <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="light">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
        {aside && <div className="enter [--d:2] lg:col-span-6">{aside}</div>}
      </Container>
      {/* Curved hand-off into the next section */}
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-px block h-8 w-full text-white sm:h-12">
        <path fill="currentColor" d="M0 60V28C240 4 480 0 720 14s480 34 720 6v40z" />
      </svg>
    </section>
  );
}
