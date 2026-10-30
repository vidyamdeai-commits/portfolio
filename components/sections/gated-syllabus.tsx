import { Lock } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";
import { site } from "@/lib/content";

/**
 * The full sub-module table, locked behind "Book Free Demo".
 *
 * The rows under the blur are deliberately fake: a blurred real table can still be read
 * in the page source, so the real syllabus never reaches the browser. It is sent after
 * a demo is booked. Only the column headings and the row count match the real table.
 */
export function GatedSyllabus({
  rows,
  codePrefix,
  phaseCount,
  phaseTitle,
  totalModules = 68,
  columns = ["Code", "Sub-module", "Hours", "Delivery & assessment"],
}: {
  /** How many fake rows to draw (use the real count so the table looks the right length). */
  rows: number;
  /** Shown before the masked digits, e.g. "CT", "UG", "FDE". */
  codePrefix: string;
  /** Phase specific count, e.g. 23 for K-12. */
  phaseCount?: number;
  /** Phase title, e.g. "K–12 sub-modules". */
  phaseTitle?: string;
  /** The site-wide count named on the unlock card. */
  totalModules?: number;
  columns?: string[];
}) {
  // Fixed widths, not random, so server and client render the same thing.
  const widths = ["w-3/4", "w-2/3", "w-5/6", "w-1/2", "w-3/5", "w-4/5"];
  const displayTitle =
    phaseCount && phaseTitle
      ? `Unlock the full syllabus: all ${phaseCount} ${phaseTitle}`
      : `Unlock the full syllabus: all ${totalModules} sub-modules`;

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-navy-900/10">
      <div aria-hidden="true" className="pointer-events-none select-none [filter:blur(8px)]">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-cream-100 font-display text-navy-900">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-5 py-4 font-bold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.min(rows, 12) }, (_, i) => (
              <tr key={i} className="border-t border-navy-900/10">
                <td className="px-5 py-4 font-mono font-semibold text-navy-900">
                  {codePrefix}-{(i + 1) * 101}
                </td>
                <td className="px-5 py-4">
                  <span className={`block h-3 rounded-full bg-navy-900/25 ${widths[i % widths.length]}`} />
                </td>
                <td className="px-5 py-4 font-mono">{10 + ((i * 7) % 30)} Hrs</td>
                <td className="px-5 py-4">
                  <span className={`block h-3 rounded-full bg-navy-900/15 ${widths[(i + 3) % widths.length]}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-white/40 p-4">
        <div className="on-light max-w-lg rounded-3xl bg-white p-7 text-center shadow-lift ring-1 ring-navy-900/10 sm:p-9">
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-sun-100 text-gold-800">
            <Lock className="size-7" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-balance font-display text-2xl font-extrabold leading-snug text-navy-900">
            {displayTitle}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">
            Book a free demo to receive the complete syllabus breakdown (all {totalModules} sub-modules across all 3 pathways) and download a sample activity
            workbook.
          </p>
          <ButtonLink href={site.primaryCta.href} className="mt-6 w-full sm:w-auto">
            Book a Free Demo
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
