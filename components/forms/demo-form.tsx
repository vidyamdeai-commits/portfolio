"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { requestDemo } from "@/app/actions/demo";
import {
  phonePattern,
  programmes,
  slots,
  step1Fields,
  todayIST,
  type DemoInput,
  type DemoState,
} from "@/lib/validation/demo";
import { cn } from "@/lib/utils";

const initial: DemoState = { status: "idle" };

type Errors = Partial<Record<keyof DemoInput, string>>;

/** Same rules as the server schema for step 1, so people find mistakes before step 2. */
function checkStep1(form: HTMLFormElement): Errors {
  const get = (n: string) => String(new FormData(form).get(n) ?? "").trim();
  const errors: Errors = {};
  if (get("name").length < 2) errors.name = "Please enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) errors.email = "Please enter a valid email";
  if (!phonePattern.test(get("whatsapp"))) errors.whatsapp = "Please enter a valid WhatsApp number";
  if (get("institution").length < 2) errors.institution = "Please enter your institution or company";
  if (get("designation").length < 2) errors.designation = "Please enter your designation";
  return errors;
}

export function DemoForm({ followUs }: { followUs?: React.ReactNode }) {
  const [step, setStep] = useState<1 | 2>(1);
  // Set once "Continue" has run the step 1 check; from then on its result is what shows for step 1.
  const [localErrors, setLocalErrors] = useState<Errors | null>(null);
  const shownStep = useRef<1 | 2>(1);
  const formRef = useRef<HTMLFormElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  const [state, action, pending] = useActionState(async (prev: DemoState, fd: FormData) => {
    const result = await requestDemo(prev, fd);
    setLocalErrors(null);
    if (result.errors && step1Fields.some((f) => result.errors?.[f])) setStep(1);
    return result;
  }, initial);

  // The page is prerendered, so "today" is set in the browser, not at build time.
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayIST();
  }, [step]);

  // The thank-you card replaces a long form, so bring it into view.
  useEffect(() => {
    if (state.status !== "success" || !doneRef.current) return;
    doneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    doneRef.current.focus({ preventScroll: true });
  }, [state.status]);

  // Move focus to the new step's heading, but not on page load.
  useEffect(() => {
    if (shownStep.current === step) return;
    shownStep.current = step;
    headingRef.current?.focus();
  }, [step]);

  if (state.status === "success") {
    return (
      <div ref={doneRef} tabIndex={-1} style={{ outline: "none" }} role="status" className="on-light rounded-[2rem] bg-white px-6 py-12 text-center shadow-lift sm:px-10">
        <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-mint-100 text-mint-700">
          <CheckCircle2 className="size-10" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
          Thank you, your demo request is in
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
          Our team will contact you on WhatsApp or email within one working day to confirm your slot.
        </p>
        {followUs && <div className="mt-8 flex justify-center">{followUs}</div>}
      </div>
    );
  }

  const v = state.values ?? {};
  const err: Errors = { ...(state.errors ?? {}) };
  if (localErrors) for (const f of step1Fields) err[f] = localErrors[f];
  const val = (k: string) => (typeof v[k] === "string" ? (v[k] as string) : undefined);
  const checked = Array.isArray(v.programmes) ? v.programmes : [];

  function next() {
    if (!formRef.current) return;
    const errors = checkStep1(formRef.current);
    setLocalErrors(errors);
    if (Object.keys(errors).length === 0) setStep(2);
    else formRef.current.querySelector<HTMLInputElement>(`[name="${Object.keys(errors)[0]}"]`)?.focus();
  }

  return (
    <form
      ref={formRef}
      action={action}
      noValidate
      onKeyDown={(e) => {
        // Enter on step 1 moves on instead of submitting half a form.
        if (step === 1 && e.key === "Enter" && (e.target as HTMLElement).tagName === "INPUT") {
          e.preventDefault();
          next();
        }
      }}
      className="on-light rounded-[2rem] bg-white px-5 py-8 text-ink shadow-lift sm:px-10 sm:py-10"
    >
      <Progress step={step} />

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800 ring-1 ring-red-700/30">
          {state.message}
        </p>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Both steps stay in the form so one submit carries every field. */}
      <div hidden={step !== 1} className="mt-8">
        <h2 ref={step === 1 ? headingRef : undefined} tabIndex={-1} style={{ outline: "none" }} className="font-display text-2xl font-extrabold text-navy-900">
          About you and your institution
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field name="name" label="Your name" error={err.name} defaultValue={val("name")} autoComplete="name" />
          <Field name="designation" label="Designation" placeholder="Principal, HOD, HR lead…" error={err.designation} defaultValue={val("designation")} autoComplete="organization-title" />
          <Field name="email" type="email" label="Email" error={err.email} defaultValue={val("email")} autoComplete="email" />
          <Field name="whatsapp" type="tel" label="WhatsApp number" error={err.whatsapp} defaultValue={val("whatsapp")} autoComplete="tel" />
          <div className="sm:col-span-2">
            <Field name="institution" label="School, college or company" error={err.institution} defaultValue={val("institution")} autoComplete="organization" />
          </div>
        </div>
        <button type="button" onClick={next} className={cn(primaryButton, "mt-8")}>
          Continue
          <ArrowRight className="size-4 transition-transform duration-300 ease-editorial group-hover/btn:translate-x-1" aria-hidden="true" />
        </button>
      </div>

      <div hidden={step !== 2} className="mt-8">
        <h2 ref={step === 2 ? headingRef : undefined} tabIndex={-1} style={{ outline: "none" }} className="font-display text-2xl font-extrabold text-navy-900">
          Your demo
        </h2>

        <fieldset className="mt-6" aria-describedby={err.programmes ? "programmes-error" : undefined}>
          <legend className="text-sm font-medium text-navy-900">Which programmes interest you?</legend>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {programmes.map((p) => (
              <label key={p} className={chipClass}>
                <input type="checkbox" name="programmes" value={p} defaultChecked={checked.includes(p)} className="peer sr-only" />
                <span aria-hidden="true" className={tickClass}>
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {p}
              </label>
            ))}
          </div>
          {err.programmes && <ErrorText id="programmes-error">{err.programmes}</ErrorText>}
        </fieldset>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="preferredDate" className="text-sm font-medium text-navy-900">
              Preferred demo date
            </label>
            <input
              ref={dateRef}
              id="preferredDate"
              name="preferredDate"
              type="date"
              defaultValue={val("preferredDate")}
              aria-invalid={!!err.preferredDate}
              aria-describedby={err.preferredDate ? "preferredDate-error" : undefined}
              className={inputClass(!!err.preferredDate)}
            />
            {err.preferredDate && <ErrorText id="preferredDate-error">{err.preferredDate}</ErrorText>}
          </div>
          <div>
            <label htmlFor="preferredSlot" className="text-sm font-medium text-navy-900">
              Preferred time slot
            </label>
            <select
              id="preferredSlot"
              name="preferredSlot"
              defaultValue={val("preferredSlot") ?? ""}
              aria-invalid={!!err.preferredSlot}
              aria-describedby={err.preferredSlot ? "preferredSlot-error" : undefined}
              className={inputClass(!!err.preferredSlot)}
            >
              <option value="">Select</option>
              {slots.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {err.preferredSlot && <ErrorText id="preferredSlot-error">{err.preferredSlot}</ErrorText>}
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="text-sm font-medium text-navy-900">
            Anything we should know? (optional)
          </label>
          <textarea id="message" name="message" rows={3} defaultValue={val("message")} className={cn(inputClass(false), "h-auto py-3")} />
        </div>

        <div className="mt-7 border-t border-navy-900/15 pt-7">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
            <input
              type="checkbox"
              name="consent"
              className="mt-0.5 size-5 shrink-0 accent-navy-900"
              aria-invalid={!!err.consent}
              aria-describedby={err.consent ? "consent-error" : undefined}
            />
            <span>
              I agree that Vidyam deAi may contact me about this request and store these details as described in the{" "}
              <Link href="/privacy" className="font-medium text-navy-900 underline underline-offset-2">
                privacy policy
              </Link>
              .
            </span>
          </label>
          {err.consent && <ErrorText id="consent-error">{err.consent}</ErrorText>}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-5 font-display font-bold text-navy-900 hover:bg-cream-100"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back
            </button>
            <button type="submit" disabled={pending} className={cn(primaryButton, "disabled:cursor-progress disabled:opacity-70")}>
              {pending ? "Sending…" : "Book my free demo"}
              {pending ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <ArrowRight className="size-4 transition-transform duration-300 ease-editorial group-hover/btn:translate-x-1" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

function Progress({ step }: { step: 1 | 2 }) {
  const items = ["Your details", "Your demo"];
  return (
    <ol className="flex items-center gap-3" aria-label={`Step ${step} of 2`}>
      {items.map((label, i) => {
        const n = i + 1;
        const done = n < step;
        const current = n === step;
        return (
          <li key={label} className="flex flex-1 items-center gap-3" aria-current={current ? "step" : undefined}>
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full font-display font-extrabold",
                current || done ? "bg-gold-400 text-navy-950" : "bg-cream-100 text-muted",
              )}
            >
              {done ? <Check className="size-4" strokeWidth={3} aria-hidden="true" /> : n}
            </span>
            <span className={cn("text-sm font-semibold", current ? "text-navy-900" : "text-muted")}>{label}</span>
            {n < items.length && <span aria-hidden="true" className="h-0.5 flex-1 rounded bg-navy-900/10" />}
          </li>
        );
      })}
    </ol>
  );
}

