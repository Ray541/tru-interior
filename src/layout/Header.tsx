import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import lightLogo from "../../src/assets/images/light-small-logo.png";
import darkLogo from "../../src/assets/images/dark-small-logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    { id: 1, label: "home", path: "home" },
    { id: 2, label: "about us", path: "about-us" },
    { id: 3, label: "services", path: "services" },
    { id: 4, label: "process", path: "process" },
    { id: 5, label: "ongoing projects", path: "on-going-projects" },
    { id: 6, label: "portfolio", path: "portfolio" },
    { id: 7, label: "contact", path: "contact" },
  ];

  return (
    <header
      className={cn(
        "p-3 border-b border-border sticky top-0 bg-background/50 backdrop-blur-xs backdrop-saturate-150"
      )}
    >
      <div
        className={cn("w-full max-w-340 mx-auto flex items-center justify-between md:border-none")}
      >
        {/* Logo */}
        <a href="#home" className="w-35 md:w-44">
          <img
            src={theme === "light" ? lightLogo : darkLogo}
            alt="Logo"
            className="w-full h-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-5">
          {navs.map(nav => (
            <a
              key={nav.id}
              href={`#${nav.path}`}
              className="text-primary uppercase font-bold text-sm tracking-wider hover:opacity-80 transition"
            >
              {nav.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button onClick={() => setIsOpen(false)}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border border-border">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <a href="#home" className="block w-34 mx-auto mb-5">
                  <img
                    src={theme === "light" ? lightLogo : darkLogo}
                    alt="Logo"
                    className="w-full h-auto"
                  />
                </a>
                <SheetDescription className="sr-only">
                  Navigation links for the mobile menu.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col items-center gap-5">
                {navs.map(nav => (
                  <a
                    key={nav.id}
                    href={`#${nav.path}`}
                    className="text-primary uppercase font-semibold text-sm tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {nav.label}
                  </a>
                ))}
              </nav>

              <SheetFooter>
                <ModeToggle className="fixed bottom-3 right-7 active:scale-90 z-5" />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
