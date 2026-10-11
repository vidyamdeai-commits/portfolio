import type { Vertical } from "@/lib/content";

/** Colour pairs for tiles and sections. Class names are written out in full so Tailwind can see them. */
export type Tone = "sky" | "sun" | "mint" | "coral" | "lilac";

export const tones: Record<Tone, { bg: string; text: string; chip: string; bar: string }> = {
  sky: { bg: "bg-sky-100", text: "text-sky-700", chip: "bg-sky-700 text-white", bar: "bg-sky-700" },
  sun: { bg: "bg-sun-100", text: "text-gold-800", chip: "bg-gold-500 text-navy-950", bar: "bg-gold-500" },
  mint: { bg: "bg-mint-100", text: "text-mint-700", chip: "bg-mint-700 text-white", bar: "bg-mint-700" },
  coral: { bg: "bg-coral-100", text: "text-coral-700", chip: "bg-coral-700 text-white", bar: "bg-coral-700" },
  lilac: { bg: "bg-lilac-100", text: "text-lilac-700", chip: "bg-lilac-700 text-white", bar: "bg-lilac-700" },
};

export const toneCycle: Tone[] = ["sky", "sun", "mint", "coral", "lilac"];

export const toneAt = (i: number) => tones[toneCycle[i % toneCycle.length]];

export const verticalTone: Record<Vertical, Tone> = {
  school: "sky",
  college: "lilac",
  industry: "sun",
  everyday: "coral",
  wellness: "mint",
};
