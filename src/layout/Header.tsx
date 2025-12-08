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
import { Link } from "react-router-dom";
import { AnimatedNavLink } from "@/components/gsap-components/animated-nav-link";

export default function Header() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    { label: "home", path: "" },
    { label: "about us", path: "about-us" },
    { label: "services", path: "services" },
    { label: "process", path: "process" },
    { label: "ongoing projects", path: "on-going-projects" },
    { label: "portfolio", path: "portfolio" },
    { label: "contact", path: "contact" },
  ];

  return (
    <header
      className={cn(
        "p-5 border-b border-border sticky top-0 bg-background"
        // bg-background/70 backdrop-blur-sm backdrop-saturate-150 // glass morphism
      )}
    >
      <div
        className={cn("w-full max-w-340 mx-auto flex items-center justify-between md:border-none")}
      >
        {/* Logo */}
        <Link to="/" className="w-35 md:w-44">
          <img
            src={theme === "light" ? lightLogo : darkLogo}
            alt="Logo"
            className="w-full h-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center justify-center gap-5">
          {navs.map(nav => (
            <AnimatedNavLink key={nav.label} to={`/${nav.path}`} enableActive>
              {nav.label}
            </AnimatedNavLink>
          ))}
        </nav>
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
                <Link to="/" className="block w-34 mx-auto mb-5">
                  <img
                    src={theme === "light" ? lightLogo : darkLogo}
                    alt="Logo"
                    className="w-full h-auto"
                  />
                </Link>
                <SheetDescription className="sr-only">
                  Navigation links for the mobile menu.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col items-center gap-5">
                {navs.map(nav => (
                  <AnimatedNavLink
                    key={nav.label}
                    to={`/${nav.path}`}
                    onClick={() => setIsOpen(false)}
                    enableActive
                  >
                    {nav.label}
                  </AnimatedNavLink>
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
}
