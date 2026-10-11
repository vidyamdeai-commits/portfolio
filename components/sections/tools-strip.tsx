import { toneAt } from "@/lib/theme";

/** Tool names with a lettered badge, never a logo: we show no third-party marks. */
export function ToolsStrip({ label, tools }: { label: string; tools: { name: string; body: string }[] }) {
  return (
    <div>
      <p className="label text-center text-navy-900/70">{label}</p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((t, i) => (
          <li key={t.name} className="reveal flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card ring-1 ring-navy-900/5">
            <span
              aria-hidden="true"
              className={`flex size-12 shrink-0 items-center justify-center rounded-xl font-display text-xl font-extrabold ${toneAt(i).chip}`}
            >
              {t.name[0]}
            </span>
            <span>
              <span className="block font-display text-lg font-bold leading-tight text-navy-900">{t.name}</span>
              <span className="mt-0.5 block text-sm leading-snug text-muted">{t.body}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
