import { Budget } from "@/types/fashion";
import OptionCard from "../OptionCard";
import { Wallet, CreditCard, Gem } from "lucide-react";

interface BudgetStepProps {
  value: Budget | null;
  onChange: (value: Budget) => void;
}

const budgets: { value: Budget; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "budget",
    label: "Budget-Friendly",
    description: "Stylish options that are easy on the wallet",
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    value: "moderate",
    label: "Moderate",
    description: "Balance of quality and affordability",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    value: "premium",
    label: "Premium",
    description: "High-quality investment pieces",
    icon: <Gem className="w-6 h-6" />,
  },
];

const BudgetStep = ({ value, onChange }: BudgetStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          What's your budget?
        </h2>
        <p className="text-muted-foreground">
          We'll find the best options within your range
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {budgets.map((budget) => (
          <OptionCard
            key={budget.value}
            icon={budget.icon}
            label={budget.label}
            description={budget.description}
            selected={value === budget.value}
            onClick={() => onChange(budget.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetStep;
