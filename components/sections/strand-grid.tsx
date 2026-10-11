import type { ClassBand, Strand } from "@/lib/content";

const bands: { key: ClassBand; label: string }[] = [
  { key: "6-7", label: "Class 6–7" },
  { key: "8-9", label: "Class 8–9" },
  { key: "10-12", label: "Class 10–12" },
];

/** Year-by-year curriculum. Table on desktop, stacked cards on mobile. */
export function StrandGrid({ strands }: { strands: Strand[] }) {
  return (
    <div className="mt-10">
      <div className="hidden overflow-hidden rounded-3xl border border-navy-900/10 bg-white lg:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">What students learn in each strand, by class</caption>
          <thead className="bg-navy-900 text-cream-50">
            <tr>
              <th scope="col" className="w-1/4 px-5 py-4 font-semibold">Strand</th>
              {bands.map((b) => (
                <th key={b.key} scope="col" className="px-5 py-4 font-semibold">
                  {b.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {strands.map((s) => (
              <tr key={s.id} className="border-t border-navy-900/10 align-top">
                <th scope="row" className="px-5 py-5">
                  <span className="block font-display text-lg text-navy-900">{s.title}</span>
                  <span className="mt-1 block text-xs font-normal text-muted">{s.summary}</span>
                </th>
                {bands.map((b) => (
                  <td key={b.key} className="px-5 py-5 leading-relaxed text-ink">
                    {s.bands[b.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 lg:hidden">
        {strands.map((s) => (
          <article key={s.id} className="rounded-3xl border border-navy-900/10 bg-white p-5">
            <h3 className="font-display text-xl text-navy-900">{s.title}</h3>
            <p className="mt-1 text-sm text-muted">{s.summary}</p>
            <dl className="mt-4 space-y-3 text-sm">
              {bands.map((b) => (
                <div key={b.key}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gold-700">{b.label}</dt>
                  <dd className="mt-0.5 leading-relaxed">{s.bands[b.key]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
