"use client";

import { useActionState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { requestWorkshop } from "@/app/actions/workshop";
import { classBands, type FormState } from "@/lib/validation/workshop";
import { cn } from "@/lib/utils";

const initial: FormState = { status: "idle" };

export function WorkshopForm() {
  const [state, action, pending] = useActionState(requestWorkshop, initial);

  if (state.status === "success") {
    return (
      <div role="status" className="on-light rounded-[2rem] bg-white px-6 py-12 text-center shadow-lift sm:px-10">
        <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-mint-100 text-mint-700"><CheckCircle2 className="size-10" aria-hidden="true" /></span>
        <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
          Thank you, we&apos;ve got your request
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
          Our team will call you within one working day to fix a date for your free AI workshop.
        </p>
      </div>
    );
  }

  const v = state.values ?? {};
  const err = state.errors ?? {};
  const val = (k: string) => (typeof v[k] === "string" ? (v[k] as string) : undefined);
  const checkedClasses = Array.isArray(v.classes) ? v.classes : [];

  return (
    <form action={action} noValidate className="on-light rounded-[2rem] bg-white px-5 py-8 text-ink shadow-lift sm:px-10 sm:py-10">
      {state.status === "error" && state.message && (
        <p role="alert" className="mb-8 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800 ring-1 ring-red-700/30">
          {state.message}
        </p>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Group step="1" title="Your school">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="schoolName" label="School name" error={err.schoolName} defaultValue={val("schoolName")} autoComplete="organization" />
          <Field name="city" label="City" error={err.city} defaultValue={val("city")} autoComplete="address-level2" />
        </div>
      </Group>

      <Group step="2" title="About you">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="contactName" label="Your name" error={err.contactName} defaultValue={val("contactName")} autoComplete="name" />
          <Field name="role" label="Your role" placeholder="Principal, coordinator…" error={err.role} defaultValue={val("role")} />
          <Field name="email" type="email" label="Email" error={err.email} defaultValue={val("email")} autoComplete="email" />
          <Field name="phone" type="tel" label="Phone / WhatsApp" error={err.phone} defaultValue={val("phone")} autoComplete="tel" />
        </div>
      </Group>

      <Group step="3" title="The workshop">
        <fieldset aria-describedby={err.classes ? "classes-error" : undefined}>
          <legend className="text-sm font-medium text-navy-900">Which classes or groups are you interested in?</legend>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
            {classBands.map((c) => (
              <label
                key={c}
                className="group flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border-2 border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900/40 has-checked:border-navy-900 has-checked:bg-navy-900 has-checked:text-white has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-navy-900"
              >
                <input type="checkbox" name="classes" value={c} defaultChecked={checkedClasses.includes(c)} className="peer sr-only" />
                <span
                  aria-hidden="true"
                  className="flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-navy-900/40 text-transparent peer-checked:border-gold-400 peer-checked:bg-gold-400 peer-checked:text-navy-950"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {c}
              </label>
            ))}
          </div>
          {err.classes && <ErrorText id="classes-error">{err.classes}</ErrorText>}
        </fieldset>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field name="students" label="Approx. number of students (optional)" inputMode="numeric" defaultValue={val("students")} />
          <div>
            <label htmlFor="hasLab" className="text-sm font-medium text-navy-900">
              Do you have a computer lab?
            </label>
            <select id="hasLab" name="hasLab" defaultValue={val("hasLab") ?? ""} className={inputClass(false)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <Field name="preferredTime" label="Best time to call you (optional)" defaultValue={val("preferredTime")} />
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="text-sm font-medium text-navy-900">
            Anything we should know? (optional)
          </label>
          <textarea id="message" name="message" rows={3} defaultValue={val("message")} className={cn(inputClass(false), "h-auto py-3")} />
        </div>
      </Group>

      <div className="border-t border-navy-900/15 pt-7">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
          <input type="checkbox" name="consent" className="mt-0.5 size-5 shrink-0 accent-navy-900" aria-invalid={!!err.consent} aria-describedby={err.consent ? "consent-error" : undefined} />
          <span>
            I agree that Vidyam deAi may contact me about this request and store these details as described in the{" "}
            <Link href="/privacy" className="font-medium text-navy-900 underline underline-offset-2">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {err.consent && <ErrorText id="consent-error">{err.consent}</ErrorText>}

        <button
          type="submit"
          disabled={pending}
          className="group/btn mt-7 inline-flex min-h-13 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-gold-400 px-8 py-3.5 font-display font-bold text-navy-950 shadow-[0_6px_0_0_var(--color-gold-700)] transition duration-200 hover:bg-gold-300 active:translate-y-1 active:shadow-[0_2px_0_0_var(--color-gold-700)] disabled:cursor-progress disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Sending…" : "Request my free workshop"}
          {pending ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="size-4 transition-transform duration-300 ease-editorial group-hover/btn:translate-x-1" aria-hidden="true" />
          )}
        </button>
      </div>
    </form>
  );
}

function Group({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-9">
      <h2 className="mb-5 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-gold-400 font-display font-extrabold text-navy-950" aria-hidden="true">
          {step}
        </span>
        <span className="font-display text-xl font-extrabold text-navy-900">{title}</span>
      </h2>
      {children}
    </div>
  );
}

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
