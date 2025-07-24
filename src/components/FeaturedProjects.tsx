import { Brain, Cpu, Zap } from "lucide-react";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const projects = {
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
      }
    ],
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
      }
    ]
  };

  const sections = [
    {
      title: "Data Science Core",
      icon: Brain,
      description: "Statistical analysis, predictive modeling, and data-driven insights",
      projects: projects["data-science"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "ML Engineering", 
      icon: Cpu,
      description: "Production ML systems, MLOps, and scalable model deployment",
      projects: projects["ml-engineering"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "AI Engineering",
      icon: Zap,
      description: "LLMs, multimodal AI, and cutting-edge artificial intelligence",
      projects: projects["ai-engineering"],
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore my portfolio across three core areas of expertise
        </p>
      </div>

      {sections.map((section, sectionIndex) => {
        const Icon = section.icon;
        return (
          <div key={section.title} className="mb-20 last:mb-0">
            {/* Section Header */}
            <div className="flex items-center justify-center mb-8">
              <div className={`${section.gradient} p-3 rounded-lg mr-4 animate-glow`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {section.title}
                </h3>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {section.projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${sectionIndex * 200 + index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedProjects;