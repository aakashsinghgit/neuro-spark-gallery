export const heroConfig = {
  profile: {
    name: "Aakash Singh",
    title: "Data Scientist",
    tagline: "Welcome to my Data Science portfolio",
    bio: "Passionate about turning data into actionable insights and building ML solutions that make a difference.",
    profileImage: "/profile-photo.jpg", // Add your profile photo to public folder
    location: "India",
  },

  story: {
    title: "My Story",
    text: "I began my journey in data science with a fascination for how data could tell stories and drive decisions. Over the years, I've worked on diverse projects ranging from predictive modeling to deploying ML solutions in production. What excites me most is the intersection of technology and real-world impact—building systems that not only work but make a difference.",
    readMoreLink: "/story" // Page will be created later
  },
  
  cta: {
    primary: {
      text: "LinkedIn",
      href: "https://linkedin.com/in/aakash-singh-data-scientist", // Replace with your LinkedIn
      icon: "Linkedin"
    },
    secondary: {
      text: "Kaggle",
      href: "https://kaggle.com/aakashsingh", // Replace with your Kaggle
      icon: "Trophy"
    },
    tertiary: {
      text: "Download Resume",
      href: "/resume.pdf", // Add your resume to public folder
      icon: "Download"
    }
  },

  stats: {
    projectsCompleted: 8, // Update as you add projects
    mlModelsDeployed: 3,  // Update based on deployed models
    linesOfCode: "15K+",  // Estimate or connect to GitHub API
    yearsExperience: 2    // Your experience in years
  },

  goals: [
    {
      label: "ML Engineering",
      current: 3,
      target: 10,
      icon: "Cpu"
    },
    {
      label: "AI Engineering",
      current: 2,
      target: 10,
      icon: "Brain"
    },
    {
      label: "Deep Learning",
      current: 1,
      target: 10,
      icon: "Zap"
    },
    {
      label: "Data Science Core",
      current: 2,
      target: 5,
      icon: "Database"
    },
    {
      label: "ML Playgrounds",
      current: 6,
      target: 10,
      icon: "Play"
    },
    {
      label: "Research Papers",
      current: 0,
      target: 5,
      icon: "BookOpen"
    }
  ],

  journey: {
    title: "My Data Science Journey",
    milestones: [
      {
        phase: "Foundation",
        description: "Python, Statistics & Mathematics",
        status: "completed"
      },
      {
        phase: "Core Skills", 
        description: "Machine Learning & Data Analysis",
        status: "completed"
      },
      {
        phase: "Advanced ML",
        description: "Deep Learning & MLOps",
        status: "in-progress"
      },
      {
        phase: "Specialization",
        description: "AI Engineering & Research",
        status: "planned"
      }
    ]
  }
};