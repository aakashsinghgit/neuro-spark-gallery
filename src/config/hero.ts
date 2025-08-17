export const heroConfig = {
  profile: {
    name: "Aakash Singh",
    title: "Data Scientist",
    tagline: "Welcome to my Data Science portfolio",
    bio: "Passionate about turning data into actionable insights and building ML solutions that make a difference.",
    profileImage: "/profile-photo.jpg", // Add your profile photo to public folder
    location: "India",
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