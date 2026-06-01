// Legacy aggregator — re-exports content from the modular `src/content/*` files.
// New code should import from `@/content/...` directly. Kept for backwards compatibility.

import { heroContent } from "@/content/hero";
import { goals } from "@/content/goals";

export const heroConfig = {
  ...heroContent,
  goals,
  journey: {
    title: "My Data Science Journey",
    milestones: [
      { phase: "ML Engineering",     description: "Production ML pipelines, MLOps, and deployed model services.",          status: "in-progress" },
      { phase: "AI Engineering",     description: "LLM apps, RAG systems, agents, and AI product engineering.",            status: "planned" },
      { phase: "Deep Learning",      description: "Neural networks, computer vision, NLP, and modern architectures.",      status: "planned" },
      { phase: "Data Science Core",  description: "Statistics, EDA, feature engineering, and classical modeling.",         status: "planned" },
      { phase: "ML Playgrounds",     description: "Interactive demos and visual explainers of ML concepts.",                status: "planned" },
      { phase: "Research Papers",    description: "Reading, summarizing, and reproducing key ML/AI research.",              status: "planned" },
    ],
  },
};
