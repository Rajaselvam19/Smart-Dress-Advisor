import OptionCard from "../OptionCard";
import { Smile, Star, Zap, Crown } from "lucide-react";

interface AgeStepProps {
  value: string | null;
  onChange: (value: string) => void;
}

const ageRanges: { value: string; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "18-24",
    label: "18-24 years",
    description: "Fresh and trendy styles",
    icon: <Smile className="w-6 h-6" />,
  },
  {
    value: "25-34",
    label: "25-34 years",
    description: "Modern and versatile looks",
    icon: <Star className="w-6 h-6" />,
  },
  {
    value: "35-44",
    label: "35-44 years",
    description: "Sophisticated and refined",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    value: "45+",
    label: "45+ years",
    description: "Classic and elegant choices",
    icon: <Crown className="w-6 h-6" />,
  },
];

const AgeStep = ({ value, onChange }: AgeStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          What's your age range?
        </h2>
        <p className="text-muted-foreground">
          Helps us suggest age-appropriate styles
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {ageRanges.map((age) => (
          <OptionCard
            key={age.value}
            icon={age.icon}
            label={age.label}
            description={age.description}
            selected={value === age.value}
            onClick={() => onChange(age.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default AgeStep;
