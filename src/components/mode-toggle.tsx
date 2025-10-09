import { useTheme } from "../hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={className}
      onClick={toggleTheme}
      onMouseEnter={() => handleCursorEnter(2)}
      onMouseLeave={handleCursorLeave}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
