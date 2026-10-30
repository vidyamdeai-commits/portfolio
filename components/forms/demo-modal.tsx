"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { DemoForm } from "@/components/forms/demo-form";

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== "undefined" && window.location.hash === "#demo") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    // Check initial hash on mount inside microtask/timer to avoid cascading render warning
    if (window.location.hash === "#demo") {
      const timer = setTimeout(() => setIsOpen(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#demo") {
        setIsOpen(true);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    // Global click listener to intercept any link targeting #demo or /contact#demo
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href === "#demo" || href === "/contact#demo" || href?.endsWith("#demo")) {
        e.preventDefault();
        setIsOpen(true);
        if (window.location.hash !== "#demo") {
          window.history.pushState(null, "", "#demo");
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("vidyam:open-demo", handleCustomOpen);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("vidyam:open-demo", handleCustomOpen);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-navy-900 p-4 text-white shadow-2xl ring-1 ring-white/15 sm:p-8">
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6 sm:size-11"
          aria-label="Close demo booking"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="p-2 sm:p-3 pr-10 sm:pr-12">
          <span className="label inline-block text-gold-300">Complimentary 1-hour session</span>
          <h2 id="demo-modal-title" className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            Book a <span className="text-gold-300">free demo</span>
          </h2>
          <p className="mt-2 text-sm text-navy-100/90 sm:text-base">
            Tell us about your institution, then choose your preferred track. We will confirm your slot within one working day.
          </p>
        </div>

        <div className="mt-4 sm:mt-6">
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
