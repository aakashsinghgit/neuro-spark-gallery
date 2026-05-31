import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Copy, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { sections } from "@/content/sections";
import { computeProgression } from "@/content/xp/compute";
import {
  XP_WEIGHTS,
  xpToLevel,
  levelToTier,
} from "@/content/xp/rules";
import {
  formatProject,
  formatArticleEntry,
  formatSectionFile,
  formatRegistryAddition,
} from "@/lib/snippetGen";
import type {
  Project,
  ProjectArticle,
  SectionContent,
} from "@/content/sections/types";

const ICON_OPTIONS: SectionContent["icon"][] = ["Cpu", "Brain", "Zap", "Database"];

const SnippetBlock = ({
  code,
  path,
  hint,
}: {
  code: string;
  path: string;
  hint?: string;
}) => {
  const copy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Snippet copied");
  };
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
        <div className="text-xs">
          <span className="text-muted-foreground">Paste into </span>
          <code className="text-foreground">{path}</code>
        </div>
        <Button size="sm" variant="outline" onClick={copy}>
          <Copy className="w-3.5 h-3.5 mr-2" /> Copy
        </Button>
      </div>
      {hint && (
        <div className="px-4 py-2 text-xs text-muted-foreground border-b border-border">
          {hint}
        </div>
      )}
      <pre className="px-4 py-3 text-xs overflow-x-auto font-mono text-foreground bg-card whitespace-pre">
        {code}
      </pre>
    </div>
  );
};

const XpDelta = ({ delta }: { delta: number }) => {
  const current = useMemo(() => computeProgression(), []);
  const projected = current.xp + delta;
  const newLevel = xpToLevel(projected);
  const newTier = levelToTier(newLevel);
  const levelUp = newLevel > current.level;
  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
        XP impact
      </div>
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-2xl font-bold text-accent">+{delta} XP</span>
        <span className="text-sm text-muted-foreground">
          {current.xp} → <span className="text-foreground font-medium">{projected}</span>
        </span>
        <span className="text-sm">
          Level <span className="text-foreground font-medium">{current.level}</span> →{" "}
          <span className={levelUp ? "text-accent font-bold" : "text-foreground font-medium"}>
            {newLevel}
          </span>{" "}
          ({newTier.tier} · {newTier.label})
          {levelUp && (
            <Badge variant="outline" className="ml-2 border-accent text-accent">
              Level up
            </Badge>
          )}
        </span>
      </div>
    </div>
  );
};

