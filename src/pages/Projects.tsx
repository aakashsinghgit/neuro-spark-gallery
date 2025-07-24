import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Projects", count: 24 },
    { id: "data-science", label: "Data Science", count: 8 },
    { id: "ml-engineering", label: "ML Engineering", count: 7 },
    { id: "ai-engineering", label: "AI Engineering", count: 6 },
    { id: "fun-apps", label: "Fun Apps", count: 3 }
  ];

  const projects = [
    // Data Science Projects
    {
      title: "Customer Churn Prediction",
      description: "Advanced machine learning model to predict customer churn using ensemble methods and feature engineering techniques.",
      tags: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"],
      category: "data-science" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Financial Market Analysis",
      description: "Comprehensive analysis of market trends using time series forecasting and sentiment analysis from social media data.",
      tags: ["Time Series", "LSTM", "Sentiment Analysis", "Plotly"],
      category: "data-science" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Interactive dashboard for sales forecasting using multiple statistical and ML models with automated reporting.",
      tags: ["Prophet", "Dash", "SQL", "Business Intelligence"],
      category: "data-science" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "A/B Testing Framework",
      description: "Statistical framework for designing and analyzing A/B tests with power analysis and bayesian interpretation.",
      tags: ["Statistics", "Bayesian", "Experimentation", "R"],
      category: "data-science" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    // ML Engineering Projects
    {
      title: "Real-time Recommendation Engine",
      description: "Scalable recommendation system built with MLOps best practices, serving millions of predictions per day.",
      tags: ["MLflow", "Docker", "Kubernetes", "FastAPI"],
      category: "ml-engineering" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Computer Vision Pipeline",
      description: "End-to-end ML pipeline for object detection and classification with automatic model retraining and deployment.",
      tags: ["YOLO", "TensorFlow", "CI/CD", "AWS", "Monitoring"],
      category: "ml-engineering" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fraud Detection System",
      description: "Real-time fraud detection system processing millions of transactions with sub-100ms latency requirements.",
      tags: ["Kafka", "Redis", "Model Serving", "Monitoring"],
      category: "ml-engineering" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    // AI Engineering Projects
    {
      title: "LLM-Powered Code Assistant",
      description: "Intelligent code completion and debugging assistant using fine-tuned language models with RAG implementation.",
      tags: ["LLM", "RAG", "Fine-tuning", "Transformers", "Vector DB"],
      category: "ai-engineering" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Multimodal AI Chatbot",
      description: "Advanced chatbot capable of processing text, images, and voice with state-of-the-art conversational AI.",
      tags: ["GPT-4", "Whisper", "DALL-E", "LangChain", "Streamlit"],
      category: "ai-engineering" as const,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Document Intelligence System",
      description: "AI system for extracting and understanding information from complex documents using computer vision and NLP.",
      tags: ["OCR", "NLP", "Document AI", "Azure Cognitive"],
      category: "ai-engineering" as const,
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of my data science, ML engineering, and AI projects
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-gradient-primary" : "border-border/50"}
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or category filters
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Projects;