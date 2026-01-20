import { SkinTone } from "@/types/fashion";
import { cn } from "@/lib/utils";

interface SkinToneStepProps {
  value: SkinTone | null;
  onChange: (value: SkinTone) => void;
}

const skinTones: { value: SkinTone; label: string; color: string; textColor: string }[] = [
  {
    value: "fair",
    label: "Fair",
    color: "bg-[#FFE5D9]",
    textColor: "text-[#6B4E3D]",
  },
  {
    value: "light",
    label: "Light",
    color: "bg-[#F5D0C5]",
    textColor: "text-[#5C4033]",
  },
  {
    value: "medium",
    label: "Medium",
    color: "bg-[#D4A574]",
    textColor: "text-[#4A3728]",
  },
  {
    value: "olive",
    label: "Olive",
    color: "bg-[#C4956A]",
    textColor: "text-[#3D2E22]",
  },
  {
    value: "tan",
    label: "Tan",
    color: "bg-[#A67B5B]",
    textColor: "text-[#FFFFFF]",
  },
  {
    value: "dark",
    label: "Dark",
    color: "bg-[#8B5A3C]",
    textColor: "text-[#FFFFFF]",
  },
];

const SkinToneStep = ({ value, onChange }: SkinToneStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          What's your skin tone?
        </h2>
        <p className="text-muted-foreground">
          We'll suggest colors that complement your complexion
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
        {skinTones.map((tone) => (
          <button
            key={tone.value}
            onClick={() => onChange(tone.value)}
            className={cn(
              "relative aspect-square rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-2",
              "hover:scale-105 hover:shadow-elevated",
              tone.color,
              value === tone.value && "ring-4 ring-primary ring-offset-2 scale-105 shadow-elevated"
            )}
          >
            <span className={cn("font-medium text-sm", tone.textColor)}>
              {tone.label}
            </span>
            {value === tone.value && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkinToneStep;
