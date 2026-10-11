"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import type { Cta, NavItem } from "@/lib/content";

export function MobileMenu({ nav, cta }: { nav: NavItem[]; cta: Cta }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="-mr-1 flex size-12 cursor-pointer items-center justify-center rounded-full bg-sky-100 text-navy-900"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="swap absolute inset-x-0 top-full h-[calc(100dvh-7rem)] overflow-y-auto bg-white"
        >
          <nav aria-label="Mobile" className="px-5 pb-10 pt-4 sm:px-8">
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href} className="rounded-3xl bg-cream-100 px-5">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex min-h-14 items-center justify-between font-display text-xl font-bold text-navy-900"
                  >
                    {item.label}
                    <ChevronRight className="size-5 text-gold-700" aria-hidden="true" />
                  </Link>
                  {item.children && (
                    <ul className="border-t border-navy-900/10 py-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={close} className="flex min-h-11 items-center text-ink">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href={cta.href}
              onClick={close}
              className="mt-6 flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-gold-400 px-6 py-3 font-display font-bold text-navy-950 shadow-[0_6px_0_0_var(--color-gold-700)]"
            >
              {cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
