import type { Strand } from "@/lib/content/types";

export const strands: Strand[] = [
  {
    id: "ai",
    title: "AI for schools",
    summary: "From using AI well to building with it.",
    bands: {
      "6-7": "How to prompt, talk to an AI agent, spot hallucinations, stay safe",
      "8-9": "How AI learns, train a simple model, AI as a study helper",
      "10-12": "Build AI agents, chatbots on their own notes, MCP tools",
    },
  },
  {
    id: "data",
    title: "Database and data",
    summary: "The skill underneath every AI system.",
    bands: {
      "6-7": "Tables, sorting, charts and surveys in spreadsheets",
      "8-9": "Real databases and SQL queries",
      "10-12": "Table design, PostgreSQL, vector databases for AI",
    },
  },
  {
    id: "automation",
    title: "Automation",
    summary: "The skill companies are hiring for.",
    bands: {
      "6-7": "Steps, flowcharts and Scratch",
      "8-9": "Python, workflows and APIs",
      "10-12": "Test automation with Playwright, Selenium, Cypress and Vibium; CI/CD",
    },
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    summary: "Stop, question, check, then decide.",
    bands: {
      "6-7": "Is-it-fair stories, catch AI mistakes, never pass off AI work as your own",
      "8-9": "Class debates, test AI for bias, spot deepfakes, privacy and consent",
      "10-12": "Real cases, India's DPDP Act and global AI laws, write an AI policy for the school",
    },
  },
  {
    id: "mind-body",
    title: "Mind and body",
    summary: "A calm mind learns better.",
    bands: {
      "6-7": "Weekly check-ins, 5-minute breathing, kind online habits",
      "8-9": "Handling exam stress, AI fitness goals, reading food labels",
      "10-12": "Study rhythm, sleep, screen-time balance, AI meal planning",
    },
  },
];

export const thinkingHabit = {
  intro: "In every AI lesson students practise one habit",
  steps: ["Stop", "Question", "Check", "Decide"],
};

export const automationTools = [
  { name: "Playwright", body: "Modern, fast browser automation from Microsoft" },
  { name: "Selenium", body: "The classic tool used across the industry for years" },
  { name: "Cypress", body: "Easy, visual testing for web apps" },
  { name: "Vibium", body: "New AI-native automation from the creator of Selenium" },
];
