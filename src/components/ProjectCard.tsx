import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: "data-science" | "ml-engineering" | "ai-engineering";
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, description, tags, category, demoUrl, githubUrl, imageUrl }: ProjectCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "data-science":
        return "bg-gradient-primary";
      case "ml-engineering":
        return "bg-gradient-secondary";
      case "ai-engineering":
        return "bg-gradient-accent";
      default:
        return "bg-gradient-primary";
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "data-science":
        return "Data Science";
      case "ml-engineering":
        return "ML Engineering";
      case "ai-engineering":
        return "AI Engineering";
      default:
        return "Project";
    }
  };

  return (
    <div className="card-project group">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className={`w-full h-48 ${getCategoryColor(category)} opacity-20 flex items-center justify-center`}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-6xl font-bold text-foreground/30">
              {title.charAt(0)}
            </div>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm">
            {getCategoryLabel(category)}
          </Badge>
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-border/50">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {demoUrl && (
            <Button size="sm" className="btn-secondary flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="border-border/50">
              <Github className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;