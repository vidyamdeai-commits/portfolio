import { Kicker } from "@/components/shared/kicker";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Kicker tone={tone}>{eyebrow}</Kicker>}
      <h2
        className={cn(
          "mt-5 text-balance font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-navy-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {body && (
        <p className={cn("mt-4 text-lg leading-relaxed", tone === "dark" ? "text-muted" : "text-navy-100")}>{body}</p>
      )}
    </div>
  );
}
