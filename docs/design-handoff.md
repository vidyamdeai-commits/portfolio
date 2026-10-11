# Design handoff

Where the redesign stands and how to continue it. Last updated 11 Oct 2026, late afternoon IST. Read this before touching any page styling.

## Start here: the photo decision is closed

The owner answered on 11 Oct 2026: **option D — search Pexels and Pixabay as well as Unsplash**, keeping both rules (India-set *and* no identifiable faces). They added that where no photo qualifies, use **illustrative stock instead of bending the rule**, and specifically asked for the Industry programme hero to be an illustration.

All seven remaining photo slots were filled from Pexels that afternoon. There is no longer an open question blocking design work. What is still outstanding is in "What to do next".

## Where we are

The site has been rebuilt in a **vibrant ed-tech style**. The owner approved the Home page in this style on 11 Oct 2026 ("Home page is good").

| Area | Design | Photos |
|---|---|---|
| Header, footer, mobile menu | Done | Not needed |
| Home | Done, approved | 3 photos, neutral (hands, empty lab, laptop on desk). Not India-set: replace when Indian photos are available |
| For Schools | Done | 2 Indian photos (automation section, closing band) |
| Programmes index | Done | 1 Indian photo (hero) |
| Programme pages (5) | Done | 4 Indian photos (school, college, everyday, wellness heroes). Industry uses an illustration |
| Book Workshop | Done | 1 Indian photo (above the "what's included" list, `sm` and up) |
| About, Contact, How We Teach, Teach With Us, Terms | Still "coming soon" pages | Later |

`npm run typecheck`, `npm run lint` and `npm run build` all passed at the last update (21 pages built), and every page was checked at 360px, 768px and 1280px with no horizontal overflow. Nothing has been committed to git, and nothing has been deployed.

The dev server was left running on http://localhost:3000. If it is not, run `npm run dev`.
## How we got here

1. **Round 1** was a plain rounded-card site. Copy: `D:\Vriddhi\websites\vidyamdeai-backup-2026-10-11`.
2. **Editorial version** (serif headlines, cream background, thin rules, no images). The owner rejected it: "looks like a Claude artifact, no website feeling". Copy: `D:\Vriddhi\websites\vidyamdeai-backup-editorial-2026-10-11`. Do not go back to this look.
3. **Vibrant ed-tech version** (current). Reference feel: codingal.com, planetspark.in. Colour blocks, rounded cards, illustrations, photos.

Lesson from step 2: text-only pages on cream with a serif read as a document. What makes it feel like a website is imagery, colour doing real work, and visual objects in every section.

## The design system

All tokens live in `app/globals.css`. Tone helpers live in `lib/theme.ts`.

- **Colour:** navy is the lead colour (hero, feature bands, footer). Gold is the action colour (buttons, the closing band). Five tints carry sections and cards: `sky`, `sun`, `mint`, `coral`, `lilac`. Each tint has a `-100` background and a `-700` text shade that passes AA on it.
- **Colour per programme** (`verticalTone` in `lib/theme.ts`): school sky, college lilac, industry sun, everyday coral, wellness mint.
- **Type:** Plus Jakarta Sans for headings (`font-display`), Inter for body, Playfair Display only for the Vidyam deAi wordmark (`font-serif`).
- **Tap targets are `min-h-11` (44px).** Every link in `header.tsx` uses it, including the announcement bar. The skip link is the one deliberate exception: it is `sr-only` until focused and keyboard-only, so its 40px focused height is not a touch target.
- **Hero visuals show at every width.** Programme heroes, the Programmes index hero and the Book Workshop photo were originally `hidden lg:block`, which left seven pages with a text-only hero on phones — the exact "reads like a document" failure that sank the editorial version. They now render as a wide `aspect-[16/10]` banner under the intro text on small screens and switch to the tall `lg:aspect-[4/5]` aside from `lg`. Desktop is unchanged. Keep this pattern for any new hero.
- **Shape:** rounded cards (`rounded-3xl`, big panels `rounded-[2rem]`), soft shadows (`shadow-card`, `shadow-lift`), pill buttons with a solid drop edge.
- **Motion:** `.enter` (page load), `.reveal` (scroll, CSS only), `.bob` (hero float), `.swap` (tab change). All of it is switched off under `prefers-reduced-motion`.
- **Focus rings:** navy on light, gold inside `.on-dark` sections, navy again inside `.on-light` cards that sit in a dark section. Keep those two classes on any new dark section or light card.

## Building blocks

Pages are compositions of `components/sections/*`. Reuse before adding.