const primaryButton =
  "group/btn inline-flex min-h-13 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-gold-400 px-8 py-3.5 font-display font-bold text-navy-950 shadow-[0_6px_0_0_var(--color-gold-700)] transition duration-200 hover:bg-gold-300 active:translate-y-1 active:shadow-[0_2px_0_0_var(--color-gold-700)] sm:w-auto";

const chipClass =
  "group flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border-2 border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900/40 has-checked:border-navy-900 has-checked:bg-navy-900 has-checked:text-white has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-navy-900";

const tickClass =
  "flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-navy-900/40 text-transparent peer-checked:border-gold-400 peer-checked:bg-gold-400 peer-checked:text-navy-950";

function inputClass(invalid: boolean) {
  return cn(
    "mt-1.5 block h-12 w-full rounded-xl border-2 bg-cream-50 px-4 text-base text-ink transition-colors placeholder:text-muted/80 focus:border-navy-900 focus:bg-white focus:outline-3 focus:outline-offset-0 focus:outline-sky-100",
    invalid ? "border-red-700" : "border-navy-900/20",
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-red-700">
      {children}
    </p>
  );
}

function Field({
  name,
  label,
  error,
  ...props
}: { name: string; label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-navy-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={inputClass(!!error)}
        {...props}
      />
      {error && <ErrorText id={errorId}>{error}</ErrorText>}
    </div>
  );
}
