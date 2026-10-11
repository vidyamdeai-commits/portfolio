export type Vertical = "school" | "college" | "industry" | "everyday" | "wellness";

/** A value the client has not confirmed yet. Rendered with <Placeholder>. */
export type Maybe<T> = T | null;

export type Cta = { label: string; href: string };

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: Maybe<string>;
  phone: Maybe<string>;
  whatsapp: Maybe<string>;
  address: Maybe<string>;
  primaryCta: Cta;
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export type Feature = { title: string; body: string; icon?: string };

export type Step = { title: string; body: string };

export type Faq = { q: string; a: string };

export type ClassBand = "6-7" | "8-9" | "10-12";

export type Strand = {
  id: string;
  title: string;
  summary: string;
  bands: Record<ClassBand, string>;
};

export type ProgrammeModule = { code?: string; title: string; topics: string[]; badge?: string };

export type Programme = {
  slug: string;
  vertical: Vertical;
  number: string;
  title: string;
  shortTitle: string;
  audience: string;
  summary: string;
  intro: string;
  modules: ProgrammeModule[];
  outcomes: string[];
  formats: string[];
  duration: Maybe<string>;
  batchSize: Maybe<string>;
  fee: Maybe<string>;
  disclaimer?: string;
  /** Decorative hero photo under `public/images/`. Omit to fall back to the illustrated tile. */
  heroImage?: string;
  cta: Cta;
};
