import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-soft">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold text-foreground">
              StyleMate
            </h1>
            <p className="text-xs text-muted-foreground">Your AI Fashion Assistant</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