| Component | What it is |
|---|---|
| `hero.tsx` | Navy hero. `Hero` takes an `aside`; `HeroCollage` is the photo + mock screens + offer badge used on Home |
| `mock-screens.tsx` | Illustrated "student project" screens (chatbot, fruit sorter, chart, portfolio, code). Drawings, hidden from screen readers |
| `project-showcase.tsx` | "What students build": one tile per school level, pulled from the school programme's project lines |
| `curriculum-explorer.tsx` | Client component. Class 6–7 / 8–9 / 10–12 tabs with arrow-key support |
| `thinking-habit.tsx` | The Stop › Question › Check › Decide graphic |
| `tools-strip.tsx` | Automation tools as lettered badges. Never use third-party logos |
| `feature-grid.tsx` | Icon tiles, `tone="light"` or `"dark"` |
| `steps.tsx` | Numbered journey with a dashed rail |
| `programme-cards.tsx` | Programme cards with a tinted illustrated top |
| `cta-band.tsx` | Gold closing band. Optional `image` prop puts a photo on the right |
| `faq-list.tsx` | Accordion cards |
| `mock-screens.tsx` → `WorkflowMock` | Illustrated automation (inbox → AI step → logged row). Used as the Industry programme hero in place of a photo |

Unused but kept (no deletions were allowed): `strand-grid.tsx`, `strand-index.tsx`.

## Photo rules (agreed with the owner)

- **Indian imagery only** (owner, 11 Oct 2026). Photos must be set in India or show nothing that reads as non-Indian. Unsplash alone yielded almost nothing; **Pexels is the better source** and is where all seven 11 Oct photos came from. Pixabay has not been needed yet. The best long-term fix is still the client's own photos from workshops, taken with written consent.
- **Where no photo qualifies, use an illustration** (owner, 11 Oct 2026) rather than relaxing either rule. `WorkflowMock` on the Industry page is the worked example.
- Pexels' `?people=0` URL filter **does not work** — results still contain people. Verify every candidate by eye.
- A photographer's name and the absence of any "India" mention on the photo page are a fast reject signal for the India rule; confirm on the photo page, which lists the location when the photographer set one.
- **No faces.** Only photos where nobody is identifiable: hands on laptops, screens, labs, classrooms from behind, a faceless yoga or meditation scene. Free stock licences carry no consent from the people shown, and visitors would assume they are our students.
- **Never caption a stock photo** as Vidyam deAi students, classes or results. Use `alt=""` (decorative).
- **Source:** Unsplash or Pexels, free licence only. Skip Unsplash+ (paid).
- **Format:** WebP, max 1600px wide, in `public/images/`, shown with `next/image`.
- **Credit every photo** in `docs/image-credits.md` (file, where used, photographer, source link).

How a photo was added each time:

1. Search Unsplash with `?license=free`, pick a no-face photo, open its page to confirm it says "Free" and note the photographer.
2. Download with the CDN options `?w=1600&q=72&fm=webp&fit=max` into `public/images/<name>.webp`.
3. Add it with `<Image src="/images/<name>.webp" alt="" fill sizes="…" className="object-cover" />` inside a sized, rounded wrapper.
4. Add the row to `docs/image-credits.md`.

## What to do next

Work one page at a time, check it renders, then show the owner before moving on. The owner asked for small steps.

1. **Show the owner the seven new photos in place,** on a phone as well as a desktop. They approved the sourcing method and the slot list, but have not yet seen the pages rendered.
2. **Replace the three Home photos.** They are face-free but not India-set, and are now the only images on the site that fail the Indian-imagery rule. This is the largest remaining gap. `hero-laptop.webp` sits inside `HeroCollage`, so it needs more care than a `src` swap.
3. **Round 2 pages:** About, Contact, How We Teach, Teach With Us, Terms still need content from the client.

### Taste calls the owner may want to revisit

- **Mind & Wellness hero** (`gyan-mudra-hand.webp`) is a dark, low-key close-up on a navy hero. It satisfies both rules and was accepted, but it is more sombre than the rest of the site. The alternative is dropping it for an illustration.
- **Industry hero** is the `WorkflowMock` illustration rather than a photo, because no workplace photo was both India-set and face-free. If the owner later allows faces, this is the first slot to revisit.

## Rules that still apply

These come from `CLAUDE.md` and were kept through every redesign:

- No invented stats, school logos, partner names or testimonials.
- Wellness and everyday-AI disclaimers stay word for word (Tele-MANAS 14416, "not therapy or treatment", "do not replace advice from your doctor").
- Unknown facts stay as `<Placeholder>` with a row in `docs/content-status.md`.
- Copy lives in `content/`, read through `lib/content`. The redesign changed no existing copy. It added `content/schools.ts` (For Schools hero text, the "at a glance" facts, the workshop "included" list), `thinkingHabit` in `content/strands.ts`, and `offer` in `content/home.ts`.
- `/programmes/[slug]` awaits `params` inside a `<Suspense>` child. Keep it: Partial Prefetching is on.
- Form logic in `components/forms/workshop-form.tsx`, `lib/validation/workshop.ts` and `app/actions/workshop.ts` was not changed, only the form's styling.

## Running it

```bash
npm run dev         # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

The Claude desktop preview starts the dev server from `D:\Vriddhi\.claude\launch.json`.

## Tooling note

The `ui-ux-pro-max` Claude Code plugin is installed (user scope). Its typography, accessibility and motion guidance was used. Its generated design system (claymorphism, indigo and orange, Baloo 2 / Comic Neue) was not, because it contradicts the brand colours.
