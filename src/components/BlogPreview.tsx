import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "The Future of MLOps: Trends and Best Practices for 2024",
      excerpt: "Exploring the latest developments in machine learning operations, from automated model deployment to advanced monitoring techniques.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["MLOps", "DevOps", "Machine Learning"],
      featured: true
    },
    {
      title: "Building Scalable RAG Systems: A Practical Guide",
      excerpt: "Step-by-step guide to implementing Retrieval-Augmented Generation systems that can handle enterprise-scale workloads.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["RAG", "LLM", "AI Engineering"],
      featured: false
    },
    {
      title: "Data Visualization Best Practices with Python",
      excerpt: "Creating compelling and informative visualizations that tell the story hidden in your data using modern Python libraries.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Python", "Visualization", "Data Science"],
      featured: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Thoughts on data science, AI, and technology
          </p>
        </div>
        
        <Link to="/blog">
          <Button className="btn-secondary group">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured Post */}
        <div className="lg:col-span-2">
          <article className="card-project h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-gradient-accent text-accent-foreground">Featured</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                  <Clock className="w-4 h-4 ml-4 mr-1" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                {blogPosts[0].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPosts[0].tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-border/50">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button className="btn-primary group">
                Read Article
                <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </article>
        </div>

        {/* Recent Posts */}
        <div className="space-y-6">
          {blogPosts.slice(1).map((post, index) => (
            <article key={post.title} className="card-project">
              <div className="space-y-3">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="w-3 h-3 ml-3 mr-1" />
                  {post.readTime}
                </div>
                
                <h4 className="font-bold text-foreground leading-tight hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h4>
                
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;