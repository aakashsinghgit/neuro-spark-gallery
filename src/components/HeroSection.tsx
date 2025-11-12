import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Linkedin, Trophy } from "lucide-react";
import { heroConfig } from "@/config/hero";

const HeroSection = () => {
  const { profile, cta, stats, journey } = heroConfig;

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-border overflow-hidden bg-muted flex items-center justify-center">
                <span className="text-5xl font-bold text-foreground">AS</span>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                {profile.name}
              </h1>
              
              <p className="text-lg md:text-xl text-accent font-medium mb-3">
                {profile.title}
              </p>
              
              <p className="text-muted-foreground mb-4 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center mb-12">
            <Button asChild>
              <a href={cta.primary.href} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 w-4 h-4" />
                {cta.primary.text}
              </a>
            </Button>
            
            <Button variant="outline" asChild>
              <a href={cta.secondary.href} target="_blank" rel="noopener noreferrer">
                <Trophy className="mr-2 w-4 h-4" />
                {cta.secondary.text}
              </a>
            </Button>
            
            <Button variant="ghost" asChild>
              <a href={cta.tertiary.href} download>
                <Download className="mr-2 w-4 h-4" />
                {cta.tertiary.text}
              </a>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="border border-border rounded-lg p-8 bg-card shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">Key Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stats.projectsCompleted}</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stats.mlModelsDeployed}</div>
                <div className="text-sm text-muted-foreground">ML Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stats.linesOfCode}</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stats.yearsExperience}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;