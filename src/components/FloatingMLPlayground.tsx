import { useState, useEffect } from "react";
import { FlaskConical, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const FloatingMLPlayground = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Find the ML Engineering section (FeaturedProjects component)
      const mlSection = document.querySelector('[id*="projects"], [class*="FeaturedProjects"]');
      if (mlSection) {
        const rect = mlSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide when scrolled past the ML Engineering section
        if (rect.top < -rect.height) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  if (!isVisible) return null;

  return (
    <>
      {/* Floating trigger button */}
      <div 
        className="fixed right-0 top-1/3 z-40 animate-fade-in"
        style={{ transform: 'translateY(-50%)' }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-l-lg rounded-r-none shadow-lg hover:shadow-xl transition-all duration-300 h-32 px-3 bg-gradient-primary text-primary-foreground border-l-4 border-primary/50 hover:px-4 group"
          style={{ writingMode: 'vertical-rl' }}
        >
          <FlaskConical className="w-5 h-5 mb-2 group-hover:animate-pulse" />
          <span className="text-sm font-bold tracking-wider">ML PLAYGROUND</span>
          <span className="text-xs mt-2 opacity-80">Try Demos →</span>
        </Button>
      </div>

      {/* Full screen drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full max-w-full sm:max-w-full p-0">
          <div className="h-full flex flex-col">
            <SheetHeader className="px-6 py-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-primary" />
                  <SheetTitle className="text-2xl font-playfair">ML Playground</SheetTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Interactive Demos
                  </Badge>
                </div>
              </div>
              <SheetDescription>
                Explore ML concepts through interactive demos and tools
              </SheetDescription>
            </SheetHeader>
            
            <ScrollArea className="flex-1 px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {playgroundApps.map((app, index) => (
                  <div key={index} className="card-project group h-full">
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
                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
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
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FloatingMLPlayground;
