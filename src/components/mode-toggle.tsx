import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = (theme: string) => {
    switch (theme) {
      case "light":
        return <Moon />;
      case "dark":
        return <Laptop2 />;
      case "system":
        return <Sun />;
      default:
        return <Sun />;
    }
  };

  const getToolTip = (theme: string) => {
    switch (theme) {
      case "light":
        return "Switch to Dark Theme";
      case "dark":
        return "Switch to System Theme";
      case "system":
        return "Switch to Light Theme";
      default:
        return "Switch to Light Theme";
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger className={className} asChild>
        <Button variant="default" size="icon" onClick={toggleTheme}>
          {getIcon(theme)}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{getToolTip(theme)}</TooltipContent>
    </Tooltip>
  );
}
