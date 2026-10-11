import type { Programme } from "@/lib/content/types";

export const wellness: Programme = {
  slug: "mind-and-wellness",
  vertical: "wellness",
  number: "05",
  title: "A calm mind learns better",
  shortTitle: "Mind & Wellness",
  audience: "Students, parents, teachers and working professionals",
  summary: "Awareness, guided and personalised meditation, and an AI coach backed by human counsellors.",
  intro:
    "Exam pressure, career worries and screen overload are real. This programme builds everyday mental fitness with trained facilitators, guided meditation, and a personal AI wellness coach that adapts to you.",
  modules: [
    { title: "Mental health awareness", topics: ["Understanding stress, anxiety and low mood", "Exam and performance pressure", "Sleep, screen time and digital wellbeing", "Kindness, friendships and saying no to bullying"] },
    { title: "Meditation & mindfulness", topics: ["Breathing practices for focus and calm", "Guided meditation: 5, 10 and 20 minutes", "Body scan and relaxation for better sleep", "Gratitude and mindful-study habits"] },
    { title: "Personalised meditation", topics: ["Sessions shaped by your mood, time and goal", "Choice of voice, language and music", "Age-appropriate scripts for children", "Builds gently from 3 minutes upwards"] },
    { title: "AI Wellness Coach", topics: ["Daily mood check-ins and journaling prompts", "Habit tracking: sleep, water, movement, screens", "Gentle nudges and weekly reflections", "Hands over to a human counsellor when needed"] },
  ],
  outcomes: [
    "Class 5–8: naming feelings, calm-down tools, focus games, kind online habits",
    "Class 9–12: exam stress, study rhythm, sleep, peer pressure, career anxiety",
    "College students: placements, independence, relationships, resilience",
    "Working professionals: burnout prevention, work-life balance, mindful leadership",
    "Parents and teachers: spotting warning signs, supportive conversations, self-care",
  ],
  formats: ["In-school sessions", "Small groups", "One-to-one"],
  duration: null,
  batchSize: null,
  fee: null,
  disclaimer:
    "This is a wellbeing and skills programme, not therapy or treatment. Sessions are led by trained facilitators with access to qualified counsellors. Personal data stays private and is never shared without consent. If you or someone you know is struggling, please talk to a trusted adult or call India's national mental health helpline, Tele-MANAS: 14416.",
  heroImage: "/images/gyan-mudra-hand.webp",
  cta: { label: "Enquire about wellness sessions", href: "/contact?interest=wellness" },
};
