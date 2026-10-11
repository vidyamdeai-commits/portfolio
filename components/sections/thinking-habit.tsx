import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/icon";
import { toneAt } from "@/lib/theme";

/** The "Stop › Question › Check › Decide" habit as four colour blocks joined by arrows. */
export function ThinkingHabit({ intro, steps }: { intro: string; steps: string[] }) {
  return (
    <figure className="on-dark relative overflow-hidden rounded-[2rem] bg-navy-900 px-5 py-10 text-white sm:px-10 sm:py-14">
      <div aria-hidden="true" className="dots absolute inset-0" />
      <figcaption className="relative mx-auto max-w-2xl text-center font-display text-2xl font-extrabold leading-snug sm:text-3xl">
        {intro}
      </figcaption>
      <ol className="relative mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, i) => {
          const t = toneAt(i);
          return (
            <li key={step} className={`reveal relative rounded-3xl ${t.bg} px-4 py-7 text-center text-navy-900 sm:py-9`}>
              <span className={`mx-auto flex size-16 items-center justify-center rounded-full bg-white ${t.text} shadow-card`}>
                <Icon name={step.toLowerCase()} className="size-8" />
              </span>
              <span className="label mt-5 block text-navy-900/70">Step {i + 1}</span>
              <span className="mt-1 block font-display text-2xl font-extrabold sm:text-3xl">{step}</span>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-gold-400 text-navy-950 shadow-card lg:flex"
                >
                  <ChevronRight className="size-5" strokeWidth={3} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
