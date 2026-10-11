import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { site } from "@/lib/content";

/** Temporary page body for routes scheduled for the next development round. */
export function ComingSoon({ title, body }: { title: string; body: string }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-sky-100 px-6 py-14 text-center sm:px-12 sm:py-20">
          <span aria-hidden="true" className="absolute -right-10 -top-12 size-44 rounded-full bg-gold-400" />
          <span aria-hidden="true" className="dots-dark absolute inset-y-0 left-0 w-1/3 opacity-50" />
          <div className="relative">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">{title}</h1>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink/80">{body}</p>
            <ButtonLink href={site.primaryCta.href} className="mt-9">
              {site.primaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
