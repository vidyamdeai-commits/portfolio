"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/shared/icon";
import type { ClassBand, Strand } from "@/lib/content";
import { toneAt } from "@/lib/theme";
import { cn } from "@/lib/utils";

const bands: { key: ClassBand; label: string }[] = [
  { key: "6-7", label: "Class 6–7" },
  { key: "8-9", label: "Class 8–9" },
  { key: "10-12", label: "Class 10–12" },
];

/** Pick a class group, see what each strand covers that year. Tabs follow the WAI-ARIA pattern. */
export function CurriculumExplorer({ strands }: { strands: Strand[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = bands.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (active + 1) % bands.length
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (active + last) % bands.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Choose a class group"
        onKeyDown={onKeyDown}
        className="mx-auto grid max-w-2xl grid-cols-3 gap-1.5 rounded-full bg-white p-1.5 shadow-card ring-1 ring-navy-900/10"
      >
        {bands.map((b, i) => (
          <button
            key={b.key}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`band-tab-${b.key}`}
            aria-selected={i === active}
            aria-controls={`band-panel-${b.key}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "min-h-12 cursor-pointer whitespace-nowrap rounded-full px-2 font-display text-sm font-bold transition-colors duration-200 sm:text-lg",
              i === active ? "bg-navy-900 text-white shadow-card" : "text-navy-900 hover:bg-sky-100",
            )}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Progress rail: fills as the class group goes up */}
      <div aria-hidden="true" className="mx-auto mt-5 h-2 max-w-2xl overflow-hidden rounded-full bg-navy-900/10">
        <div
          className="h-full origin-left rounded-full bg-gold-500 transition-transform duration-500 ease-editorial"
          style={{ transform: `scaleX(${(active + 1) / bands.length})` }}
        />
      </div>

      {bands.map((b, i) => (
        <div
          key={b.key}
          role="tabpanel"
          id={`band-panel-${b.key}`}
          aria-labelledby={`band-tab-${b.key}`}
          hidden={i !== active}
          tabIndex={0}
          className="swap mt-8 rounded-3xl"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {strands.map((s, n) => {
              const t = toneAt(n);
              return (
                <li
                  key={s.id}
                  className={cn(
                    "flex flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-900/5 lg:col-span-2",
                    n === 3 && "lg:col-start-2",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${t.bg} ${t.text}`}>
                      <Icon name={s.id} className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-tight text-navy-900">{s.title}</h3>
                      <p className="text-sm text-muted">{s.summary}</p>
                    </div>
                  </div>
                  <p className={`mt-5 flex-1 rounded-2xl ${t.bg} px-4 py-3.5 font-medium leading-relaxed text-navy-900`}>
                    {s.bands[b.key]}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
