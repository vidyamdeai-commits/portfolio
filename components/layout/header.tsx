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
  "inline-flex min-h-10 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 font-display text-[0.84rem] font-semibold text-navy-900 transition-colors hover:bg-sky-100 xl:px-2.5 2xl:px-3.5 2xl:text-[0.92rem]";

const childIcons = ["school", "college", "industry", "everyday", "wellness"];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_0_rgb(15_23_42/0.08),0_8px_24px_-16px_rgb(15_23_42/0.25)]">
      <div className="on-dark bg-navy-950 text-white">
        <Container className="max-w-[90rem]">
          <Link
            href={site.primaryCta.href}
            className="group flex min-h-10 items-center justify-center gap-2 py-1.5 text-center text-xs font-medium sm:min-h-11 sm:text-sm"
          >
            <Gift className="size-4 shrink-0 text-gold-300" aria-hidden="true" />
            <span>{home.offer}</span>
            <span className="hidden items-center gap-1 font-bold text-gold-300 underline-offset-4 group-hover:underline sm:inline-flex">
              Book now <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </Link>
        </Container>
      </div>

      <Container className="flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-11 shrink-0 items-center gap-2.5 sm:gap-3" aria-label={`${site.name} home`}>
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={44}
            height={44}
            priority
            className="size-11 shrink-0 rounded-xl object-contain ring-1 ring-navy-900/10"
          />
          <span className="flex shrink-0 flex-col justify-center whitespace-nowrap">
            <span className="font-serif text-[1.35rem] font-bold leading-none tracking-tight text-navy-900 whitespace-nowrap sm:text-2xl">
              Vidyam de<span className="text-gold-700">Ai</span>
            </span>
            <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted whitespace-nowrap 2xl:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex 2xl:gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={linkClass}>
                  {item.label}
                  <ChevronDown
                    className="size-3.5 transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
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
                            <Icon name={childIcons[i] ?? "route"} className="size-5" />
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

        <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex xl:ml-0">
          <SocialLinks className="hidden 2xl:flex" />
          <ButtonLink href={site.primaryCta.href} className="min-h-10 whitespace-nowrap px-4 py-2 text-sm shadow-[0_4px_0_0_var(--color-gold-700)] sm:min-h-11 sm:px-5">
            {site.primaryCta.label}
          </ButtonLink>
        </div>

        <MobileMenu nav={nav} cta={site.primaryCta} />
      </Container>
    </header>
  );
}
