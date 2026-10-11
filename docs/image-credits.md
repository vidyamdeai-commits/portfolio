# Image credits

Stock photos used on the site. All are generic imagery under a free licence. They must never be captioned or presented as Vidyam deAi's own students, classes or results (see the content rules in `CLAUDE.md`).

| File | Used on | Photographer | Source | Licence |
|---|---|---|---|---|
| `public/images/hero-laptop.webp` | Home hero | Vlad Deep | https://unsplash.com/photos/childs-hands-typing-on-a-laptop-keyboard-zniM2Qqaxv4 | Unsplash License (free, commercial use allowed) |
| `public/images/computer-lab.webp` | Home, "What your school gets" | Duane Loux | https://unsplash.com/photos/laptops-on-a-table-Zv9Oh0dnDBs | Unsplash License (free, commercial use allowed) |
| `public/images/classroom-laptop.webp` | Home, closing call-to-action band | Thomas Park | https://unsplash.com/photos/macbook-pro-on-brown-wooden-table-VdPTlyp60ys | Unsplash License (free, commercial use allowed) |
| `public/images/student-blackboard.webp` | For Schools, automation section | Nikhita S | https://unsplash.com/photos/woman-standing-writing-on-black-chalkboard-NsPDiPFTp4c | Unsplash License (free, commercial use allowed) |

| `public/images/school-corridor-bihar.webp` | School programme hero | Sanjay Sharma | https://www.pexels.com/photo/colorful-architectural-hallway-with-arches-34655957/ | Pexels License (free, commercial use allowed) |
| `public/images/school-corridor-arches.webp` | Programmes index hero | Sanjay Sharma | https://www.pexels.com/photo/colorful-school-corridor-with-painted-arches-34655955/ | Pexels License (free, commercial use allowed) |
| `public/images/school-classroom-chennai.webp` | For Schools, closing call-to-action band | Haseeb Modi | https://www.pexels.com/photo/empty-classroom-with-desks-in-chennai-school-39863913/ | Pexels License (free, commercial use allowed) |
| `public/images/college-campus-india.webp` | College programme hero | Mohammad Rashid Raza | https://www.pexels.com/photo/modern-educational-campus-in-india-at-daytime-37145891/ | Pexels License (free, commercial use allowed) |
| `public/images/phone-temple-hands.webp` | AI for Everyday Life programme hero | Rajat Sahu | https://www.pexels.com/photo/capturing-festival-moments-on-smartphone-33643791/ | Pexels License (free, commercial use allowed) |
| `public/images/gyan-mudra-hand.webp` | Mind & Wellness programme hero | Janak Patel | https://www.pexels.com/photo/a-hand-gyan-mudra-13943905/ | Pexels License (free, commercial use allowed) |
| `public/images/school-building-aerial.webp` | Book a free AI workshop, above the "what's included" list | Anil Sharma | https://www.pexels.com/photo/aerial-view-of-modern-school-building-in-india-30945258/ | Pexels License (free, commercial use allowed) |

All seven are decorative (`alt=""`) and render at every width: a wide 16:10 banner on phones, the tall 4:5 aside from `lg`. The Book Workshop photo is 16:9 at all widths.

Selection rule: prefer photos where no child is identifiable (hands, screens, classrooms from behind). Close-up portraits of real children are avoided even when the licence allows them, because the licence does not include a model release.

The owner asked on 11 Oct 2026 for **Indian imagery only**, and confirmed the same day that stock must have no faces or else be illustrative. The seven Pexels photos added that day are all India-set and face-free: four have no people at all, two show only hands, and one (`college-campus-india.webp`) has figures too distant to identify.

`student-blackboard.webp` is India-set. The three Home photos (`hero-laptop`, `computer-lab`, `classroom-laptop`) show no people or only hands, so nothing in them reads as non-Indian, but they are **not** India-set and are still the outstanding replacements.

Rejected while sourcing, and why, so the same ground is not covered twice:

- Indian yoga and meditation photos on Pexels (`36742836`, `35338412`): faces clearly identifiable.
- Genuinely empty computer labs (`39178037`, `39178044`, `18471478`, `34084877`, `39107642`): people-free but shot in Ukraine, France and Turkey, so they fail the India rule.
- Faceless-homework crops (`5905476`, `5896423`): face-free but generic Western stock, not India-set.
- `IIM Indore`, `Allahabad University`, `Shivalk Public School`: real named institutions, which would read as an affiliation we do not have.

The Industry programme hero has **no photo**. Nothing on Pexels was both India-set and face-free for a workplace scene, so that page uses the `WorkflowMock` illustration in `components/sections/mock-screens.tsx` instead (owner's instruction, 11 Oct 2026).

Unused files left in `public/images/` (not referenced by any page; safe to delete): `student-laptop-above.webp`, `workshop-audience.webp`.
