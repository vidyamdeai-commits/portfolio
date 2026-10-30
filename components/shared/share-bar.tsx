import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const glyphs = {
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z",
  facebook:
    "M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z",
  whatsapp:
    "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.45 6.6 2.01 12.06 2.01c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89Zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z",
  x: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z",
};

/** Share links that need no account or script: each opens the network's own share page. */
function shareLinks(path: string, text: string) {
  const url = encodeURIComponent(`${site.url}${path}`);
  const t = encodeURIComponent(text);
  return [
    { id: "linkedin", label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, color: "bg-[#0A66C2]" },
    { id: "facebook", label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}`, color: "bg-[#1877F2]" },
    { id: "whatsapp", label: "WhatsApp", href: `https://wa.me/?text=${t}%20${url}`, color: "bg-[#1DA851]" },
    { id: "x", label: "X", href: `https://twitter.com/intent/tweet?url=${url}&text=${t}`, color: "bg-black" },
  ] as const;
}

/**
 * Social share buttons. `inline` sits in the flow of a section; `floating` is a vertical
 * rail on the left edge from 1440px up, where the page margin can hold it (pair it with an inline bar for smaller screens).
 */
export function ShareBar({
  path,
  text,
  label = "Share",
  variant = "inline",
  className,
}: {
  path: string;
  text: string;
  label?: string;
  variant?: "inline" | "floating";
  className?: string;
}) {
  const links = shareLinks(path, text);
  return (
    <div
      className={cn(
        variant === "floating"
          ? "fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full bg-white p-2 shadow-lift ring-1 ring-navy-900/10 min-[1440px]:flex"
          : "flex flex-wrap items-center gap-2",
        className,
      )}
    >
      <span className={cn("label text-muted", variant === "floating" && "sr-only")}>{label}</span>
      {links.map((l) => (
        <a
          key={l.id}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full text-white transition hover:brightness-110",
            l.color,
          )}
        >
          <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
            <path d={glyphs[l.id]} />
          </svg>
          <span className="sr-only">
            {label} on {l.label} (opens in a new tab)
          </span>
        </a>
      ))}
    </div>
  );
}
