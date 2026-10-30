import type { Cta, Feature, Step } from "@/lib/content/types";

/**
 * Source: the client's Business Bible & SOP Framework v2.0, chapter 04
 * (Teacher Resourcing, SOP TR-01/02/03) and SOP GV-01 (safeguarding).
 * Written for applicants, not as a restatement of the internal procedure.
 * Rates, locations and subjects are not fixed in the source: see docs/content-status.md.
 */

export const hero = {
  eyebrow: "Teach with us",
  title: "Teach the subject you actually work in",
  body: "We are building a pool of teachers who can take AI, computer science, data and wellbeing to students across Classes 3 to 12, in colleges and in professional batches. If you build these things at work, or you teach them well, we would like to hear from you.",
  secondary: { label: "See what we teach", href: "/" } satisfies Cta,
};

export const lookingFor: Feature[] = [
  {
    icon: "ai",
    title: "People who do the work",
    body: "Practitioners who use AI, data, automation or cloud tools in their job, and can explain them to a fifteen-year-old without jargon.",
  },
  {
    icon: "school",
    title: "Teachers who like a classroom",
    body: "Experienced school and college teachers who want to move into AI and computer science, with support to get there.",
  },
  {
    icon: "wellness",
    title: "Wellbeing facilitators",
    body: "Trained facilitators for the Mind & Wellness programme, working alongside qualified counsellors.",
  },
  {
    icon: "industry",
    title: "Domain specialists",
    body: "Professionals in banking, AML and RegTech, healthcare or retail pharmacy, to lead the industry specialisations.",
  },
];

/** The real selection process, SOP TR-01. */
export const process: Step[] = [
  {
    title: "Apply",
    body: "Tell us the subject and level you can teach, your availability, and whether you want to teach in person, online or both.",
  },
  {
    title: "Interview",
    body: "If your application matches an open requirement, we shortlist and arrange an interview about your subject and how you teach it.",
  },
  {
    title: "Demo class",
    body: "A 20-minute demo class. This is the part that matters most to us: we want to see you teach, not hear you describe it.",
  },
  {
    title: "Verification",
    body: "We verify identity, qualifications and the background checks required for work with students. Nobody meets a learner before these are complete.",
  },
  {
    title: "Join the pool",
    body: "Once approved you join the teacher pool and we match you to batches by subject, level and location.",
  },
];

/** Onboarding before the first class, SOP TR-02. */
export const onboarding = {
  title: "Before your first class",
  body: "Onboarding is finished before you are assigned a batch, not during it.",
  items: [
    "A written engagement agreement and a signed code of conduct",
    "Orientation covering how we work, safeguarding and the tools we use",
    "A shadow or live session, so your first class is not your first look at one",
    "Accounts set up on the systems you will actually need, and no more",
    "A readiness check before you are confirmed on a batch",
  ],
};

/** What is expected once teaching, SOP TR-03 and ST-03. */
export const expectations: Feature[] = [
  {
    icon: "calendar",
    title: "Turn up prepared",
    body: "Review the session plan the day before, arrive ahead of the class, and take attendance at the start.",
  },
  {
    icon: "check",
    title: "File the session log the same day",
    body: "A short log of what was covered and anything a learner struggled with. It is how the next teacher and the parents stay informed.",
  },
  {
    icon: "users",
    title: "Give notice, get cover",
    body: "Tell us at least 48 hours ahead when you cannot make a session, so we can bring in cover from the backup pool. Classes should not be cancelled on students.",
  },
  {
    icon: "trophy",
    title: "Be observed, and get feedback",
    body: "Teaching is observed on a regular cadence and you get feedback, coaching where it helps, and recognition where it is earned.",
  },
];

/** Safeguarding. Stated as the rules we apply, not as a claim about outcomes. */
export const safeguarding = {
  title: "Working with students",
  body: "These rules apply to everyone who teaches for us, with no exceptions:",
  items: [
    "The code of conduct is signed before any contact with a learner.",
    "No unsupervised one-to-one contact or direct messaging with a student outside an approved, supervised channel.",
    "Photographs and student data are used only with the consent required for them.",
    "Any safeguarding concern is reported the same day, through a named route, and logged.",
  ],
  note: "This is our own operating standard. It sits alongside, and never replaces, the school's child-protection policy or the law.",
};

export const terms = {
  title: "Hours and pay",
  body: "Engagements are by batch, with the rate and payout terms set out in writing in your agreement before you accept. Teaching hours depend on the programme and the format, and payouts are calculated from approved session logs.",
};

export const cta = {
  title: "Apply to teach",
  body: "Tell us what you teach and when you are free. We will come back to you when a batch matches.",
};
