import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import BlogPreview from "@/components/BlogPreview";
import PortfolioProgress from "@/components/PortfolioProgress";
import FloatingMLPlayground from "@/components/FloatingMLPlayground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FloatingMLPlayground />
        <FeaturedProjects />
        <BlogPreview />
        <PortfolioProgress />
      </main>
    </div>
  );
};

export default Index;
