import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";
import lightLogo from "../../src/assets/images/light-small-logo.png";
import darkLogo from "../../src/assets/images/dark-small-logo.png";
import { Button } from "@/components/ui/button";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import footerBg from "../assets/images/footer-bg.jpg";

const CURRENT_YEAR = new Date().getFullYear();

const SOCIALS = [
  { social: "Linked In", icon: <FaLinkedinIn /> },
  { social: "Facebook", icon: <FaFacebook /> },
  { social: "Instagram", icon: <FaInstagram /> },
];

export default function Footer() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleNameClick = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <>
      <footer className="bg-background py-7 px-3 text-center text-muted-foreground border-t border-border">
        <div className="w-full max-w-310 mx-auto flex flex-col md:flex-row gap-5 justify-center md:justify-between items-center">
          <Link to="/" className={"w-44"} onClick={handleNameClick}>
            <img src={theme === "light" ? lightLogo : darkLogo} alt="" className={cn("")} />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {SOCIALS.map(social => (
              <Button key={social.social} variant="default" size="icon" className="active:scale-90">
                {social.icon}
              </Button>
            ))}
          </div>

          <p className="text-md font-black">
            &copy; <span className="text-primary">{CURRENT_YEAR}</span>
          </p>
        </div>
      </footer>
      <div
        className="flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className="w-full flex items-center justify-center bg-black/30 backdrop-brightness-50 shadow py-10">
          <p className="text-background dark:text-foreground text-center text-3xl sm:text-5xl md:text-7xl xl:text-9xl font-black drop-shadow-lg">
            TRU INTERIORS
          </p>
        </div>
      </div>
    </>
  );
}
