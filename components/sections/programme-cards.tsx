import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/icon";
import type { Programme } from "@/lib/content";
import { tones, verticalTone } from "@/lib/theme";

/** Programme cards: a tinted illustrated top, then title, audience and summary. */
export function ProgrammeCards({ programmes }: { programmes: Programme[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {programmes.map((p, i) => {
        const t = tones[verticalTone[p.vertical]];
        return (
          <li key={p.slug} className={i < 3 ? "reveal lg:col-span-2" : `reveal lg:col-span-3`}>
            <Link
              href={`/programmes/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-900/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className={`relative flex h-36 items-end justify-between overflow-hidden px-6 pb-5 ${t.bg}`}>
                <span aria-hidden="true" className="dots-dark absolute inset-0 opacity-50" />
                <span aria-hidden="true" className="absolute -right-6 -top-8 size-32 rounded-full bg-white/60" />
                <span className={`relative flex size-16 items-center justify-center rounded-2xl bg-white shadow-card ${t.text} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon name={p.vertical} className="size-8" />
                </span>
                <span className={`relative font-display text-5xl font-extrabold leading-none ${t.text} opacity-40`} aria-hidden="true">
                  {p.number}
                </span>
              </span>
              <span className="flex flex-1 flex-col p-6">
                <span className="font-display text-2xl font-extrabold leading-tight text-navy-900">{p.shortTitle}</span>
                <span className="mt-1.5 text-sm font-medium text-muted">{p.audience}</span>
                <span className="mt-4 flex-1 leading-relaxed text-ink">{p.summary}</span>
                <span className="mt-6 inline-flex items-center gap-2 font-display font-bold text-navy-900">
                  Explore
                  <span className="flex size-8 items-center justify-center rounded-full bg-gold-400 text-navy-950 transition-transform duration-300 group-hover:translate-x-1.5">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
