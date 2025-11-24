import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { setTheme, type Theme } from "@/store/slice/themeSlice";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const updateTheme = (value: Theme) => {
    dispatch(setTheme(value));
  };

  const toggleTheme = () => {
    if (theme === "light") updateTheme("dark");
    else if (theme === "dark") updateTheme("system");
    else updateTheme("light");
  };

  const getIcon = (theme: Theme) => {
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

  const getToolTip = (theme: Theme) => {
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
