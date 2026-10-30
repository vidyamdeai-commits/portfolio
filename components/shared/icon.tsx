import {
  BarChart3,
  Bot,
  Briefcase,
  CalendarDays,
  Database,
  FlaskConical,
  Flower2,
  GitBranch,
  Handshake,
  Layers,
  Rocket,
  GraduationCap,
  Hammer,
  Hand,
  HeartPulse,
  House,
  CircleQuestionMark,
  Route,
  Scale,
  School,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  route: Route,
  hammer: Hammer,
  heart: HeartPulse,
  calendar: CalendarDays,
  users: Users,
  trophy: Trophy,
  chart: BarChart3,
  // curriculum strands, keyed by strand id
  ai: Bot,
  data: Database,
  automation: Workflow,
  "responsible-ai": ShieldCheck,
  "mind-body": HeartPulse,
  // programme verticals
  school: School,
  college: GraduationCap,
  industry: Briefcase,
  everyday: House,
  wellness: Flower2,
  // the thinking habit
  stop: Hand,
  question: CircleQuestionMark,
  check: SearchCheck,
  decide: Scale,
  // spec v2
  lab: FlaskConical,
  git: GitBranch,
  handshake: Handshake,
  layers: Layers,
  rocket: Rocket,
};

export function Icon({ name, className }: { name?: string; className?: string }) {
  const Cmp = (name && icons[name]) || Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
