import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { heroConfig } from "@/config/hero";

const HeroSection = () => {
  const { profile, cta, stats, journey } = heroConfig;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Iron Man Style Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="hexagon-pattern"></div>
      </div>
      
      {/* Enhanced Circuit Lines */}
      <div className="absolute top-10 left-0 w-full h-full opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          {/* Main circuit paths */}
          <path d="M0 100 L200 100 L250 150 L400 150 L450 100 L600 100 L800 100" stroke="currentColor" strokeWidth="1" className="text-primary/30"/>
          <path d="M100 0 L100 200 L150 250 L150 400 L100 450 L100 600" stroke="currentColor" strokeWidth="1" className="text-accent/30"/>
          <path d="M600 0 L600 150 L550 200 L550 350 L600 400 L600 600" stroke="currentColor" strokeWidth="1" className="text-primary/30"/>
          <path d="M0 300 L150 300 L200 250 L350 250 L400 300 L600 300 L800 300" stroke="currentColor" strokeWidth="1" className="text-accent/30"/>
          
          {/* Secondary circuit network */}
          <path d="M300 0 L300 100 L350 150 L350 200 L300 250 L300 350" stroke="currentColor" strokeWidth="0.5" className="text-secondary/20"/>
          <path d="M500 50 L450 50 L400 100 L400 150 L450 200 L500 200" stroke="currentColor" strokeWidth="0.5" className="text-accent/20"/>
          
          {/* Circuit nodes */}
          <circle cx="250" cy="150" r="3" fill="currentColor" className="text-primary"/>
          <circle cx="150" cy="250" r="3" fill="currentColor" className="text-accent"/>
          <circle cx="550" cy="200" r="3" fill="currentColor" className="text-primary"/>
          <circle cx="400" cy="300" r="3" fill="currentColor" className="text-accent"/>
          <circle cx="300" cy="100" r="2" fill="currentColor" className="text-secondary"/>
          <circle cx="450" cy="200" r="2" fill="currentColor" className="text-accent"/>
          
          {/* Micro circuits */}
          <rect x="240" y="140" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
          <rect x="540" y="190" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/40"/>
          <rect x="140" y="240" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent/40"/>
        </svg>
      </div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 max-w-6xl mx-auto pl-4 md:pl-8">{/* Pulled left with more space */}
        <div className="animate-slide-up">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Profile Image - 30% larger */}
            <div className="flex-shrink-0">
              <div className="w-42 h-42 md:w-52 md:h-52 rounded-full bg-gradient-accent p-1 animate-glow-blue">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-5xl font-bold text-foreground">
                  AS
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-iron-man mb-4 mt-6 tracking-wide leading-tight">
                {profile.name}
              </h1>
              
              <p className="text-lg md:text-xl text-accent font-semibold mb-2 tech-glow-text">
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