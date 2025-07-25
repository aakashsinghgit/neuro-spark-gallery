import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { heroConfig } from "@/config/hero";

const HeroSection = () => {
  const { profile, cta, stats, journey } = heroConfig;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-primary p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-foreground">
                  AS
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary font-semibold mb-2">
                {profile.title}
              </p>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {profile.bio}
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
            <Button className="btn-hero group" asChild>
              <a href={cta.primary.href}>
                {cta.primary.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="outline" className="border-border/50 hover:bg-muted/50 group" asChild>
              <a href={cta.secondary.href} download>
                <Download className="mr-2 w-4 h-4" />
                {cta.secondary.text}
              </a>
            </Button>
            
            <Button variant="ghost" className="hover:bg-muted/50 group" asChild>
              <a href={cta.tertiary.href}>
                <Mail className="mr-2 w-4 h-4" />
                {cta.tertiary.text}
              </a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stats.projectsCompleted}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">{stats.mlModelsDeployed}</div>
              <div className="text-xs md:text-sm text-muted-foreground">ML Models Deployed</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{stats.linesOfCode}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Lines of Code</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stats.yearsExperience}+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>

          {/* Learning Journey */}
          <div className="card-project">
            <h3 className="text-xl font-bold text-foreground mb-6">{journey.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {journey.milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className={`w-3 h-3 rounded-full mx-auto mb-3 ${
                    milestone.status === 'completed' ? 'bg-gradient-primary' :
                    milestone.status === 'in-progress' ? 'bg-gradient-secondary' :
                    'bg-muted'
                  }`}></div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">{milestone.phase}</h4>
                  <p className="text-xs text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;