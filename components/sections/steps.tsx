import type { Step } from "@/lib/content";

/** Numbered journey: a dashed rail joins the steps, vertical on phones and horizontal on desktop. */
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-y-8 lg:grid-cols-5 lg:gap-x-5">
      <span
        aria-hidden="true"
        className="absolute bottom-8 left-7 top-8 border-l-2 border-dashed border-gold-500 lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:top-7 lg:border-l-0 lg:border-t-2"
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
