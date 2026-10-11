import { Plus } from "lucide-react";
import type { Faq } from "@/lib/content";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-3xl bg-white px-6 shadow-card ring-1 ring-navy-900/5 open:ring-2 open:ring-gold-500">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 font-display text-lg font-bold leading-snug text-navy-900 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sun-100 text-navy-900 transition duration-300 group-open:rotate-45 group-open:bg-gold-400">
              <Plus className="size-5" aria-hidden="true" />
            </span>
          </summary>
          <p className="pb-6 pr-10 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
