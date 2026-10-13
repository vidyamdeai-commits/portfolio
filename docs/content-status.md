# Content status

Every placeholder on the site is listed here. Remove a row when the client supplies the real value.

| Item | Where used | Status | Owed by |
|---|---|---|---|
| Domain, WhatsApp, address | `content/site.ts`, footer, contact | TBD (email and two phone numbers supplied 13 Oct 2026) | Client |
| Logo as SVG | `public/brand/` | TBD (only JPEG) | Client |
| ~~School range: Class 6–12 vs 5–12~~ | — | **RESOLVED 11 Oct 2026: Classes 6–12.** The school presentation deck says 6–12 throughout; the site was corrected in 9 places | — |
| Launch scope: school only vs all five verticals | nav, programmes | TBD | Client |
| Fees, durations, batch sizes | how-we-teach fees table, programme pages | TBD (or "on request") — blank in the client's brochure too | Client |
| Counselling partner name | mind-and-wellness | TBD | Client |
| Vision and mission | about | TBD — Business Bible 1.2/1.3 says "Final wording: TBD by founders" | Founders |
| Founder bios and photos | about (section not built yet) | TBD | Client |
| Lead destination (email / sheet / CRM) | `lib/integrations` | TBD | Client |
| Languages besides English | i18n | TBD | Client |

## Added 11 Oct 2026 with the How We Teach / Teach With Us / About pages

Built from the client's own documents: the "AI & Future Skills Course Brochure 2026-27" (section 06) and the
"Business Bible & SOP Framework v2.0" (chapters 01 and 04). Nothing on these pages is invented.

| Item | Where used | Status | Owed by |
|---|---|---|---|
| Teacher pay rates and payout schedule | teach-with-us ("Hours and pay") | Deliberately not stated: the Business Bible leaves the rate blank | Founders |
| Teaching locations and open subjects | teach-with-us | TBD — no vacancy list exists yet | Client |
| Counselling partner name | teach-with-us (wellbeing facilitators), mind-and-wellness | TBD | Client |
| Teach With Us application route | teach-with-us CTA | Points at `/contact`, which is still a placeholder page. Needs either a real contact page or its own application form | Client / round 2 |

### Deliberately excluded

`Proposal.pdf` (supplied 11 Oct 2026) is the DSTBT Vigyan Sathi / SFIC East grant proposal for the
Smart Construction Site Management Platform. `CLAUDE.md` forbids mentioning that project, and the
document is marked Confidential, so none of it was used: no copy, no figures, and none of the named
investigators. If founder bios are wanted on About, they must come from a different source.

## Updated 11 Oct 2026 from the school presentation deck

Source: "Vidyam deAi School Presentation (Logo Refined)", the approved school-facing deck.

- **Classes 6–12 is now correct everywhere.** Settles the long-standing 5-vs-6 conflict.
- **Stage names replaced the level names:** Discover (6–7), Build (8–9), Connect (10–11), Create (12).
  The old Explorers / Builders / Innovators / Creators names and the 5–6, 7–8, 9–10, 11–12 bands are gone.
- **Progress reports are monthly**, not end-of-term. Corrected on How We Teach and the school programme.
- **Teacher training is now published** as a school offering (owner confirmed 11 Oct 2026). It is a real
  commitment: the team must be able to deliver it.
- The curriculum explorer still uses bands `6-7` / `8-9` / `10-12` in `content/strands.ts`. The deck splits
  10–11 from 12, so the last band is coarser than the deck. Left as is because the strand copy is written
  for a 10–12 span; revisit if the deck's split matters.
- `content/programmes/wellness.ts` still says "Class 5–8" for the Mind & Wellness age bands. That comes from
  the course brochure and is a different programme, so the school deck does not contradict it. Worth
  confirming with the client whether wellness also starts at Class 6.

## Four-division restructure, 11 Oct 2026 — UNRATIFIED

The site was restructured into four divisions from "Website, Services & Growth Recommendations".

**That document is a team discussion paper, not an agreed plan.** Its own words: *"A consolidated set of
suggestions for team discussion"* and *"recommendations, not a fixed launch plan. Final priorities should
reflect available skills, delivery capacity, customer demand and budget."* The owner was told this and asked
on 11 Oct 2026 for it to be built anyway, so the team can judge it from a real site. **Nobody has confirmed
the team agreed it.** Treat the new structure as a proposal rendered in code until that happens.

| Decision | Who | Date |
|---|---|---|
| Build the four-division structure despite it being unratified | Owner | 11 Oct 2026 |
| Publish Creative Studio as a **live, operating** division | Owner | 11 Oct 2026 |
| Keep Everyday Life and Mind & Wellness live, linked from the footer, not top-level | Owner | 11 Oct 2026 |
| Publish teacher training and monthly progress reports as commitments | Owner | 11 Oct 2026 |

### Open risks created by these decisions

| Risk | Detail |
|---|---|
| Creative Studio advertises seven service areas as available | The source document warns twice against this: *"do not advertise programmes or capabilities as available until the team can deliver them reliably."* Every service on `/creative-studio` is now a public commitment — video, photo editing, scripts, animation, social creative, educational content and business design. Confirm the team can deliver each, or cut the ones they cannot. |
| Teacher training is a published school offering | Needs someone who can actually run it before a school asks. |
| Monthly progress reports are a published commitment | Was end-of-term. Monthly reporting is materially more work per school. |
| Every new CTA points at `/contact` | `/contact` is still a "coming soon" placeholder. Four division pages, Teach With Us and How We Teach all route enquiries there. **This is the single biggest gap on the site**: the restructure multiplies the number of dead-ends. |
| Home is no longer school-first | The headline is now the brand positioning. The owner approved the previous school-led Home on 11 Oct; this supersedes it and has not been re-approved. |

### Not applied from the recommendations document

- The suggested nav labels "For Colleges & Students" and "Contact / Request a Consultation" were shortened to
  "Colleges & Students" and "Contact" to fit the header at tablet widths.
- Marketing, measurement and go-to-market sections (7, 9, 10) are internal operating advice, not website content.
