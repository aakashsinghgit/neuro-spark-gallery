import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of MLOps: Trends and Best Practices for 2024",
      excerpt: "Exploring the latest developments in machine learning operations, from automated model deployment to advanced monitoring techniques. Learn how to build production-ready ML systems.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["MLOps", "DevOps", "Machine Learning"],
      featured: true,
      views: "2.3k"
    },
    {
      title: "Building Scalable RAG Systems: A Practical Guide",
      excerpt: "Step-by-step guide to implementing Retrieval-Augmented Generation systems that can handle enterprise-scale workloads. From vector databases to prompt engineering.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["RAG", "LLM", "AI Engineering"],
      featured: false,
      views: "1.8k"
    },
    {
      title: "Data Visualization Best Practices with Python",
      excerpt: "Creating compelling and informative visualizations that tell the story hidden in your data using modern Python libraries like Plotly, Seaborn, and Matplotlib.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Python", "Visualization", "Data Science"],
      featured: false,
      views: "3.1k"
    },
    {
      title: "Fine-tuning Large Language Models: Lessons Learned",
      excerpt: "My experience fine-tuning LLMs for specific domain tasks, including data preparation, training strategies, and evaluation metrics that actually matter.",
      date: "2023-12-28",
      readTime: "10 min read",
      tags: ["LLM", "Fine-tuning", "Deep Learning"],
      featured: false,
      views: "1.5k"
    },
    {
      title: "From Jupyter to Production: ML Model Deployment",
      excerpt: "A comprehensive guide to taking your machine learning models from notebook prototypes to production systems that scale and perform reliably.",
      date: "2023-12-20",
      readTime: "14 min read",
      tags: ["ML Engineering", "Deployment", "Production"],
      featured: false,
      views: "2.7k"
    },
    {
      title: "Understanding Transformer Architecture: Beyond the Hype",
      excerpt: "Deep dive into transformer architectures, attention mechanisms, and why they've revolutionized natural language processing and beyond.",
      date: "2023-12-12",
      readTime: "11 min read",
      tags: ["Transformers", "NLP", "Deep Learning"],
      featured: false,
      views: "4.2k"
    },
    {
      title: "Feature Engineering for Time Series Data",
      excerpt: "Advanced techniques for extracting meaningful features from time series data to improve model performance in forecasting and anomaly detection tasks.",
      date: "2023-12-05",
      readTime: "9 min read",
      tags: ["Time Series", "Feature Engineering", "Data Science"],
      featured: false,
      views: "1.9k"
    },
    {
      title: "The Art of Hyperparameter Optimization",
      excerpt: "Systematic approaches to hyperparameter tuning using Bayesian optimization, random search, and automated ML techniques to squeeze out model performance.",
      date: "2023-11-28",
      readTime: "7 min read",
      tags: ["Hyperparameter Tuning", "AutoML", "Optimization"],
      featured: false,
      views: "2.1k"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Tech Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Insights, tutorials, and thoughts on data science, machine learning, and AI engineering
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button className="btn-secondary">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" className="border-border/50">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Substack
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
            <div className="card-project lg:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Badge className="bg-gradient-accent text-accent-foreground">Featured Post</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                  <Clock className="w-4 h-4 ml-4 mr-1" />
                  {featuredPost.readTime}
                  <span className="ml-4">{featuredPost.views} views</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight font-playfair">
                {featuredPost.title}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-border/50">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button className="btn-primary group">
                Read Full Article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-playfair">All Posts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <article 
                key={post.title} 
                className="card-project group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-border/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{post.views} views</span>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
          <div className="card-project text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest posts delivered straight to your inbox. No spam, just quality content about data science and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-card border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-secondary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;