import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, Target, TrendingUp, Award, Cpu, Brain, Zap, Database, Play, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { heroConfig } from "@/config/hero";
import Navigation from "@/components/Navigation";

const iconMap = {
  Cpu,
  Brain,
  Zap,
  Database,
  Play,
  BookOpen
};

const MyStory = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "planned":
        return <Target className="w-5 h-5 text-muted-foreground" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        {/* Story Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-playfair font-bold mb-4">My Story</h1>
          <div className="h-1 w-20 bg-primary mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {heroConfig.story.text}
          </p>
        </section>

        {/* Career Highlights */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-playfair font-bold">Career Highlights</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {heroConfig.stats.projectsCompleted}
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {heroConfig.stats.mlModelsDeployed}
                </div>
                <div className="text-sm text-muted-foreground">ML Models Deployed</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {heroConfig.stats.linesOfCode}
                </div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {heroConfig.stats.yearsExperience}
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-playfair font-bold">My Journey</h2>
          </div>

          <div className="space-y-6">
            {heroConfig.journey.milestones.map((milestone, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{milestone.phase}</h3>
                        <Badge variant={
                          milestone.status === "completed" ? "default" :
                          milestone.status === "in-progress" ? "secondary" :
                          "outline"
                        }>
                          {milestone.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Current Goals */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-playfair font-bold">Current Goals</h2>
          </div>

          <div className="space-y-6">
            {heroConfig.goals.map((goal, index) => {
              const Icon = iconMap[goal.icon as keyof typeof iconMap];
              const progress = (goal.current / goal.target) * 100;
              
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold">{goal.label}</h3>
                          <span className="text-sm text-muted-foreground">
                            {goal.current} / {goal.target}
                          </span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 border-t">
          <h3 className="text-2xl font-playfair font-bold mb-4">Let's Connect</h3>
          <p className="text-muted-foreground mb-6">
            Interested in collaboration or have a project in mind?
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <a href={heroConfig.cta.primary.href} target="_blank" rel="noopener noreferrer">
                View LinkedIn Profile
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyStory;
