import type { Programme } from "@/lib/content/types";

export const industry: Programme = {
  slug: "industry",
  vertical: "industry",
  number: "03",
  title: "AI where it matters: domain tracks",
  shortTitle: "Industry",
  audience: "Final-year students, graduates and working professionals",
  summary: "Banking, AML and RegTech, Healthcare, Retail Pharmacy.",
  intro:
    "Add-on specialisations that pair domain knowledge with hands-on AI projects on realistic, anonymised data, mentored by industry practitioners.",
  modules: [
    {
      title: "Banking & Financial Services",
      badge: "For commerce, finance and CS graduates, bank staff",
      topics: [
        "Banking products, lending and payments (UPI) basics",
        "Credit scoring and risk models",
        "Fraud detection with machine learning",
        "AI chatbots for customer service",
        "Document AI for loan and account processing",
        "Project: loan-default prediction dashboard",
      ],
    },
    {
      title: "AML Tech & RegTech",
      badge: "For compliance, audit, risk and analytics roles",
      topics: [
        "Anti-money-laundering lifecycle, KYC and CDD",
        "Transaction monitoring and red-flag typologies",
        "Sanctions, PEP and adverse-media screening",
        "AI alert triage and network (graph) analytics",
        "Case notes and report drafting with human review; model explainability",
        "Project: an AI agent that triages AML alerts",
      ],
    },
    {
      title: "Healthcare AI",
      badge: "For life-science, nursing, health-admin and CS students",
      topics: [
        "Health data, records and interoperability basics",
        "Medical imaging AI: concepts and limits",
        "Clinical text summarisation with LLMs",
        "Appointment, triage and patient-support bots",
        "Patient privacy, consent and safety rules",
        "Project: discharge-summary assistant with doctor review",
      ],
    },
    {
      title: "Retail Pharmacy",
      badge: "For pharmacy students, pharmacists and store owners",
      topics: [
        "Demand forecasting, stock and expiry management",
        "Prescription digitisation (OCR and AI)",
        "Drug-interaction lookup as a pharmacist aid",
        "Customer reminders, refills and loyalty",
        "Billing, GST records and regulatory compliance",
        "Project: smart inventory and refill-reminder system",
      ],
    },
  ],
  outcomes: ["Domain project for your portfolio", "Mentoring by industry practitioners", "Certificate on completion"],
  formats: ["Weekend or evening batches"],
  duration: null,
  batchSize: null,
  fee: null,
  cta: { label: "Enquire about a domain track", href: "/contact?interest=industry" },
};
