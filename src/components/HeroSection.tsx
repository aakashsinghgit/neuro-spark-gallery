import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Data Scientist
            </span>
            <br />
            <span className="text-foreground">& Builder</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights through 
            <span className="text-primary font-semibold"> machine learning</span>, 
            <span className="text-secondary font-semibold"> AI engineering</span>, and 
            <span className="text-accent font-semibold"> innovative solutions</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-hero group">
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-border/50 hover:bg-muted/50 group">
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
            
            <Button variant="ghost" className="hover:bg-muted/50 group">
              <Mail className="mr-2 w-4 h-4" />
              Get In Touch
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">15+</div>
              <div className="text-sm text-muted-foreground">ML Models Deployed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100K+</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">∞</div>
              <div className="text-sm text-muted-foreground">Learning Journey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;