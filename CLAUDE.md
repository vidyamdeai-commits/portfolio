# Vidyam deAi — website

Marketing site for **Vidyam deAi** ("Knowledge · Intelligence · Future"), an Indian education venture teaching AI, automation and data skills alongside mental wellbeing. Launch offer: after-school programme for Classes 6–12. Wider catalogue: college, industry, everyday-life AI, Mind & Wellness.

**Primary conversion:** a school books a free 1-hour AI workshop. Secondary: parent/learner enquiry, teacher application.

@AGENTS.md

Read before bigger tasks:
- `docs/business-brief.md` — audiences, offer, brand rules
- `docs/architecture.md` — stack, routes, content model, form flow
- `docs/file-structure.md` — where things go
- `docs/content-status.md` — what is still placeholder
- `docs/design-handoff.md` — current design, photo rules and what to do next (read before styling work)
- `docs/image-credits.md` — source and photographer of every stock photo

## Commands

```bash
npm run dev         # local dev (http://localhost:3000)
npm run build       # production build (must pass before a PR)
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
# Planned, not set up yet: npm test (vitest), npm run test:e2e (playwright + axe)
```

This is Next.js 16 with Cache Components on: read `AGENTS.md` and the docs in `node_modules/next/dist/docs/` before using an API you are unsure of.

## Stack in one line

Next.js 16 App Router (Cache Components) · TypeScript strict · Tailwind v4 · shadcn/ui · content in `content/` via `lib/content` · Server Actions + Zod · Resend · Google Sheets · Turnstile · Vercel.

## How we build

- Server Components by default. Add `"use client"` only for interactivity (menus, forms, accordions).
- Copy lives in `content/`, never hard-coded in components. Pages read it through `lib/content`.
- Pages are compositions of `components/sections/*`. Reuse a section before creating a new one.
- One Zod schema per form in `lib/validation`, used by both the form and its Server Action.
- Use `next/image` and `next/font`. No layout shift, no unoptimised images.
- Mobile-first: most visitors arrive from WhatsApp links on phones.

## Brand

- Colours: navy (primary), gold (accent only, never body text on cream), cream background. Tokens live in `app/globals.css`.
- Type: bold sans (Plus Jakarta Sans) for headings, Inter for body, serif (Playfair Display) only for the wordmark. Changed 11 Oct 2026 after the owner rejected the serif "document" look.
- Photos: stock only, no identifiable faces, never captioned as our students. See `docs/design-handoff.md`.
- Tone: warm, clear, confident; plain English a principal or parent understands. No hype.
- Logo files in `public/brand/`. Write the name exactly **Vidyam deAi**.

## Content rules (from the client's Business Bible — non-negotiable)

- No unverified claims: no student counts, school logos, partner names, outcome stats or testimonials unless the client has supplied them.
- Never mention "Sansaptak".
- Never mention the construction-site / DSTBT grant project.
- No student photos or names without confirmed consent.
- Wellness pages keep the disclaimers: "a wellbeing and skills programme, not therapy or treatment", Tele-MANAS helpline **14416**, and "AI does not replace your doctor" on health content.
- Unknown facts (fees, durations, contacts, partner names) use `<Placeholder>` with a `TBD` value and an entry in `docs/content-status.md`. Don't invent them.

## Privacy

Forms collect personal data, so: consent checkbox, link to `/privacy` (DPDP Act 2023), no student data on the site, secrets only in env vars (see `.env.example`).

## Agents

Subagents in `.claude/agents/` are helpers, not gates. Use them when they fit; skip them for small changes.
- `page-builder` — builds pages and sections
- `content-writer` — writes and edits copy in `content/`
- `forms-integrations` — forms, Server Actions, Resend, Sheets, Turnstile, analytics
- `qa-tester` — Playwright and Vitest tests, runs the suite
- `seo-a11y-reviewer` — reviews metadata, structured data, accessibility, performance

## Definition of done

Builds, lints and typechecks clean; e2e passes; page works at 360px wide; no new placeholders without a `content-status.md` entry.

## Status

Round 1 (10 Oct 2026): brand tokens, header/footer, content layer, Home, For Schools, Programmes (index + 5 detail pages), Book a free AI workshop form (Server Action, zod, honeypot, Sheets/Resend delivery), privacy draft, sitemap/robots, JSON-LD. About, Contact, How We Teach, Teach With Us and Terms are "coming soon" placeholders for round 2.

Redesign (11 Oct 2026): vibrant ed-tech style across Home, For Schools, Programmes, programme pages, Book Workshop, header and footer. Home approved by the owner. Photos: 3 neutral on Home, 1 Indian on For Schools, none yet on the programme pages, Programmes index or Book Workshop. **Paused on an owner decision about photo sourcing** (Indian images only, no identifiable faces). Start with `docs/design-handoff.md`.
