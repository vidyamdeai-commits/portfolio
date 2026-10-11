import { cn } from "@/lib/utils";

/** Pill badge that sits above a heading. */
export function Kicker({
  children,
  tone = "dark",
  className,
}: {
  /** Kept for callers that number their sections; not shown in this design. */
  index?: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "label inline-flex items-center gap-2 rounded-full px-4 py-2",
        tone === "dark" ? "bg-sun-100 text-navy-900" : "bg-white/10 text-gold-300 ring-1 ring-white/20",
        className,
      )}
    >
      <span className={cn("size-2 rounded-full", tone === "dark" ? "bg-gold-500" : "bg-gold-300")} aria-hidden="true" />
      {children}
    </p>
  );
}
