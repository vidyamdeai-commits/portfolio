import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light" | "navy";

const styles: Record<Variant, string> = {
  primary: "bg-gold-400 text-navy-950 shadow-[0_6px_0_0_var(--color-gold-700)] hover:bg-gold-300 active:translate-y-1 active:shadow-[0_2px_0_0_var(--color-gold-700)]",
  navy: "bg-navy-900 text-white shadow-[0_6px_0_0_var(--color-navy-950)] hover:bg-navy-800 active:translate-y-1 active:shadow-[0_2px_0_0_var(--color-navy-950)]",
  secondary: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "px-0 text-navy-900 underline underline-offset-4 hover:decoration-gold-500",
  light: "border-2 border-white/70 text-white hover:bg-white hover:text-navy-950",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 font-display text-[0.95rem] font-bold transition duration-200",
        styles[variant],
        className,
      )}
    >
      {children}
      {variant !== "ghost" && (
        <ArrowRight
          className="size-4 shrink-0 transition-transform duration-300 ease-editorial group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