// ---------------- Add Project ----------------
const AddProjectTab = () => {
  const [sectionId, setSectionId] = useState(sections[0]?.id ?? "");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [image, setImage] = useState("");
  const [articles, setArticles] = useState<ProjectArticle[]>([]);

  const project: Project = {
    title: title || "Untitled",
    description: description || "—",
    tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
    ...(githubUrl ? { githubUrl } : {}),
    ...(demoUrl ? { demoUrl } : {}),
    ...(image ? { image } : {}),
    ...(articles.length ? { articles } : {}),
  };

  const projectXp =
    XP_WEIGHTS.projectBySection[sectionId] ?? XP_WEIGHTS.projectDefault;
  const delta =
    projectXp +
    (demoUrl ? XP_WEIGHTS.demoBonus : 0) +
    articles.length * XP_WEIGHTS.article;

  const snippet = formatProject(project);
  const path = `src/content/sections/${sectionId}.ts`;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Section</Label>
          <Select value={sectionId} onValueChange={setSectionId}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {sections.map((s) => (
                <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Loan Criterion Predictor" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="space-y-2">
        <Label>Tags (comma-separated)</Label>
        <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Python, scikit-learn, Flask" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>GitHub URL</Label>
          <Input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Demo URL (live deployment)</Label>
          <Input value={demoUrl} onChange={(e) => setDemoUrl(e.target.value)} />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Image path (optional)</Label>
        <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="/projects/loan.jpg" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Articles</Label>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setArticles([...articles, { title: "", url: "", source: "" }])}
          >
            <Plus className="w-3.5 h-3.5 mr-1" /> Add article
          </Button>
        </div>
        {articles.map((a, i) => (
          <div key={i} className="grid md:grid-cols-[1fr_1fr_140px_auto] gap-2 items-center">
            <Input placeholder="Title" value={a.title} onChange={(e) => {
              const next = [...articles]; next[i] = { ...a, title: e.target.value }; setArticles(next);
            }} />
            <Input placeholder="URL" value={a.url} onChange={(e) => {
              const next = [...articles]; next[i] = { ...a, url: e.target.value }; setArticles(next);
            }} />
            <Input placeholder="Source" value={a.source ?? ""} onChange={(e) => {
              const next = [...articles]; next[i] = { ...a, source: e.target.value }; setArticles(next);
            }} />
            <Button size="icon" variant="ghost" onClick={() => setArticles(articles.filter((_, j) => j !== i))}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <XpDelta delta={delta} />
      <SnippetBlock
        code={snippet}
        path={path}
        hint={`Append this object to the \`projects: [...]\` array in ${path}.`}
      />
    </div>
  );
};

// ---------------- Add Article ----------------
const AddArticleTab = () => {
  const [sectionId, setSectionId] = useState(sections[0]?.id ?? "");
  const [projectTitle, setProjectTitle] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");

  const section = sections.find((s) => s.id === sectionId);
  const projectsInSection = section?.projects ?? [];

  const article: ProjectArticle = {
    title: title || "Untitled",
    url: url || "https://",
    ...(source ? { source } : {}),
  };

  const snippet = formatArticleEntry(article);
  const path = `src/content/sections/${sectionId}.ts`;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Section</Label>
          <Select value={sectionId} onValueChange={(v) => { setSectionId(v); setProjectTitle(""); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {sections.map((s) => (
                <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Attach to project</Label>
          <Select value={projectTitle} onValueChange={setProjectTitle}>
            <SelectTrigger><SelectValue placeholder="Pick a project" /></SelectTrigger>
            <SelectContent>
              {projectsInSection.map((p) => (
                <SelectItem key={p.title} value={p.title}>{p.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Article title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Source (Substack, Medium, ...)</Label>
          <Input value={source} onChange={(e) => setSource(e.target.value)} />
        </div>
      </div>
      <div className="space-y-2">
        <Label>URL</Label>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>

      <XpDelta delta={XP_WEIGHTS.article} />
      <SnippetBlock
        code={snippet}
        path={path}
        hint={
          projectTitle
            ? `Find the project titled "${projectTitle}" and append this entry to its \`articles: [...]\` array (create the array if it doesn't exist).`
            : "Pick a project above. Then append this entry to that project's `articles: [...]` array."
        }
      />
    </div>
  );
};

// ---------------- Add Section ----------------
const AddSectionTab = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState<SectionContent["icon"]>("Brain");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");

  const section: SectionContent = {
    id: id || "new-section",
    title: title || "New Section",
    icon,
    tagline: tagline || "—",
    description: description || "—",
    projects: [],
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>ID (kebab-case, used as filename)</Label>
          <Input value={id} onChange={(e) => setId(e.target.value)} placeholder="ai-engineering" />
        </div>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="AI Engineering" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Icon</Label>
          <Select value={icon} onValueChange={(v) => setIcon(v as SectionContent["icon"])}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {ICON_OPTIONS.map((i) => (
                <SelectItem key={i} value={i}>{i}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Tagline</Label>
          <Input value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="LLM apps & agents" />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <XpDelta delta={XP_WEIGHTS.sectionLaunched} />

      <SnippetBlock
        code={formatSectionFile(section)}
        path={`src/content/sections/${section.id}.ts`}
        hint="Step 1 — create this file."
      />
      <SnippetBlock
        code={formatRegistryAddition(section)}
        path="src/content/sections/index.ts"
        hint="Step 2 — register the new section."
      />
    </div>
  );
};

// ---------------- Log Demo Deployment ----------------
const AddDemoTab = () => {
  const [sectionId, setSectionId] = useState(sections[0]?.id ?? "");
  const [projectTitle, setProjectTitle] = useState("");
  const [demoUrl, setDemoUrl] = useState("");

  const section = sections.find((s) => s.id === sectionId);
  const projectsInSection = section?.projects ?? [];

  const snippet = `demoUrl: ${JSON.stringify(demoUrl || "https://")},`;
  const path = `src/content/sections/${sectionId}.ts`;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Section</Label>
          <Select value={sectionId} onValueChange={(v) => { setSectionId(v); setProjectTitle(""); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {sections.map((s) => (
                <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Project</Label>
          <Select value={projectTitle} onValueChange={setProjectTitle}>
            <SelectTrigger><SelectValue placeholder="Pick a project" /></SelectTrigger>
            <SelectContent>
              {projectsInSection.map((p) => (
                <SelectItem key={p.title} value={p.title}>{p.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Demo URL</Label>
        <Input value={demoUrl} onChange={(e) => setDemoUrl(e.target.value)} placeholder="https://my-project.onrender.com" />
      </div>

      <XpDelta delta={XP_WEIGHTS.demoBonus} />
      <SnippetBlock
        code={snippet}
        path={path}
        hint={
          projectTitle
            ? `Find the project titled "${projectTitle}" in ${path} and add this line inside its object.`
            : "Pick a project above. Then add this line inside that project's object."
        }
      />
    </div>
  );
};

// ---------------- Page ----------------
const AdminStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Admin Studio</p>
          <h1 className="text-3xl md:text-4xl font-bold font-playfair text-foreground">
            Generate content snippets
          </h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            Offline, code-generator mode. Nothing here writes to the live site —
            every form outputs a paste-ready TypeScript snippet for the right
            file. XP and level recompute automatically once you commit and ship.
          </p>
        </header>

        <Tabs defaultValue="project">
          <TabsList className="mb-6">
            <TabsTrigger value="project">Add Project</TabsTrigger>
            <TabsTrigger value="article">Add Article</TabsTrigger>
            <TabsTrigger value="section">Add Section</TabsTrigger>
            <TabsTrigger value="demo">Log Demo</TabsTrigger>
          </TabsList>
          <TabsContent value="project"><AddProjectTab /></TabsContent>
          <TabsContent value="article"><AddArticleTab /></TabsContent>
          <TabsContent value="section"><AddSectionTab /></TabsContent>
          <TabsContent value="demo"><AddDemoTab /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminStudio;
