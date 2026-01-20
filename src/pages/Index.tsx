import { useState, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FashionWizard from "@/components/FashionWizard";

const Index = () => {
  const [showWizard, setShowWizard] = useState(false);
  const wizardRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setShowWizard(true);
    setTimeout(() => {
      wizardRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      
      {!showWizard ? (
        <HeroSection onGetStarted={handleGetStarted} />
      ) : (
        <main ref={wizardRef} className="container max-w-5xl mx-auto px-4 py-8">
          <FashionWizard />
        </main>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for students and young professionals
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
