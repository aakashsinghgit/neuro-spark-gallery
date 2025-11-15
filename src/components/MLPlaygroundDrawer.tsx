import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Zap, Users, FlaskConical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const MLPlaygroundDrawer = () => {
  const playgroundApps = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive visualization of how neural networks learn and make predictions in real-time.",
      tech: ["TensorFlow.js", "D3.js", "React"],
      type: "Interactive Demo",
      difficulty: "Beginner",
      users: "2.3k",
      color: "bg-gradient-primary"
    },
    {
      title: "Titanic Survival Predictor",
      description: "Fun game where you predict passenger survival and see how your intuition compares to ML models.",
      tech: ["Scikit-learn", "Streamlit", "Pandas"],
      type: "Game",
      difficulty: "Beginner", 
      users: "5.1k",
      color: "bg-gradient-secondary"
    },
    {
      title: "Clustering Playground",
      description: "Experiment with different clustering algorithms and see how they group your data in real-time.",
      tech: ["sklearn", "Plotly", "NumPy"],
      type: "Tool",
      difficulty: "Intermediate",
      users: "1.8k",
      color: "bg-gradient-accent"
    },
    {
      title: "LLM Text Transformer",
      description: "Transform text styles using various language models - make it formal, casual, or creative!",
      tech: ["Transformers", "Gradio", "PyTorch"],
      type: "AI Tool",
      difficulty: "Advanced",
      users: "3.7k",
      color: "bg-gradient-primary"
    },
    {
      title: "Computer Vision Playground",
      description: "Upload images and experiment with object detection, style transfer, and image classification models.",
      tech: ["OpenCV", "YOLO", "Flask"],
      type: "Demo",
      difficulty: "Intermediate",
      users: "4.2k",
      color: "bg-gradient-secondary"
    },
    {
      title: "Time Series Forecaster",
      description: "Interactive forecasting tool where you can upload data and compare different prediction models.",
      tech: ["Prophet", "ARIMA", "Plotly"],
      type: "Tool",
      difficulty: "Advanced",
      users: "1.5k",
      color: "bg-gradient-accent"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FlaskConical className="w-4 h-4" />
          <span className="hidden sm:inline">ML Playground</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3">
            <span className="text-2xl font-playfair">ML Playground</span>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Interactive Demos
            </Badge>
          </SheetTitle>
          <SheetDescription>
            Explore ML concepts through interactive demos and tools
          </SheetDescription>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-120px)] mt-6 pr-4">
          <div className="space-y-4">
            {playgroundApps.map((app, index) => (
              <div key={index} className="card-project group">
                {/* App Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${app.color} p-2 rounded-lg`}>
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs mb-1">
                      {app.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {app.users} users
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <h3 className="font-bold text-foreground mb-2 font-playfair">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {app.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-muted/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getDifficultyColor(app.difficulty)}`}
                  >
                    {app.difficulty}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="gap-2 group-hover:gap-3 transition-all"
                  >
                    Try Demo
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MLPlaygroundDrawer;
