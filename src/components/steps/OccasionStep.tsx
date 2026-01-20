import { Occasion } from "@/types/fashion";
import OptionCard from "../OptionCard";
import { Briefcase, GraduationCap, Heart, Building2, Coffee, PartyPopper, Sparkles } from "lucide-react";

interface OccasionStepProps {
  value: Occasion | null;
  onChange: (value: Occasion) => void;
}

const occasions: { value: Occasion; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "interview",
    label: "Job Interview",
    description: "Professional and polished look for career opportunities",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    value: "exam",
    label: "Exam / College",
    description: "Comfortable yet presentable for academic settings",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    value: "wedding",
    label: "Wedding",
    description: "Elegant attire for celebrations of love",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    value: "temple",
    label: "Temple / Religious",
    description: "Modest and respectful traditional wear",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    value: "casual",
    label: "Casual Outing",
    description: "Relaxed and stylish for everyday moments",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    value: "party",
    label: "Party / Celebration",
    description: "Fun and festive looks to stand out",
    icon: <PartyPopper className="w-6 h-6" />,
  },
  {
    value: "date",
    label: "Date Night",
    description: "Romantic and charming for special evenings",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const OccasionStep = ({ value, onChange }: OccasionStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          What's the occasion?
        </h2>
        <p className="text-muted-foreground">
          Select where you're dressing up for
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {occasions.map((occasion) => (
          <OptionCard
            key={occasion.value}
            icon={occasion.icon}
            label={occasion.label}
            description={occasion.description}
            selected={value === occasion.value}
            onClick={() => onChange(occasion.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default OccasionStep;
