import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Star, 
  GitFork, 
  ExternalLink, 
  Calendar,
  Code,
  Users,
  Activity
} from "lucide-react";

const OpenSource = () => {
  const githubStats = {
    totalCommits: "500+",
    publicRepos: 25,
    totalStars: 180,
    followers: 95
  };

  const featuredRepos = [
    {
      name: "ml-pipeline-framework",
      description: "A production-ready MLOps framework for building, deploying, and monitoring machine learning pipelines at scale.",
      language: "Python",
      stars: 45,
      forks: 12,
      issues: 3,
      lastCommit: "2 days ago",
      topics: ["mlops", "machine-learning", "python", "docker", "kubernetes"],
      featured: true
    },
    {
      name: "llm-evaluation-toolkit",
      description: "Comprehensive toolkit for evaluating and benchmarking large language models across various tasks and domains.",
      language: "Python",
      stars: 38,
      forks: 8,
      issues: 2,
      lastCommit: "1 week ago",
      topics: ["llm", "evaluation", "benchmarking", "nlp", "ai"],
      featured: true
    },
    {
      name: "data-viz-components",
      description: "Reusable React components for creating beautiful, interactive data visualizations with TypeScript support.",
      language: "TypeScript",
      stars: 29,
      forks: 6,
      issues: 1,
      lastCommit: "3 days ago",
      topics: ["react", "data-visualization", "typescript", "d3", "charts"],
      featured: false
    }
  ];

  const contributions = [
    {
      repo: "scikit-learn/scikit-learn",
      type: "Feature",
      description: "Added support for sparse matrices in ensemble methods",
      status: "Merged",
      date: "2024-01-10"
    },
    {
      repo: "huggingface/transformers",
      type: "Bug Fix",
      description: "Fixed memory leak in tokenizer batch processing",
      status: "Merged", 
      date: "2023-12-15"
    },
    {
      repo: "streamlit/streamlit",
      type: "Documentation",
      description: "Improved examples for custom component development",
      status: "Merged",
      date: "2023-11-20"
    },
    {
      repo: "mlflow/mlflow",
      type: "Feature",
      description: "Enhanced model registry with custom metadata support",
      status: "Under Review",
      date: "2024-01-05"
    }
  ];

  const getLanguageColor = (language: string) => {
    switch (language.toLowerCase()) {
      case "python":
        return "bg-yellow-500";
      case "typescript":
        return "bg-blue-500";
      case "javascript":
        return "bg-orange-500";
      case "rust":
        return "bg-red-500";
      case "go":
        return "bg-cyan-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "merged":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "under review":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "closed":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Open Source
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Contributing to the open source community through code, documentation, and collaboration
            </p>
            <Button className="btn-secondary">
              <Github className="w-4 h-4 mr-2" />
              View My GitHub Profile
            </Button>
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-project text-center">
              <Code className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">
                {githubStats.totalCommits}
              </div>
              <div className="text-sm text-muted-foreground">Total Commits</div>
            </div>
            
            <div className="card-project text-center">
              <Github className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">
                {githubStats.publicRepos}
              </div>
              <div className="text-sm text-muted-foreground">Public Repos</div>
            </div>
            
            <div className="card-project text-center">
              <Star className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">
                {githubStats.totalStars}
              </div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </div>
            
            <div className="card-project text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">
                {githubStats.followers}
              </div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
          </div>
        </section>

        {/* Featured Repositories */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-playfair">Featured Repositories</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredRepos.map((repo, index) => (
              <div 
                key={repo.name}
                className="card-project"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Repo Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Github className="w-5 h-5 text-foreground" />
                      <h3 className="text-lg font-bold text-foreground">{repo.name}</h3>
                      {repo.featured && (
                        <Badge className="bg-gradient-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {repo.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1">
                    {repo.topics.map((topic, topicIndex) => (
                      <Badge 
                        key={topicIndex} 
                        variant="outline" 
                        className="text-xs border-border/50"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} mr-1`}></div>
                        {repo.language}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        {repo.forks}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Updated {repo.lastCommit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contributions */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-playfair">Recent Contributions</h2>
          
          <div className="space-y-4">
            {contributions.map((contribution, index) => (
              <div 
                key={`${contribution.repo}-${index}`}
                className="card-project"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-foreground">{contribution.repo}</h4>
                      <Badge variant="outline" className="border-border/50">
                        {contribution.type}
                      </Badge>
                      <Badge className={`${getStatusColor(contribution.status)} border`}>
                        {contribution.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {contribution.description}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(contribution.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
          <div className="card-project text-center">
            <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Collaborate
            </h3>
            <p className="text-muted-foreground mb-8">
              Interested in collaborating on open source projects? I'm always looking for interesting problems to solve and great people to work with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                <Github className="w-4 h-4 mr-2" />
                Follow on GitHub
              </Button>
              <Button variant="outline" className="border-border/50">
                Get In Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OpenSource;