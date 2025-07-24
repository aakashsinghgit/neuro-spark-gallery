import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Zap } from "lucide-react";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-accent p-3 rounded-lg mr-4 animate-glow">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              ML Playground
            </span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Interactive machine learning demos and tools. Play, learn, and experiment with AI concepts!
        </p>
        <Badge className="bg-gradient-primary text-white px-4 py-2">
          🎮 All apps run directly in your browser
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playgroundApps.map((app, index) => (
          <div 
            key={app.title} 
            className="card-project group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* App Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`${app.color} p-2 rounded-lg animate-glow`}>
                <Play className="w-5 h-5 text-white" />
              </div>
              <div className="text-right">
                <Badge variant="outline" className="mb-2 border-border/50">
                  {app.type}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {app.users} users
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

              {/* Difficulty Badge */}
              <Badge className={`${getDifficultyColor(app.difficulty)} border`}>
                {app.difficulty}
              </Badge>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1">
                {app.tech.map((tech, techIndex) => (
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
                  Try It Out
                </Button>
                <Button variant="outline" size="sm" className="border-border/50">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="card-project max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to Build Your Own?
          </h3>
          <p className="text-muted-foreground mb-6">
            All playground apps are open source! Check out the code, learn how they work, 
            and create your own interactive ML experiences.
          </p>
          <Button className="btn-accent">
            View Source Code
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MLPlayground;