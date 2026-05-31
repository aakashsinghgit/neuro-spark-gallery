// Pure XP/level computation derived from the section registry.
import { sections } from "@/content/sections";
import type { SectionContent } from "@/content/sections/types";
import {
  XP_WEIGHTS,
  xpToLevel,
  levelToTier,
  levelToMinXp,
  MAX_LEVEL,
  type Tier,
} from "./rules";

export type XpBreakdown = {
  label: string;
  xp: number;
  count: number;
};

export type Progression = {
  xp: number;
  level: number;
  tier: Tier;
  label: string;
  xpIntoLevel: number;
  xpForNextLevel: number;
  progressPct: number; // 0..100 toward next level
  breakdown: XpBreakdown[];
  totals: {
    sections: number;
    projects: number;
    demos: number;
    articles: number;
  };
};

function projectXp(sectionId: string): number {
  return XP_WEIGHTS.projectBySection[sectionId] ?? XP_WEIGHTS.projectDefault;
}

export function computeProgression(input: SectionContent[] = sections): Progression {
  let projectsXp = 0;
  let demoXp = 0;
  let articleXp = 0;
  let projects = 0;
  let demos = 0;
  let articles = 0;

  for (const s of input) {
    for (const p of s.projects) {
      projects += 1;
      projectsXp += projectXp(s.id);
      if (p.demoUrl) {
        demos += 1;
        demoXp += XP_WEIGHTS.demoBonus;
      }
      if (p.articles) {
        articles += p.articles.length;
        articleXp += p.articles.length * XP_WEIGHTS.article;
      }
    }
  }

  const sectionsXp = input.length * XP_WEIGHTS.sectionLaunched;
  const xp = projectsXp + demoXp + articleXp + sectionsXp;

  const level = xpToLevel(xp);
  const tierMeta = levelToTier(level);

  const currentLevelMin = levelToMinXp(level);
  const nextLevelMin =
    level >= MAX_LEVEL ? currentLevelMin : levelToMinXp(level + 1);
  const xpIntoLevel = xp - currentLevelMin;
  const xpForNextLevel = Math.max(1, nextLevelMin - currentLevelMin);
  const progressPct = Math.min(100, (xpIntoLevel / xpForNextLevel) * 100);

  return {
    xp,
    level,
    tier: tierMeta.tier,
    label: tierMeta.label,
    xpIntoLevel,
    xpForNextLevel,
    progressPct,
    breakdown: [
      { label: "Projects",         xp: projectsXp, count: projects },
      { label: "Deployed demos",   xp: demoXp,     count: demos },
      { label: "Articles",         xp: articleXp,  count: articles },
      { label: "Sections launched",xp: sectionsXp, count: input.length },
    ],
    totals: { sections: input.length, projects, demos, articles },
  };
}
