import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface OutfitCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const OutfitCard = ({ icon, title, children, className, delay = 0 }: OutfitCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-6 shadow-soft border border-border/50 opacity-0",
        className
      )}
      style={{
        animation: `fade-in 0.5s ease-out ${delay}ms forwards`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default OutfitCard;
