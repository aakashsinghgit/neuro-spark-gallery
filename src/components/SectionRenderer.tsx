import { Cpu, Brain, Zap, Database, Github, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { SectionContent } from "@/content/sections/types";

const iconMap = { Cpu, Brain, Zap, Database } as const;

interface SectionRendererProps {
  section: SectionContent;
}

const SectionRenderer = ({ section }: SectionRendererProps) => {
  const Icon = iconMap[section.icon];

  return (
    <section id={section.id} className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Compact, left-indented heading per design system */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg border border-border">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-playfair">{section.title}</h2>
        </div>
        <p className="text-sm text-muted-foreground ml-12 mt-1">{section.tagline}</p>
        <p className="text-base text-muted-foreground ml-12 mt-2">{section.description}</p>
      </div>

      {section.projects.length === 0 ? (
        <div className="ml-12 border border-dashed border-border rounded-lg p-8 text-sm text-muted-foreground">
          Projects coming soon — content is loaded from{" "}
          <code className="text-foreground">src/content/sections/{section.id}.ts</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-12">
          {section.projects.map((project) => (
            <article key={project.title} className="border border-border rounded-lg p-6 bg-card hover:border-accent transition-colors">
              {project.image && (
                <div className="mb-4 rounded-md overflow-hidden border border-border">
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover" loading="lazy" />
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.demoUrl && (
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                )}
              </div>

              {project.articles && project.articles.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Related writing</p>
                  <ul className="space-y-1">
                    {project.articles.map((a) => (
                      <li key={a.url} className="text-sm">
                        <a href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-accent">
                          <FileText className="w-3.5 h-3.5" />
                          {a.title}
                          {a.source && <span className="text-muted-foreground text-xs">· {a.source}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionRenderer;
