// Shared types for portfolio section content files.

export type ProjectArticle = {
  title: string;
  url: string;
  source?: string; // e.g. "Substack", "Medium"
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;       // live deployment (e.g. Render)
  image?: string;         // optional cover image path
  articles?: ProjectArticle[];
};

export type SectionContent = {
  id: string;             // "ml-engineering"
  title: string;          // "ML Engineering"
  icon: "Cpu" | "Brain" | "Zap" | "Database";
  tagline: string;        // short tagline shown next to/under heading
  description: string;    // one-liner under heading
  projects: Project[];
};
