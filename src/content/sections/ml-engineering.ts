import type { SectionContent } from "./types";

// ML Engineering — v1.0 MVP section.
// Add a project by appending an object to `projects`. The UI ingests it automatically.

export const mlEngineering: SectionContent = {
  id: "ml-engineering",
  title: "ML Engineering",
  icon: "Cpu",
  tagline: "Production ML",
  description: "Production ML systems, MLOps, and scalable model deployment.",
  projects: [
    {
      title: "Loan Criterion Predictor",
      description:
        "End-to-end ML pipeline that predicts loan eligibility from applicant financial and demographic features. Trained, packaged, and deployed as a live web app for real-time inference.",
      tags: ["Python", "scikit-learn", "Flask", "Render", "MLOps"],
      githubUrl:
        "https://github.com/aakashsinghgit/ML-Engineering-Projects/tree/main/Projects/P1_Loan_Criterion",
      demoUrl: "https://loan-criterion-predictor.onrender.com",
    },
    {
      title: "Health Insurance Price Predictor",
      description:
        "Regression model that estimates health insurance premiums from personal and lifestyle attributes. Served behind a deployed web interface for interactive what-if pricing.",
      tags: ["Python", "scikit-learn", "Flask", "Render", "Regression"],
      githubUrl:
        "https://github.com/aakashsinghgit/ML-Engineering-Projects/tree/main/Projects/P2_HealthInsurance_Price",
      demoUrl: "https://health-insurance-predictor-wa3a.onrender.com",
    },
    {
      title: "Energy Consumption — MLflow Experiments",
      description:
        "Energy consumption forecasting workflow with full experiment tracking, parameter logging, and model registry via MLflow. Terminal-driven MLOps project (no hosted demo).",
      tags: ["Python", "MLflow", "Forecasting", "Experiment Tracking"],
      githubUrl:
        "https://github.com/aakashsinghgit/ML-Engineering-Projects/tree/main/Projects/P3_Energy_Consumption_mlflow",
    },
  ],
};
