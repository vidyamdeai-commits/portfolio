import { Icon } from "@/components/shared/icon";
import type { Feature } from "@/lib/content";
import { toneAt } from "@/lib/theme";

/** Icon-led colour tiles. On navy sections the tiles are white cards with tinted icon chips. */
export function FeatureGrid({ items, tone = "light" }: { items: Feature[]; tone?: "light" | "dark" }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((f, i) => {
        const t = toneAt(tone === "dark" ? i + 1 : i);
        return (
          <li
            key={f.title}
            className={`reveal rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 ${
              tone === "dark" ? "bg-white shadow-lift" : `${t.bg} hover:shadow-card`
            }`}
          >
            <span className={`flex size-14 items-center justify-center rounded-2xl ${tone === "dark" ? `${t.bg} ${t.text}` : `bg-white ${t.text} shadow-card`}`}>
              <Icon name={f.icon} className="size-7" />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold leading-snug text-navy-900">{f.title}</h3>
            <p className="mt-2.5 leading-relaxed text-ink/80">{f.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
