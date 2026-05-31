import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectionRenderer from "@/components/SectionRenderer";
import { sections } from "@/content/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        {sections.map((s) => (
          <SectionRenderer key={s.id} section={s} />
        ))}
      </main>
    </div>
  );
};

export default Index;
