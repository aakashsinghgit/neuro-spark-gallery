import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Linkedin, Trophy, Cpu, Brain, Zap, Database, Play, BookOpen, ArrowRight } from "lucide-react";
import { heroContent } from "@/content/hero";
import { goals } from "@/content/goals";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import HunterBadge from "@/components/HunterBadge";

const iconMap: Record<string, any> = { Cpu, Brain, Zap, Database, Play, BookOpen };

const HeroSection = () => {
  const { profile, cta, stats, story } = heroContent;

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Top Section: Profile + Story Side by Side */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-full md:w-56 h-64 rounded-lg border-2 border-border overflow-hidden bg-muted flex items-center justify-center">
                <span className="text-7xl font-bold text-foreground">AS</span>
              </div>
            </div>

            {/* Profile Info + My Story */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-2">
                  {profile.name}
                </h1>
                <p className="text-base text-muted-foreground">{profile.bio}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {story.text}
                </p>
                <Button variant="link" asChild className="px-0 h-auto text-sm">
                  <Link to={story.readMoreLink}>
                    read my story <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
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
            </div>
          </div>

          {/* Key Achievements & Current Goals */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-8 bg-card shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6 font-playfair">Engineer Leveling</h3>
              <div className="flex items-center gap-8">
                <HunterBadge size={140} />
                <div className="grid grid-cols-1 gap-4 flex-1">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stats.projectsCompleted}</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Projects shipped</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stats.mlModelsDeployed}</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Models deployed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stats.yearsExperience}+</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Years experience</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Tap the badge for XP breakdown, tier map, and contribution history.
              </p>
            </div>

            <div className="border border-border rounded-lg p-8 bg-card shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6 font-playfair">Current Goals</h3>
              <div className="space-y-4">
                {goals.map((goal) => {
                  const Icon = iconMap[goal.icon];
                  const progress = goal.target > 0 ? (goal.current / goal.target) * 100 : 0;
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
