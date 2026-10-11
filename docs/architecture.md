# Architecture — Vidyam deAi website

Marketing site for Vidyam deAi (AI, automation, data skills + wellbeing education, India).
Phase 1 goal: schools book a **free 1-hour AI workshop**. Secondary: demo-class enquiries, teacher applications.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16, App Router, Cache Components, TypeScript (strict) | Static by default, Server Actions for forms |
| Styling | Tailwind CSS v4 + CSS variables for brand tokens | Fast, consistent with navy/gold system |
| UI primitives | shadcn/ui (copied in, not a dependency) + lucide-react icons | Accessible, owned code |
| Content | Typed content files in `content/` (TS for structured data, MDX for long copy), read only through `lib/content` | Client is pre-launch with many placeholders; no CMS cost yet; swap to Sanity/Payload later by rewriting `lib/content` only |
| Forms | Server Actions + Zod + React Hook Form | One schema shared by client and server |
| Email | Resend | Notify team on every lead |
| Lead store | Google Sheets append (Phase 1), CRM later | Matches SOP ST-01 "lead tracker" |
| Spam | Cloudflare Turnstile | Free, no puzzles for users |
| Analytics | Vercel Analytics + GA4 events on form submits | Conversion tracking |
| Hosting | Vercel | Preview deploys for founder review |
| Tests | Playwright (e2e, a11y via axe), Vitest (lib/ units) | Fits the brand: they teach Playwright |

## Rendering model

- Every marketing page is a **Server Component** and statically generated.
- Programme detail pages use `generateStaticParams` from `content/programmes`.
- Client Components only for: nav menu, mobile drawer, forms, accordions, carousels.
- No database in Phase 1. Forms are the only server-side work.

## Data flow (forms)

```
Form (client, RHF + zod) → Server Action (re-validate zod, verify Turnstile)
   → append row to Google Sheet  ┐
   → send notification via Resend ┘ (both; failure of one is logged, not fatal)
   → return { ok } → success state + GA4 event
```

Forms: `workshop` (schools), `enquiry` (parents / learners, any programme), `teach` (teacher application, CV upload to blob storage), `contact` (general).

## Content model (lib/content types)

- `Programme` — slug, vertical (`school | college | industry | everyday | wellness`), title, audience, summary, levels/modules[], projects[], formats[], duration?, batchSize?, fee? (`"on-request"` allowed), cta.
- `Strand` — AI / Data / Automation / Responsible AI / Mind & body, with per-class-band topics (powers the For Schools grid).
- `Faq`, `Differentiator`, `Step`, `Founder`, `SiteConfig` (name, contacts, socials — all placeholders until client confirms).
- Any unknown value is `TBD` typed as `null` and rendered via a `<Placeholder>` that shows a visible marker in preview and hides in production.

## Routes

```
/                         Home
/for-schools              School sales page          CTA: book workshop
/programmes               Five verticals overview
/programmes/[slug]        School, college, industry, everyday-ai, ...
/programmes/mind-and-wellness  Wellness page (lives under programmes)
/how-we-teach             Formats, what learners get, fees, enrolment steps
/teach-with-us            Trainer recruitment + application form
/about                    Story, founders, values, responsible AI
/contact                  Audience-aware enquiry form
/book-workshop            Dedicated workshop booking (ad / WhatsApp landing)
/privacy  /terms          Legal (DPDP Act 2023)
```

## Non-functional targets

- Lighthouse mobile ≥ 90 on all four scores.
- WCAG 2.1 AA. Gold on cream fails for body text: gold is accent only.
- SEO: Metadata API per page, `sitemap.ts`, `robots.ts`, OG images, JSON-LD `EducationalOrganization` + `Course`.
- No student photos/names without consent; no unverified claims (Business Bible rule 1.7).

## Later (Phase 2)

Online enrolment + Razorpay, learner portal link, blog (MDX), testimonials after pilot, CMS migration, Hindi/Bengali (`next-intl`).
