// Pure formatters that turn admin-form input into paste-ready TS snippets.

import type { Project, ProjectArticle, SectionContent } from "@/content/sections/types";

const indent = (text: string, n = 2): string =>
  text
    .split("\n")
    .map((l) => " ".repeat(n) + l)
    .join("\n");

const tsString = (s: string): string => JSON.stringify(s);

export function formatProject(p: Project): string {
  const lines: string[] = ["{"];
  lines.push(`  title: ${tsString(p.title)},`);
  lines.push(`  description: ${tsString(p.description)},`);
  lines.push(`  tags: [${p.tags.map(tsString).join(", ")}],`);
  if (p.githubUrl) lines.push(`  githubUrl: ${tsString(p.githubUrl)},`);
  if (p.demoUrl) lines.push(`  demoUrl: ${tsString(p.demoUrl)},`);
  if (p.image) lines.push(`  image: ${tsString(p.image)},`);
  if (p.articles && p.articles.length > 0) {
    lines.push(`  articles: [`);
    for (const a of p.articles) {
      lines.push(`    {`);
      lines.push(`      title: ${tsString(a.title)},`);
      lines.push(`      url: ${tsString(a.url)},`);
      if (a.source) lines.push(`      source: ${tsString(a.source)},`);
      lines.push(`    },`);
    }
    lines.push(`  ],`);
  }
  lines.push("}");
  return lines.join("\n");
}

export function formatArticleEntry(a: ProjectArticle): string {
  const lines = ["{"];
  lines.push(`  title: ${tsString(a.title)},`);
  lines.push(`  url: ${tsString(a.url)},`);
  if (a.source) lines.push(`  source: ${tsString(a.source)},`);
  lines.push("}");
  return lines.join("\n");
}

export function formatSectionFile(s: SectionContent): string {
  return `import type { SectionContent } from "./types";

export const ${camel(s.id)}: SectionContent = {
  id: ${tsString(s.id)},
  title: ${tsString(s.title)},
  icon: ${tsString(s.icon)},
  tagline: ${tsString(s.tagline)},
  description: ${tsString(s.description)},
  projects: [],
};
`;
}

export function formatRegistryAddition(s: SectionContent): string {
  const v = camel(s.id);
  return `// add to src/content/sections/index.ts
import { ${v} } from "./${s.id}";
// then append \`${v}\` to the \`sections\` array.`;
}

function camel(id: string): string {
  return id
    .split(/[-_]/)
    .map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1)))
    .join("");
}

export const formatHelpers = { indent };
