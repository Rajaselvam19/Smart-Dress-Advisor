import { BodyType } from "@/types/fashion";
import OptionCard from "../OptionCard";

interface BodyTypeStepProps {
  value: BodyType | null;
  onChange: (value: BodyType) => void;
}

const bodyTypes: { value: BodyType; label: string; description: string }[] = [
  {
    value: "slim",
    label: "Slim",
    description: "Lean and narrow frame",
  },
  {
    value: "athletic",
    label: "Athletic",
    description: "Toned and muscular build",
  },
  {
    value: "average",
    label: "Average",
    description: "Balanced proportions",
  },
  {
    value: "curvy",
    label: "Curvy",
    description: "Defined curves and proportions",
  },
  {
    value: "plus-size",
    label: "Plus Size",
    description: "Full-figured body type",
  },
];

const BodyIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
    <path d="M9 21l3-5 3 5" />
  </svg>
);

const BodyTypeStep = ({ value, onChange }: BodyTypeStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          What's your body type?
        </h2>
        <p className="text-muted-foreground">
          Helps us suggest the most flattering cuts and styles
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {bodyTypes.map((type) => (
          <OptionCard
            key={type.value}
            icon={<BodyIcon />}
            label={type.label}
            description={type.description}
            selected={value === type.value}
            onClick={() => onChange(type.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyTypeStep;
