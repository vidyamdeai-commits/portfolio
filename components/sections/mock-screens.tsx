import { Bot, Check, FileSpreadsheet, GitBranch, Mail, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Illustrated screens of the kind of project students build. They are drawings, not
 * screenshots of real student work, so each one is hidden from assistive tech and
 * described by the caption beside it.
 */
function Window({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className={cn("overflow-hidden rounded-2xl bg-white text-ink shadow-lift ring-1 ring-navy-900/10", className)}>
      <div className="flex items-center gap-1.5 border-b border-navy-900/10 bg-cream-100 px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-coral-700/70" />
        <span className="size-2.5 rounded-full bg-gold-500" />
        <span className="size-2.5 rounded-full bg-mint-700/70" />
        <span className="ml-2 truncate text-xs font-semibold text-muted">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function ChatMock({ className }: { className?: string }) {
  return (
    <Window title="School helper bot" className={className}>
      <div className="space-y-2.5 p-4 text-sm">
        <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-navy-900 px-3.5 py-2 text-white">
          When does the library close?
        </p>
        <div className="flex items-end gap-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950">
            <Bot className="size-4.5" />
          </span>
          <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-sky-100 px-3.5 py-2">
            It is open till 4 pm on school days. Want the reading list too?
          </p>
        </div>
        <p className="ml-auto w-fit rounded-2xl rounded-br-md bg-navy-900 px-3.5 py-2 text-white">Yes please</p>
        <div className="flex items-center gap-2 rounded-full bg-cream-100 px-4 py-2.5 text-xs text-muted">
          Ask about your school…
          <span className="ml-auto size-2 rounded-full bg-mint-700" />
        </div>
      </div>
    </Window>
  );
}

const fruits = [
  { name: "Mango", swatch: "bg-gold-400", width: "w-[88%]" },
  { name: "Apple", swatch: "bg-coral-700", width: "w-[22%]" },
  { name: "Banana", swatch: "bg-gold-300", width: "w-[10%]" },
];

export function ClassifierMock({ className }: { className?: string }) {
  return (
    <Window title="Fruit sorter" className={className}>
      <div className="p-4">
        <div className="flex h-24 items-center justify-center rounded-xl bg-sun-100">
          <span className="h-14 w-11 rotate-12 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gold-400 shadow-inner" />
        </div>
        <ul className="mt-3 space-y-2 text-xs font-semibold">
          {fruits.map((f, i) => (
            <li key={f.name} className="flex items-center gap-2">
              <span className="w-14">{f.name}</span>
              <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-cream-200">
                <span className={cn("block h-full rounded-full", f.swatch, f.width)} />
              </span>
              {i === 0 ? <Check className="size-4 text-mint-700" strokeWidth={3} /> : <span className="size-4" />}
            </li>
          ))}
        </ul>
      </div>
    </Window>
  );
}

const bars = ["h-[30%]", "h-[45%]", "h-[52%]", "h-[68%]", "h-[80%]", "h-[92%]"];

export function ChartMock({ className }: { className?: string }) {
  return (
    <Window title="Study time predictor" className={className}>
      <div className="p-4">
        <div className="flex gap-2 text-xs font-semibold">
          <span className="rounded-full bg-lilac-100 px-3 py-1.5 text-lilac-700">Hours studied</span>
          <span className="rounded-full bg-cream-100 px-3 py-1.5 text-muted">Sleep</span>
        </div>
        <div className="mt-3 flex h-28 items-end gap-2 rounded-xl bg-cream-100 px-3 pb-3 pt-4">
          {bars.map((h, i) => (
            <span key={h} className={cn("flex-1 rounded-t-md", h, i === bars.length - 1 ? "bg-lilac-700" : "bg-lilac-700/35")} />
          ))}
        </div>
        <div className="mt-3 rounded-full bg-navy-900 px-4 py-2 text-center text-xs font-bold text-white">Predict</div>
      </div>
    </Window>
  );
}

const files = ["app.py", "agent/tools.py", "data/notes.sql", "README.md"];

export function PortfolioMock({ className }: { className?: string }) {
  return (
    <Window title="my-ai-app" className={className}>
      <div className="p-4 text-xs">
        <div className="flex items-center gap-2 font-semibold">
          <GitBranch className="size-4 text-mint-700" />
          main
          <span className="ml-auto flex items-center gap-1 rounded-full bg-sun-100 px-2.5 py-1 text-gold-800">
            <Star className="size-3.5" /> Star
          </span>
        </div>
        <ul className="mt-3 divide-y divide-navy-900/10 rounded-xl border border-navy-900/10 font-mono">
          {files.map((f) => (
            <li key={f} className="px-3 py-2">
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-mint-100 px-3 py-2 font-semibold text-mint-700">
          <Check className="size-4" strokeWidth={3} /> Deployed
        </div>
      </div>
    </Window>
  );
}

export function CodeMock({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("rounded-2xl bg-navy-950 p-4 font-mono text-xs leading-relaxed text-navy-100 shadow-lift ring-1 ring-white/15", className)}>
      <p>
        <span className="text-gold-300">def</span> <span className="text-white">answer</span>(question):
      </p>
      <p className="pl-4">
        notes = <span className="text-white">search</span>(question)
      </p>
      <p className="pl-4">
        <span className="text-gold-300">return</span> <span className="text-white">ask_ai</span>(notes)
      </p>
    </div>
  );
}

const workflow = [
  { icon: Mail, label: "New enquiry email", tone: "bg-sky-100 text-sky-700" },
  { icon: Zap, label: "AI reads and tags it", tone: "bg-sun-100 text-gold-800" },
  { icon: FileSpreadsheet, label: "Row added to the sheet", tone: "bg-mint-100 text-mint-700" },
];

/** The automation a working professional builds: an inbox trigger, an AI step, a logged result. */
export function WorkflowMock({ className }: { className?: string }) {
  return (
    <Window title="Enquiry handler" className={className}>
      <div className="p-4">
        <ol className="space-y-2">
          {workflow.map((step, i) => (
            <li key={step.label} className="relative">
              {i > 0 && <span className="absolute -top-2 left-7 h-2 w-0.5 bg-navy-900/15" />}
              <div className="flex items-center gap-3 rounded-xl bg-cream-100 px-3 py-2.5 text-xs font-semibold">
                <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", step.tone)}>
                  <step.icon className="size-4" />
                </span>
                {step.label}
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-navy-900 px-3 py-2 text-xs font-bold text-white">
          <Check className="size-4 text-gold-300" strokeWidth={3} /> Runs every 5 minutes
        </div>
      </div>
    </Window>
  );
}

export const mockScreens = [ClassifierMock, ChatMock, ChartMock, PortfolioMock];
