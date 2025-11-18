import { useState } from "react";
import { FlaskConical, Sparkles } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingMLPlayground = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Clickable Banner */}
      <div 
        onClick={() => setIsOpen(true)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 cursor-pointer group"
      >
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-primary p-3 rounded-lg">
                <FlaskConical className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair flex items-center gap-2">
                  ML Playground
                  <Sparkles className="w-4 h-4 text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore interactive ML demos and experiments
                </p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            >
              Try Demos
              <Play className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:max-w-2xl p-0">
          <SheetHeader className="p-6">
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
          
          <ScrollArea className="h-[calc(100vh-120px)] px-6">
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
    </>
  );
};

export default FloatingMLPlayground;
