import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Code, BookOpen } from "lucide-react";

const PortfolioProgress = () => {
  const stats = [
    {
      label: "Projects Completed",
      current: 45,
      target: 50,
      icon: Code,
      color: "text-primary"
    },
    {
      label: "Blog Posts Written",
      current: 28,
      target: 40,
      icon: BookOpen,
      color: "text-secondary"
    },
    {
      label: "Open Source Contributions",
      current: 15,
      target: 20,
      icon: Trophy,
      color: "text-accent"
    }
  ];

  const achievements = [
    { name: "First ML Model", earned: true, color: "bg-gradient-primary" },
    { name: "Open Source Contributor", earned: true, color: "bg-gradient-secondary" },
    { name: "Tech Blogger", earned: true, color: "bg-gradient-accent" },
    { name: "MLOps Expert", earned: true, color: "bg-gradient-primary" },
    { name: "AI Pioneer", earned: false, color: "bg-muted" },
    { name: "Data Guru", earned: false, color: "bg-muted" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Progress Tracker
          </span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Tracking my journey in data science and AI
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Progress Metrics */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Current Goals</h3>
          
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const progress = (stat.current / stat.target) * 100;
            
            return (
              <div key={stat.label} className="card-project">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg mr-3 ${stat.color === 'text-primary' ? 'bg-gradient-primary' : stat.color === 'text-secondary' ? 'bg-gradient-secondary' : 'bg-gradient-accent'}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">{stat.label}</span>
                      <span className={`text-sm font-bold ${stat.color}`}>
                        {stat.current}/{stat.target}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {progress >= 100 ? "Goal achieved! 🎉" : `${Math.round(100 - progress)}% remaining to reach goal`}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievement Badges */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Achievement Badges</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.name}
                className={`card-project text-center ${achievement.earned ? 'opacity-100' : 'opacity-50'}`}
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-2">
                  {achievement.name}
                </h4>
                <Badge 
                  variant={achievement.earned ? "default" : "secondary"}
                  className={achievement.earned ? "bg-gradient-primary" : ""}
                >
                  {achievement.earned ? "Earned" : "Locked"}
                </Badge>
              </div>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="card-project">
            <h4 className="font-bold text-foreground mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Learning Journey
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></div>
                <span className="text-sm text-muted-foreground">Started with Python & Statistics</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-secondary rounded-full mr-3"></div>
                <span className="text-sm text-muted-foreground">Mastered Machine Learning</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-accent rounded-full mr-3"></div>
                <span className="text-sm text-muted-foreground">Exploring AI Engineering</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-muted rounded-full mr-3"></div>
                <span className="text-sm text-muted-foreground">Building Production Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProgress;