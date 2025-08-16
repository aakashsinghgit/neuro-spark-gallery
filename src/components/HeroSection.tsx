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
      
          {/* Enhanced Circuit Lines - Oriented around content */}
      <div className="absolute top-10 left-0 w-full h-full opacity-25">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" style={{ filter: 'drop-shadow(0 0 4px currentColor)' }}>
          {/* Main circuit paths - positioned around profile and content areas */}
          <path d="M0 80 L180 80 L230 130 L380 130 L430 80 L800 80" stroke="currentColor" strokeWidth="1.5" className="text-primary/50"/>
          <path d="M50 0 L50 180 L100 230 L100 380 L50 430 L50 600" stroke="currentColor" strokeWidth="1.5" className="text-accent/50"/>
          <path d="M750 0 L750 130 L700 180 L700 330 L750 380 L750 600" stroke="currentColor" strokeWidth="1.5" className="text-primary/50"/>
          <path d="M0 420 L130 420 L180 370 L330 370 L380 420 L800 420" stroke="currentColor" strokeWidth="1.5" className="text-accent/50"/>
          
          {/* Secondary circuit network - around stats area */}
          <path d="M200 280 L200 380 L250 430 L250 500 L200 550" stroke="currentColor" strokeWidth="1" className="text-secondary/30"/>
          <path d="M600 280 L550 280 L500 330 L500 380 L550 430 L600 430" stroke="currentColor" strokeWidth="1" className="text-accent/30"/>
          
          {/* Circuit nodes - positioned to complement content */}
          <circle cx="230" cy="130" r="3" fill="currentColor" className="text-primary animate-pulse"/>
          <circle cx="100" cy="230" r="3" fill="currentColor" className="text-accent animate-pulse"/>
          <circle cx="700" cy="180" r="3" fill="currentColor" className="text-primary animate-pulse"/>
          <circle cx="380" cy="420" r="3" fill="currentColor" className="text-accent animate-pulse"/>
          <circle cx="200" cy="380" r="2" fill="currentColor" className="text-secondary"/>
          <circle cx="550" cy="330" r="2" fill="currentColor" className="text-accent"/>
          
          {/* Micro circuits - strategically placed */}
          <rect x="220" y="120" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-primary/45"/>
          <rect x="690" y="170" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-primary/45"/>
          <rect x="90" y="220" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-accent/45"/>
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
              <h1 className="text-iron-man mb-4 mt-8 tracking-wide leading-tight">
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

          {/* Stats Section */}
          <div className="card-project mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Key Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stats.projectsCompleted}</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">{stats.mlModelsDeployed}</div>
                <div className="text-xs md:text-sm text-muted-foreground">ML Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{stats.linesOfCode}</div>
                <div className="text-xs md:text-sm text-muted-foreground">Lines of Code</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stats.yearsExperience}+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;