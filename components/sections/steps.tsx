import type { Step } from "@/lib/content";

/**
 * Numbered journey: a dashed rail joins the steps, vertical on phones and horizontal on desktop.
 *
 * The column count and the rail follow the number of steps. The rail has to stop at the
 * centre of the first and last markers, which sit half a column in from each edge, so the
 * inset is `50 / count` per cent. With five steps that is the original 10%.
 */
export function Steps({ steps }: { steps: Step[] }) {
  const count = steps.length;
  const inset = `${50 / count}%`;
  return (
    <ol
      className="relative grid gap-y-8 lg:grid-cols-[repeat(var(--steps),minmax(0,1fr))] lg:gap-x-5"
      style={{ "--steps": count } as React.CSSProperties}
    >
      <span
        aria-hidden="true"
        className="absolute bottom-8 left-7 top-8 border-l-2 border-dashed border-gold-500 lg:bottom-auto lg:left-[var(--inset)] lg:right-[var(--inset)] lg:top-7 lg:border-l-0 lg:border-t-2"
        style={{ "--inset": inset } as React.CSSProperties}
      />
      {steps.map((s, i) => (
        <li key={s.title} className="reveal relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold-400 font-display text-xl font-extrabold text-navy-950 shadow-[0_5px_0_0_var(--color-gold-700)] ring-8 ring-white">
            {i + 1}
          </span>
          <div className="lg:mt-6">
            <h3 className="font-display text-xl font-bold leading-snug text-navy-900">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
