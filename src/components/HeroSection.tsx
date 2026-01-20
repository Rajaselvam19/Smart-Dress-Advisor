import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Star, Heart } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 opacity-20">
        <Star className="w-8 h-8 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <Heart className="w-6 h-6 text-accent animate-pulse" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          AI-Powered Fashion Advice
        </div>

        {/* Heading */}
        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0"
          style={{ animation: "slide-up 0.6s ease-out 0.2s forwards" }}
        >
          Dress to{" "}
          <span className="text-gradient">Impress</span>
          <br />
          Every Occasion
        </h1>

        {/* Description */}
        <p 
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto opacity-0"
          style={{ animation: "slide-up 0.6s ease-out 0.4s forwards" }}
        >
          Your personal AI stylist. Get perfect outfit recommendations for any event,
          tailored to your style, body, and budget.
        </p>

        {/* CTA Button */}
        <div 
          className="opacity-0"
          style={{ animation: "slide-up 0.6s ease-out 0.6s forwards" }}
        >
          <Button
            variant="fashion"
            size="xl"
            onClick={onGetStarted}
            className="gap-3"
          >
            Find Your Perfect Outfit
            <Sparkles className="w-5 h-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="mt-16 opacity-0"
          style={{ animation: "fade-in 0.5s ease-out 1s forwards" }}
        >
          <button
            onClick={onGetStarted}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Get Started</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div 
          className="mt-12 flex items-center justify-center gap-8 flex-wrap opacity-0"
          style={{ animation: "fade-in 0.5s ease-out 1.2s forwards" }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Beginner Friendly
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Free to Use
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Instant Results
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
