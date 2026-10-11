import { mockScreens } from "@/components/sections/mock-screens";
import type { ProgrammeModule } from "@/lib/content";
import { toneAt } from "@/lib/theme";

const isProject = (topic: string) => topic.startsWith("Project") || topic.startsWith("Capstone");

/**
 * "What students build": one tile per school level, pairing its project line from the
 * curriculum with an illustrated screen. The screens are drawings, not real student work.
 */
export function ProjectShowcase({ modules }: { modules: ProgrammeModule[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {modules.map((m, i) => {
        const project = m.topics.find(isProject);
        if (!project) return null;
        const Screen = mockScreens[i % mockScreens.length];
        const t = toneAt(i);
        return (
          <li key={m.title} className={`reveal flex flex-col rounded-3xl ${t.bg} p-5 transition duration-300 hover:-translate-y-1.5`}>
            <div className="h-60 overflow-hidden rounded-2xl">
              <Screen className="shadow-none" />
            </div>
            <p className="label mt-6 flex flex-wrap items-center gap-2">
              {m.badge && <span className={`rounded-full px-3 py-1 ${t.chip}`}>{m.badge}</span>}
              {m.code && <span className="text-navy-900/70">{m.code}</span>}
            </p>
            <p className="mt-3 font-display text-lg font-bold leading-snug text-navy-900">
              {project.replace(/^(Project|Capstone):\s*/, "").replace(/^./, (c) => c.toUpperCase())}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
