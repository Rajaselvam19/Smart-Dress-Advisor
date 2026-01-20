import { OutfitRecommendation, UserPreferences } from "@/types/fashion";
import OutfitCard from "./OutfitCard";
import { Button } from "./ui/button";
import { 
  Shirt, 
  Footprints, 
  Sparkles, 
  Palette, 
  Scissors, 
  AlertTriangle, 
  Lightbulb,
  ArrowLeft,
  RefreshCw
} from "lucide-react";

interface RecommendationDisplayProps {
  recommendation: OutfitRecommendation;
  preferences: UserPreferences;
  onStartOver: () => void;
}

const RecommendationDisplay = ({
  recommendation,
  preferences,
  onStartOver,
}: RecommendationDisplayProps) => {
  const occasionLabels: Record<string, string> = {
    interview: "Job Interview",
    exam: "Exam / College",
    wedding: "Wedding",
    temple: "Temple / Religious",
    casual: "Casual Outing",
    party: "Party / Celebration",
    date: "Date Night",
  };

  return (
    <div className="animate-fade-in pb-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          Your Personalized Look
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Perfect Outfit for {occasionLabels[preferences.occasion || "casual"]}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your preferences, here's a complete outfit recommendation with styling tips
        </p>
      </div>

      {/* Main Outfit Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Dress/Outfit */}
        <OutfitCard icon={<Shirt className="w-5 h-5" />} title="Main Outfit" delay={100}>
          <h4 className="font-semibold text-foreground mb-2">{recommendation.dress.name}</h4>
          <p className="text-muted-foreground text-sm mb-4">{recommendation.dress.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-medium text-muted-foreground">Colors:</span>
            {recommendation.dress.colors.map((color, i) => (
              <span key={i} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Fabric: {recommendation.dress.fabric}</span>
          </div>
        </OutfitCard>

        {/* Footwear */}
        <OutfitCard icon={<Footprints className="w-5 h-5" />} title="Footwear" delay={200}>
          <h4 className="font-semibold text-foreground mb-2">{recommendation.footwear.name}</h4>
          <p className="text-muted-foreground text-sm">{recommendation.footwear.description}</p>
        </OutfitCard>
      </div>

      {/* Accessories */}
      <OutfitCard icon={<Sparkles className="w-5 h-5" />} title="Accessories" className="mb-8" delay={300}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendation.accessories.map((accessory, i) => (
            <div key={i} className="p-4 bg-secondary/50 rounded-xl">
              <h4 className="font-semibold text-foreground text-sm mb-1">{accessory.name}</h4>
              <p className="text-muted-foreground text-xs">{accessory.description}</p>
            </div>
          ))}
        </div>
      </OutfitCard>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Color Tips */}
        <OutfitCard icon={<Palette className="w-5 h-5" />} title="Color Matching Tips" delay={400}>
          <ul className="space-y-2">
            {recommendation.colorTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </OutfitCard>

        {/* Fabric Tips */}
        <OutfitCard icon={<Scissors className="w-5 h-5" />} title="Fabric Suggestions" delay={500}>
          <ul className="space-y-2">
            {recommendation.fabricTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </OutfitCard>
      </div>

      {/* What to Avoid */}
      <OutfitCard 
        icon={<AlertTriangle className="w-5 h-5" />} 
        title="What to Avoid" 
        className="mb-8 border-destructive/20"
        delay={600}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recommendation.avoidList.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                <span className="text-destructive text-xs">✕</span>
              </span>
              {item}
            </div>
          ))}
        </div>
      </OutfitCard>

      {/* Styling Tips */}
      <OutfitCard 
        icon={<Lightbulb className="w-5 h-5" />} 
        title="Pro Styling Tips" 
        className="mb-10"
        delay={700}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recommendation.stylingTips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-3 h-3 text-primary" />
              </span>
              {tip}
            </div>
          ))}
        </div>
      </OutfitCard>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="fashionOutline" size="lg" onClick={onStartOver}>
          <ArrowLeft className="w-4 h-4" />
          Start Over
        </Button>
        <Button variant="fashion" size="lg" onClick={onStartOver}>
          <RefreshCw className="w-4 h-4" />
          Get New Recommendation
        </Button>
      </div>
    </div>
  );
};

export default RecommendationDisplay;
