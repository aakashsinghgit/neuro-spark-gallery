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

export type XpHistoryEntry = {
  label: string;        // project / article / section name
  section: string;      // section title
  kind: "project" | "demo" | "article" | "section";
  xp: number;
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
  history: XpHistoryEntry[];
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

  const history: XpHistoryEntry[] = [];

  for (const s of input) {
    const sectionXp = XP_WEIGHTS.sectionLaunched;
    history.push({
      label: `Section launched: ${s.title}`,
      section: s.title,
      kind: "section",
      xp: sectionXp,
    });

    for (const p of s.projects) {
      projects += 1;
      const pXp = projectXp(s.id);
      projectsXp += pXp;
      history.push({
        label: p.title,
        section: s.title,
        kind: "project",
        xp: pXp,
      });
      if (p.demoUrl) {
        demos += 1;
        demoXp += XP_WEIGHTS.demoBonus;
        history.push({
          label: `${p.title} — live demo`,
          section: s.title,
          kind: "demo",
          xp: XP_WEIGHTS.demoBonus,
        });
      }
      if (p.articles) {
        for (const a of p.articles) {
          articles += 1;
          articleXp += XP_WEIGHTS.article;
          history.push({
            label: `Article: ${a.title}`,
            section: s.title,
            kind: "article",
            xp: XP_WEIGHTS.article,
          });
        }
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
    history,
    totals: { sections: input.length, projects, demos, articles },
  };
}
