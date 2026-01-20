import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

const StepIndicator = ({ currentStep, totalSteps, labels }: StepIndicatorProps) => {
  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className="flex items-center flex-1 last:flex-initial">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500",
                    isCompleted && "bg-primary text-primary-foreground",
                    isCurrent && "bg-primary text-primary-foreground shadow-glow scale-110",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {labels && labels[index] && (
                  <span
                    className={cn(
                      "mt-2 text-xs font-medium transition-colors duration-300 text-center max-w-[80px]",
                      (isCompleted || isCurrent) ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {labels[index]}
                  </span>
                )}
              </div>
              {index < totalSteps - 1 && (
                <div className="flex-1 mx-2">
                  <div
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      isCompleted ? "bg-primary" : "bg-muted"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
