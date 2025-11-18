import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Code, BookOpen, Cpu, Brain, Zap, Database, Play } from "lucide-react";

const PortfolioProgress = () => {
  const stats = [
    {
      label: "ML Engineering",
      current: 3,
      target: 10,
      icon: Cpu,
      color: "text-primary"
    },
    {
      label: "AI Engineering",
      current: 2,
      target: 10,
      icon: Brain,
      color: "text-secondary"
    },
    {
      label: "Deep Learning",
      current: 1,
      target: 10,
      icon: Zap,
      color: "text-accent"
    },
    {
      label: "Data Science Core",
      current: 2,
      target: 5,
      icon: Database,
      color: "text-green-500"
    },
    {
      label: "ML Playgrounds",
      current: 6,
      target: 10,
      icon: Play,
      color: "text-blue-500"
    },
    {
      label: "Research Papers",
      current: 0,
      target: 5,
      icon: BookOpen,
      color: "text-purple-500"
    }
  ];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-gradient-accent p-2 rounded-lg">
            <Target className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-playfair">
            Progress Tracker
          </h2>
        </div>
        <p className="text-base text-muted-foreground ml-12">
          Tracking my journey in data science and AI
        </p>
      </div>

      <div className="space-y-8">
        {/* Progress Metrics */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 font-playfair">Current Goals</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const progress = (stat.current / stat.target) * 100;
              
              return (
                <div key={stat.label} className="card-project">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg mr-3 ${stat.color === 'text-primary' ? 'bg-gradient-primary' : stat.color === 'text-secondary' ? 'bg-gradient-secondary' : stat.color === 'text-accent' ? 'bg-gradient-accent' : 'bg-gradient-primary'}`}>
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
    </section>
  );
};

export default PortfolioProgress;