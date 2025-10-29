import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import lightLogo from "/light-small-logo.png";
import darkLogo from "/dark-small-logo.png";

const CURRENT_YEAR = new Date().getFullYear();

const SOCIALS = [
  { social: "Linked In", icon: <FaLinkedinIn /> },
  { social: "Facebook", icon: <FaFacebook /> },
  { social: "Instagram", icon: <FaInstagram /> },
];

const Footer = () => {
  const { theme } = useTheme();

  const handleNameClick = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <>
      <footer className="bg-background py-7 px-3 text-center text-muted-foreground border-t border-border">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5 justify-center md:justify-between items-center">
          <a
            href="#home"
            className={"w-44"}
            onMouseEnter={() => handleCursorEnter(7)}
            onMouseLeave={handleCursorLeave}
            onClick={handleNameClick}
          >
            <img src={theme === "light" ? lightLogo : darkLogo} alt="" className={cn("")} />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {SOCIALS.map(social => (
              <Button
                key={social.social}
                variant="default"
                size="icon"
                className="active:scale-90"
                onMouseEnter={() => handleCursorEnter(2)}
                onMouseLeave={handleCursorLeave}
              >
                {social.icon}
              </Button>
            ))}
          </div>

          <p
            className="text-md font-black"
            onMouseEnter={() => handleCursorEnter(2)}
            onMouseLeave={handleCursorLeave}
          >
            &copy; <span className="text-primary">{CURRENT_YEAR}</span>
          </p>
        </div>
      </footer>
      <div className="hidden w-full h-[70vh] border-t border-border xl:flex items-center justify-center">
        <p
          className="w-full text-muted text-center lg:text-[12rem] font-black"
          onMouseEnter={() => handleCursorEnter(30)}
          onMouseLeave={handleCursorLeave}
        >
          TRU INTERIORS
        </p>
      </div>
    </>
  );
};

export default Footer;
