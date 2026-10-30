import { Clock, Layers } from "lucide-react";
import { stageHours, type Stage } from "@/content/curriculum";
import { ShareBar } from "@/components/shared/share-bar";
import { toneAt } from "@/lib/theme";

/** Public, stage-level summary per stage title. The sub-module list itself stays gated. */
export type Teaser = Record<string, { themes: string[]; sample: string }>;

/** One tinted card per stage or year: hours, count, themes, a sample project and assessment types. */
export function StageCards({
  stages,
  teaser,
  stageLabel,
  countLabel = "sub-modules",
  share,
}: {
  stages: Stage[];
  teaser: Teaser;
  /** Prefix for the numbered label, e.g. "Stage". Omit when the title already numbers it (Year 1). */
  stageLabel?: string;
  countLabel?: string;
  /** Adds a deep-link anchor (#<anchor>-<n>) and share buttons to every card. */
  share?: { path: string; anchor: string; text: (stage: Stage) => string };
}) {
  return (
          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {stages.map((s, i) => {
              const t = toneAt(i);
              const methods = [...new Set(s.modules.map((m) => m.assessment))];
              const tz = teaser[s.title];
              return (
                <li
                  key={s.title}
                  id={share ? `${share.anchor}-${i + 1}` : undefined}
                  className={`reveal flex scroll-mt-28 flex-col rounded-3xl ${t.bg} p-7 sm:p-8 md:odd:last:col-span-2 md:odd:last:w-[calc(50%-0.625rem)] md:odd:last:justify-self-center`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className={`label ${t.text}`}>
                        {stageLabel ? `${stageLabel} ${i + 1} · ${s.sub}` : s.sub}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold text-navy-900">{s.title}</h3>
                      <p className="mt-1 font-medium text-ink/80">{s.framework}</p>
                    </div>
                    <div className="flex gap-2 font-mono text-sm font-semibold text-navy-900">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5">
                        <Clock className="size-4" aria-hidden="true" />
                        {stageHours(s)} Hrs
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5">
                        <Layers className="size-4" aria-hidden="true" />
                        {s.modules.length}
                        <span className="sr-only"> {countLabel}</span>
                      </span>
                    </div>
                  </div>
                  {tz && (
                    <>
                      <h4 className="mt-6 font-display font-bold text-navy-900">What students learn</h4>
                      <ul className="mt-2 grid gap-1.5 text-ink sm:grid-cols-2">
                        {tz.themes.map((th) => (
                          <li key={th} className="flex gap-2">
                            <span className={`mt-2 size-1.5 shrink-0 rounded-full ${t.bar}`} aria-hidden="true" />
                            {th}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 rounded-2xl bg-white/70 p-4 text-ink">
                        <span className="font-display font-bold text-navy-900">Sample project: </span>
                        {tz.sample}
                      </p>
                    </>
                  )}
                  <div className="mt-5">
                    <p className="label text-muted">Delivery and assessment</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {methods.map((m) => (
                        <li key={m} className="rounded-full bg-white px-3 py-1 text-sm text-ink">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {share && (
                    <ShareBar
                      path={`${share.path}#${share.anchor}-${i + 1}`}
                      text={share.text(s)}
                      label={`Share ${s.title}`}
                      className="mt-6 border-t border-navy-900/10 pt-5"
                    />
                  )}
                </li>
              );
            })}
          </ol>
  );
}
