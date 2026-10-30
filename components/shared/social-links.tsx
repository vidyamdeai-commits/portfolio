import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Brand glyphs drawn inline: lucide no longer ships third-party logos. */
const glyphs = {
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  facebook:
    "M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z",
};

const brand = {
  linkedin: { label: "LinkedIn", color: "bg-[#0A66C2]" },
  facebook: { label: "Facebook", color: "bg-[#1877F2]" },
};

/** Follow badges. Renders nothing for a network until its URL is set in content/site.ts. */
export function SocialLinks({ className, withLabel = false }: { className?: string; withLabel?: boolean }) {
  const items = (Object.keys(brand) as (keyof typeof brand)[]).filter((k) => site.social[k]);
  if (items.length === 0) return null;
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map((k) => (
        <li key={k}>
          <a
            href={site.social[k]!}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-white transition hover:brightness-110",
              brand[k].color,
            )}
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
              <path d={glyphs[k]} />
            </svg>
            {withLabel ? `Follow on ${brand[k].label}` : <span className="sr-only">Follow us on {brand[k].label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
