import Image from "next/image";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import type { Cta } from "@/lib/content";

/** Gold call-to-action band. Pass `image` (a decorative stock photo) to show it on the right. */
export function CtaBand({ title, body, cta, image }: { title: string; body: string; cta: Cta; image?: string }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gold-400 text-navy-950">
          <span aria-hidden="true" className="absolute -bottom-24 left-1/3 size-56 rounded-full bg-gold-500/60" />
          <span aria-hidden="true" className="dots-dark absolute inset-y-0 left-0 w-1/3 opacity-60" />
          {!image && <span aria-hidden="true" className="absolute -right-16 -top-20 size-72 rounded-full bg-gold-300" />}
          <div className="relative grid lg:grid-cols-12 lg:items-stretch">
            <div className={image ? "px-6 py-12 sm:px-12 sm:py-16 lg:col-span-7" : "px-6 py-12 sm:px-12 sm:py-16 lg:col-span-12"}>
              <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy-950/85">{body}</p>
              <ButtonLink href={cta.href} variant="navy" className="mt-8 w-full sm:w-auto">
                {cta.label}
              </ButtonLink>
            </div>
            {image && (
              <div className="relative min-h-56 lg:col-span-5 lg:min-h-0">
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
