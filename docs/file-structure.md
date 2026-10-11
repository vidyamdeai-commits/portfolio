# File structure

```
vidyamdeai-web/
├── CLAUDE.md                     # Project brief + rules for Claude Code
├── .claude/
│   ├── agents/                   # Subagents (see each file)
│   │   ├── page-builder.md
│   │   ├── content-writer.md
│   │   ├── forms-integrations.md
│   │   ├── qa-tester.md
│   │   └── seo-a11y-reviewer.md
│   └── settings.json             # Allowed commands (pnpm, playwright)
├── docs/
│   ├── business-brief.md         # Condensed BA: audiences, offer, brand rules
│   ├── architecture.md
│   ├── file-structure.md
│   └── content-status.md         # Every TBD/placeholder and who owes it
├── app/
│   ├── layout.tsx                # Fonts, header, footer, analytics
│   ├── globals.css               # Tailwind + brand tokens
│   ├── page.tsx                  # Home
│   ├── for-schools/page.tsx
│   ├── programmes/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── mind-and-wellness/page.tsx
│   ├── how-we-teach/page.tsx
│   ├── teach-with-us/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── book-workshop/page.tsx
│   ├── (legal)/privacy/page.tsx
│   ├── (legal)/terms/page.tsx
│   ├── actions/                  # Server Actions
│   │   ├── workshop.ts
│   │   ├── enquiry.ts
│   │   └── teach.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/                       # shadcn primitives (button, input, accordion…)
│   ├── layout/                   # Header, MegaMenu, MobileNav, Footer, WhatsAppButton
│   ├── sections/                 # Page blocks: Hero, Differentiators, StrandGrid,
│   │                             # VerticalCards, Steps, FaqList, CtaBand, FeeTable
│   ├── forms/                    # WorkshopForm, EnquiryForm, TeachForm, FormField
│   └── shared/                   # Logo, Placeholder, SectionHeading, JsonLd
├── content/                      # All copy and structured data (no copy in components)
│   ├── site.ts                   # Name, tagline, contacts, socials
│   ├── home.ts
│   ├── for-schools.ts
│   ├── strands.ts
│   ├── programmes/
│   │   ├── school.ts
│   │   ├── college.ts
│   │   ├── industry.ts
│   │   ├── everyday-ai.ts
│   │   └── wellness.ts
│   ├── faqs.ts
│   └── legal/*.mdx
├── lib/
│   ├── content/                  # Typed getters + types (the only way pages read content)
│   ├── validation/               # Zod schemas shared by forms + actions
│   ├── integrations/             # resend.ts, sheets.ts, turnstile.ts
│   ├── analytics.ts
│   └── utils.ts                  # cn(), formatters
├── public/
│   ├── brand/                    # logo.svg, logo-mark.svg, favicon set
│   └── images/
├── tests/
│   ├── e2e/                      # Playwright: navigation, forms, a11y (axe)
│   └── unit/                     # Vitest: validation, content getters
├── .env.example                  # RESEND_API_KEY, SHEETS_*, TURNSTILE_*, GA_ID
├── next.config.ts
├── tailwind / postcss config
├── playwright.config.ts
├── vitest.config.ts
└── package.json
```

Rules of thumb: pages compose `sections/`; sections take props, never import `content/` directly; only `app/**/page.tsx` calls `lib/content`.
