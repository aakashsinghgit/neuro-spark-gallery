import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Zap, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const MLPlayground = () => {
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-playfair">
            ML Playground
          </h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Browser-based
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Want to explore ML topics? Try these interactive demos or scroll down to see my projects.
        </p>
      </div>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {playgroundApps.slice(0, 10).map((app, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="card-project group h-full">
                {/* App Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${app.color} p-2 rounded-lg animate-glow`}>
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant="secondary" 
                      className={`${getDifficultyColor(app.difficulty)} text-xs mb-2`}
                    >
                      {app.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {app.users}
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {app.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button className="btn-secondary flex-1 group">
                      <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Try It
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default MLPlayground;