import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Gift } from "lucide-react";
import { home, nav, site } from "@/lib/content";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { SocialLinks } from "@/components/shared/social-links";
import { toneAt } from "@/lib/theme";

const linkClass =
  "inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 font-display text-[0.9rem] font-semibold text-navy-900 transition-colors hover:bg-sky-100 2xl:px-3.5 2xl:text-[0.95rem]";

const childIcons = ["school", "college", "industry", "everyday", "wellness"];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_0_rgb(15_23_42/0.08),0_8px_24px_-16px_rgb(15_23_42/0.25)]">
      <div className="on-dark bg-navy-950 text-white">
        <Container>
          <Link
            href={site.primaryCta.href}
            className="group flex min-h-11 items-center justify-center gap-2 py-1.5 text-center text-sm font-medium"
          >
            <Gift className="size-4 shrink-0 text-gold-300" aria-hidden="true" />
            <span>{home.offer}</span>
            <span className="hidden items-center gap-1 font-bold text-gold-300 underline-offset-4 group-hover:underline sm:inline-flex">
              Book now <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </Link>
        </Container>
      </div>

      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/brand/logo-mark.png" alt="" width={47} height={48} priority className="h-12 w-[47px] rounded-xl ring-1 ring-navy-900/10" />
          <span className="flex flex-col">
            <span className="font-serif text-2xl font-bold leading-none tracking-tight text-navy-900">
              Vidyam de<span className="text-gold-700">Ai</span>
            </span>
            <span className="mt-1 hidden text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted sm:block">{site.tagline}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex 2xl:gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={linkClass}>
                  {item.label}
                  <ChevronDown
                    className="size-4 transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                <div className="invisible absolute -left-4 top-full w-80 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-3xl bg-white p-2.5 shadow-lift ring-1 ring-navy-900/10">
                    {item.children.map((child, i) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex min-h-12 items-center gap-3 rounded-2xl px-3 py-2 font-medium text-ink transition-colors hover:bg-cream-100"
                        >
                          <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${toneAt(i).bg} ${toneAt(i).text}`}>
                            <Icon name={childIcons[i]} className="size-5" />
                          </span>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex xl:ml-0">
          <SocialLinks className="hidden 2xl:flex" />
          <ButtonLink href={site.primaryCta.href} className="min-h-11 whitespace-nowrap px-5 py-2 shadow-[0_4px_0_0_var(--color-gold-700)]">
            {site.primaryCta.label}
          </ButtonLink>
        </div>

        <MobileMenu nav={nav} cta={site.primaryCta} />
      </Container>
    </header>
  );
}
