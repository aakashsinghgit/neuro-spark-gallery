import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Linkedin, Trophy, Cpu, Brain, Zap, Database, Play, BookOpen, ArrowRight } from "lucide-react";
import { heroConfig } from "@/config/hero";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { profile, cta, stats, story, goals } = heroConfig;

  const iconMap: Record<string, any> = {
    Cpu,
    Brain,
    Zap,
    Database,
    Play,
    BookOpen
  };

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Section - Compact Layout */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Profile Image - Rectangular */}
            <div className="flex-shrink-0">
              <div className="w-full md:w-48 h-56 rounded-lg border-2 border-border overflow-hidden bg-muted flex items-center justify-center">
                <span className="text-6xl font-bold text-foreground">AS</span>
              </div>
            </div>
            
            {/* Profile Info - Compact */}
            <div className="flex-1 space-y-4">
              {/* Line 1: Name, Title, and Headline Tag */}
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground font-playfair">
                  {profile.name}
                </h1>
                <span className="text-base md:text-lg text-muted-foreground">•</span>
                <p className="text-base md:text-lg text-accent font-medium">
                  {profile.title}
                </p>
                <span className="text-base md:text-lg text-muted-foreground">•</span>
                <p className="text-base md:text-lg text-muted-foreground">
                  {profile.bio}
                </p>
              </div>
              
              {/* Line 2: Location and Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </div>
                <span className="text-muted-foreground">•</span>
                <Button size="sm" asChild>
                  <a href={cta.primary.href} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 w-4 h-4" />
                    {cta.primary.text}
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={cta.secondary.href} target="_blank" rel="noopener noreferrer">
                    <Trophy className="mr-2 w-4 h-4" />
                    {cta.secondary.text}
                  </a>
                </Button>
                <Button size="sm" variant="ghost" asChild>
                  <a href={cta.tertiary.href} download>
                    <Download className="mr-2 w-4 h-4" />
                    {cta.tertiary.text}
                  </a>
                </Button>
              </div>

              {/* My Story - 3 Lines Only */}
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-playfair">{story.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-2">
                  {story.text}
                </p>
                <Button variant="link" asChild className="px-0 h-auto text-sm">
                  <Link to={story.readMoreLink}>
                    Read More <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Key Achievements & Current Goals Combined */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stats Section */}
            <div className="border border-border rounded-lg p-8 bg-card shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6 font-playfair">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
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

            {/* Current Goals */}
            <div className="border border-border rounded-lg p-8 bg-card shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6 font-playfair">Current Goals</h3>
              <div className="space-y-4">
                {goals.slice(0, 4).map((goal) => {
                  const Icon = iconMap[goal.icon];
                  const progress = (goal.current / goal.target) * 100;
                  
                  return (
                    <div key={goal.label}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium text-foreground">{goal.label}</span>
                        </div>
                        <span className="text-sm font-bold text-accent">
                          {goal.current}/{goal.target}
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;