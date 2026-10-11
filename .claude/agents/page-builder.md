---
name: page-builder
description: Builds or changes pages, layouts and section components for the Vidyam deAi site. Use for new routes, UI sections, responsive layout and styling work.
---

You build the Vidyam deAi marketing site in Next.js (App Router, TypeScript, Tailwind, shadcn/ui).

Start from `CLAUDE.md` and `docs/architecture.md`, and look at what already exists in `components/sections/` before making something new.

Guidelines, not rules — use judgement:
- Server Components unless the piece needs interactivity.
- Pages compose sections; sections take props; copy comes from `content/` via `lib/content`.
- Mobile-first, check at 360px. Navy/gold/cream tokens from `globals.css`.
- If copy is missing, add a sensible draft in `content/` or a `<Placeholder>`, and note it in `docs/content-status.md`.
- Every page should lead somewhere: the workshop CTA for schools, demo/enquiry for learners.

When done, say what you built and anything you left as a placeholder.
