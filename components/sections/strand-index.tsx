import type { Strand } from "@/lib/content";

/** Contents-page style list of the curriculum strands, used beside the home hero. */
export function StrandIndex({
  title,
  tagline,
  strands,
  footnote,
}: {
  title: string;
  tagline: string;
  strands: Strand[];
  footnote?: string[];
}) {
  return (
    <aside aria-label={title} className="on-dark bg-navy-950 px-6 py-7 text-cream-50 sm:px-8 sm:py-9">
      <p className="label text-gold-400">{tagline}</p>
      <h2 className="mt-6 font-display text-2xl italic">{title}</h2>
      <ol className="mt-4">
        {strands.map((s, i) => (
          <li key={s.id} className="grid grid-cols-[2.25rem_1fr] gap-x-2 border-t border-white/15 py-3.5">
            <span className="font-display text-gold-400" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block font-medium">{s.title}</span>
              <span className="mt-0.5 block text-sm text-navy-100">{s.summary}</span>
            </span>
          </li>
        ))}
      </ol>
      {footnote && (
        <p className="label flex flex-wrap gap-x-2 gap-y-1 border-t border-white/15 pt-5 text-gold-400">
          {footnote.map((step, i) => (
            <span key={step} className="flex gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {step}
            </span>
          ))}
        </p>
      )}
    </aside>
  );
}
