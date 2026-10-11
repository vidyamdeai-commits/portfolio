import type { Programme } from "@/lib/content/types";

export const everydayAi: Programme = {
  slug: "everyday-ai",
  vertical: "everyday",
  number: "04",
  title: "Your own AI helper for everyday life",
  shortTitle: "AI for Everyday Life",
  audience: "Homemakers, professionals, seniors, students, salon and gym owners",
  summary: "Beauty, fitness, health, nutrition and cooking with AI.",
  intro:
    "Short, friendly courses for anyone, no tech background needed. One-to-one or small groups, built around your goals.",
  modules: [
    { title: "Beauty & Skincare", topics: ["Build a routine for your skin and hair type", "Decode product ingredients and labels", "Try looks with virtual try-on apps", "Compare products and spend wisely"] },
    { title: "Fitness", topics: ["AI workout plans for your level, time and space", "Home, yoga, walking and gym routines", "Track progress with phone and wearables", "Stay motivated with smart reminders"] },
    { title: "Health", topics: ["Understand lab reports in plain language", "Prepare questions before a doctor visit", "Medicine and check-up reminders for family", "Spot unreliable health information online"] },
    { title: "Nutrition", topics: ["Balanced weekly meal plans for the family", "Read food labels and compare choices", "Plans for preferences: veg, Jain, regional", "Grocery lists that match your budget"] },
    { title: "Cooking with AI", topics: ["Find recipes from what is in your fridge", "Recreate regional and family dishes", "Scale recipes and swap ingredients", "Plan festive menus and cut food waste"] },
    { title: "Everyday AI", topics: ["Plan trips, budgets and household tasks", "Write letters, posts and applications", "Learn a language or new hobby", "Stay safe from AI scams and fake calls"] },
  ],
  outcomes: ["Your personal AI set-up", "Saved prompts you keep using", "A 30-day routine"],
  formats: ["One-to-one or small group", "Online or in person"],
  duration: null,
  batchSize: null,
  fee: null,
  disclaimer:
    "AI tools support everyday choices; they do not replace advice from your doctor, dietitian or a certified trainer, especially for medical conditions, pregnancy or medication.",
  heroImage: "/images/phone-temple-hands.webp",
  cta: { label: "Book a session", href: "/contact?interest=everyday" },
};
