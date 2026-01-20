import { useState } from "react";
import { UserPreferences, OutfitRecommendation, Occasion, Gender, BodyType, SkinTone, Budget } from "@/types/fashion";
import { generateRecommendation } from "@/lib/fashionRecommendations";
import StepIndicator from "./StepIndicator";
import OccasionStep from "./steps/OccasionStep";
import GenderStep from "./steps/GenderStep";
import AgeStep from "./steps/AgeStep";
import BodyTypeStep from "./steps/BodyTypeStep";
import SkinToneStep from "./steps/SkinToneStep";
import BudgetStep from "./steps/BudgetStep";
import RecommendationDisplay from "./RecommendationDisplay";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const TOTAL_STEPS = 6;
const STEP_LABELS = ["Occasion", "Gender", "Age", "Body", "Skin", "Budget"];

const FashionWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>({
    occasion: null,
    gender: null,
    ageRange: null,
    bodyType: null,
    skinTone: null,
    budget: null,
  });
  const [recommendation, setRecommendation] = useState<OutfitRecommendation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const canProceed = () => {
    switch (currentStep) {
      case 1: return preferences.occasion !== null;
      case 2: return preferences.gender !== null;
      case 3: return preferences.ageRange !== null;
      case 4: return preferences.bodyType !== null;
      case 5: return preferences.skinTone !== null;
      case 6: return preferences.budget !== null;
      default: return false;
    }
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      generateOutfit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateOutfit = () => {
    setIsGenerating(true);
    // Simulate AI thinking
    setTimeout(() => {
      const result = generateRecommendation(preferences);
      setRecommendation(result);
      setIsGenerating(false);
    }, 1500);
  };

  const handleStartOver = () => {
    setCurrentStep(1);
    setPreferences({
      occasion: null,
      gender: null,
      ageRange: null,
      bodyType: null,
      skinTone: null,
      budget: null,
    });
    setRecommendation(null);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OccasionStep
            value={preferences.occasion}
            onChange={(value: Occasion) => setPreferences({ ...preferences, occasion: value })}
          />
        );
      case 2:
        return (
          <GenderStep
            value={preferences.gender}
            onChange={(value: Gender) => setPreferences({ ...preferences, gender: value })}
          />
        );
      case 3:
        return (
          <AgeStep
            value={preferences.ageRange}
            onChange={(value: string) => setPreferences({ ...preferences, ageRange: value })}
          />
        );
      case 4:
        return (
          <BodyTypeStep
            value={preferences.bodyType}
            onChange={(value: BodyType) => setPreferences({ ...preferences, bodyType: value })}
          />
        );
      case 5:
        return (
          <SkinToneStep
            value={preferences.skinTone}
            onChange={(value: SkinTone) => setPreferences({ ...preferences, skinTone: value })}
          />
        );
      case 6:
        return (
          <BudgetStep
            value={preferences.budget}
            onChange={(value: Budget) => setPreferences({ ...preferences, budget: value })}
          />
        );
      default:
        return null;
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full gradient-accent animate-pulse flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-primary/30 animate-ping" />
        </div>
        <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-2">
          Creating Your Perfect Look
        </h2>
        <p className="text-muted-foreground text-center">
          Analyzing your preferences and curating the ideal outfit...
        </p>
      </div>
    );
  }

  if (recommendation) {
    return (
      <RecommendationDisplay
        recommendation={recommendation}
        preferences={preferences}
        onStartOver={handleStartOver}
      />
    );
  }

  return (
    <div>
      <StepIndicator
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        labels={STEP_LABELS}
      />

      <div className="mt-8 mb-10">
        {renderStep()}
      </div>

      <div className="flex items-center justify-between max-w-2xl mx-auto px-4">
        <Button
          variant="ghost"
          size="lg"
          onClick={handleBack}
          disabled={currentStep === 1}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <Button
          variant="fashion"
          size="lg"
          onClick={handleNext}
          disabled={!canProceed()}
          className="gap-2"
        >
          {currentStep === TOTAL_STEPS ? (
            <>
              Get Outfit
              <Sparkles className="w-4 h-4" />
            </>
          ) : (
            <>
              Continue
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default FashionWizard;
