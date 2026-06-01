// Hero content — single source of truth for the hero section.
// Goals live in src/content/goals.ts (shared with the Goals/Progress section).

export const heroContent = {
  profile: {
    name: "Aakash Singh",
    title: "Data Scientist",
    tagline: "Welcome to my Data Science portfolio",
    bio: "Passionate about turning data into actionable insights and building ML solutions that make a difference.",
    profileImage: "/profile-photo.jpg",
    location: "India",
  },

  story: {
    title: "My Story",
    text: "I began my journey in data science with a fascination for how data could tell stories and drive decisions. Over the years, I've worked on diverse projects ranging from predictive modeling to deploying ML solutions in production. What excites me most is the intersection of technology and real-world impact—building systems that not only work but make a difference.",
    readMoreLink: "/my-story",
  },

  cta: {
    primary:   { text: "LinkedIn",        href: "https://linkedin.com/in/aakash-singh-data-scientist", icon: "Linkedin" },
    secondary: { text: "Kaggle",          href: "https://kaggle.com/aakashsingh",                      icon: "Trophy" },
    tertiary:  { text: "Download Resume", href: "/resume.pdf",                                          icon: "Download" },
  },

  // Real numbers only. Update as projects ship.
  stats: {
    projectsCompleted: 3,
    mlModelsDeployed: 2,
    yearsExperience: 5,
  },
};
