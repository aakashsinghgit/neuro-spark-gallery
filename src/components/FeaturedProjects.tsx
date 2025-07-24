import { Brain, Cpu, Zap, Database, Plus, ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturedProjects = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (category: string) => {
    setExpandedSections(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const projects = {
    "ml-engineering": [
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
        title: "MLOps Infrastructure",
        description: "Complete MLOps platform with model versioning, A/B testing, and automated deployment pipelines.",
        tags: ["MLflow", "Kubeflow", "Prometheus", "Grafana"],
        category: "ml-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Model Monitoring System",
        description: "Real-time monitoring and alerting system for ML models in production with drift detection.",
        tags: ["Evidently", "Airflow", "PostgreSQL", "Slack"],
        category: "ml-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Feature Store Platform",
        description: "Centralized feature store for ML teams with real-time and batch feature serving capabilities.",
        tags: ["Feast", "Redis", "Spark", "Kafka"],
        category: "ml-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "AutoML Pipeline",
        description: "Automated machine learning pipeline with hyperparameter tuning and model selection.",
        tags: ["AutoML", "Optuna", "Ray", "H2O"],
        category: "ml-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
    "ai-engineering": [
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
        title: "AI Content Generator",
        description: "Multi-modal content generation system for text, images, and videos using latest AI models.",
        tags: ["Stable Diffusion", "GPT-4", "Runway", "OpenAI"],
        category: "ai-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Intelligent Document Processing",
        description: "AI-powered document analysis and extraction system with OCR and NLP capabilities.",
        tags: ["Tesseract", "spaCy", "BERT", "OpenCV"],
        category: "ai-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "AI-Powered Analytics Platform",
        description: "Conversational analytics platform that allows users to query data using natural language.",
        tags: ["Text2SQL", "LangChain", "Streamlit", "PandasAI"],
        category: "ai-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Voice AI Assistant",
        description: "Voice-enabled AI assistant with speech recognition, natural language understanding, and synthesis.",
        tags: ["Whisper", "GPT-4", "Eleven Labs", "WebRTC"],
        category: "ai-engineering" as const,
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
    "data-science": [
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
        title: "Healthcare Analytics Dashboard",
        description: "Interactive dashboard for healthcare data analysis with predictive modeling for patient outcomes.",
        tags: ["Dash", "Plotly", "Scikit-learn", "Pandas"],
        category: "data-science" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Supply Chain Optimization",
        description: "Data-driven supply chain optimization using predictive analytics and operations research.",
        tags: ["Operations Research", "Optimization", "Forecasting", "Python"],
        category: "data-science" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Social Media Sentiment Analysis",
        description: "Real-time sentiment analysis of social media data with trend detection and visualization.",
        tags: ["NLP", "Twitter API", "VADER", "Visualization"],
        category: "data-science" as const,
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Fraud Detection System",
        description: "Machine learning system for detecting fraudulent transactions with high accuracy and low false positives.",
        tags: ["Anomaly Detection", "XGBoost", "Imbalanced Data", "Python"],
        category: "data-science" as const,
        demoUrl: "#",
        githubUrl: "#"
      }
    ]
  };

  const sections = [
    {
      title: "ML Engineering",
      icon: Cpu,
      description: "Production ML systems, MLOps, and scalable model deployment",
      projects: projects["ml-engineering"],
      gradient: "bg-gradient-secondary",
      category: "ml-engineering"
    },
    {
      title: "AI Engineering",
      icon: Zap,
      description: "LLMs, multimodal AI, and cutting-edge artificial intelligence",
      projects: projects["ai-engineering"],
      gradient: "bg-gradient-accent",
      category: "ai-engineering"
    },
    {
      title: "Data Science Core",
      icon: Database,
      description: "Statistical analysis, predictive modeling, and data-driven insights",
      projects: projects["data-science"],
      gradient: "bg-gradient-primary",
      category: "data-science"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-20">
        {sections.map((section, sectionIndex) => {
          const isExpanded = expandedSections.includes(section.category);
          const visibleProjects = isExpanded ? section.projects.slice(0, 6) : section.projects.slice(0, 2);
          const Icon = section.icon;
          
          return (
            <div key={sectionIndex} className="relative">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {section.title}
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {section.description}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {visibleProjects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="animate-slide-up"
                    style={{ animationDelay: `${projectIndex * 0.1}s` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>

              {/* Expand/View All Buttons */}
              <div className="flex justify-center gap-4">
                {section.projects.length > 2 && (
                  <Button
                    variant="outline"
                    onClick={() => toggleSection(section.category)}
                    className="group"
                  >
                    <Plus className={`w-4 h-4 mr-2 transition-transform ${isExpanded ? 'rotate-45' : ''}`} />
                    {isExpanded ? 'Show Less' : `Show ${Math.min(section.projects.length - 2, 4)} More`}
                  </Button>
                )}
                <Button asChild variant="ghost" className="group">
                  <Link to="/projects">
                    View All {section.title} Projects
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;