import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectionRenderer from "@/components/SectionRenderer";
import { mlEngineering } from "@/content/sections/ml-engineering";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SectionRenderer section={mlEngineering} />
      </main>
    </div>
  );
};

export default Index;
