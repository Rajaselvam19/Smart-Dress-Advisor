import { Gender } from "@/types/fashion";
import OptionCard from "../OptionCard";
import { User, Users } from "lucide-react";

interface GenderStepProps {
  value: Gender | null;
  onChange: (value: Gender) => void;
}

const genders: { value: Gender; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "female",
    label: "Female",
    description: "Feminine styles and silhouettes",
    icon: <User className="w-6 h-6" />,
  },
  {
    value: "male",
    label: "Male",
    description: "Masculine styles and cuts",
    icon: <User className="w-6 h-6" />,
  },
  {
    value: "non-binary",
    label: "Non-Binary",
    description: "Gender-neutral and fluid styles",
    icon: <Users className="w-6 h-6" />,
  },
];

const GenderStep = ({ value, onChange }: GenderStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          How do you identify?
        </h2>
        <p className="text-muted-foreground">
          This helps us suggest styles that suit you best
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {genders.map((gender) => (
          <OptionCard
            key={gender.value}
            icon={gender.icon}
            label={gender.label}
            description={gender.description}
            selected={value === gender.value}
            onClick={() => onChange(gender.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default GenderStep;
