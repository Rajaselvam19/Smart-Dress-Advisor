import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface OptionCardProps {
  icon: ReactNode;
  label: string;
  description?: string;
  selected?: boolean;
  onClick: () => void;
}

const OptionCard = ({ icon, label, description, selected, onClick }: OptionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full p-5 rounded-xl border-2 transition-all duration-300 text-left group",
        "hover:border-primary/50 hover:shadow-soft hover:-translate-y-0.5",
        selected
          ? "border-primary bg-primary/5 shadow-soft"
          : "border-border bg-card"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
            selected
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          )}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-medium text-base transition-colors duration-300",
            selected ? "text-foreground" : "text-foreground"
          )}>
            {label}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
      {selected && (
        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default OptionCard;
