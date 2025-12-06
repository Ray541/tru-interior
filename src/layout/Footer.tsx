import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import lightLogo from "../../src/assets/images/light-small-logo.png";
import darkLogo from "../../src/assets/images/dark-small-logo.png";
import { Button } from "@/components/ui/button";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { GsapNavLink } from "@/components/gsap-components/gsap-nav-link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

const SOCIALS = [
  { social: "Linked In", icon: <FaLinkedinIn /> },
  { social: "Facebook", icon: <FaFacebook /> },
  { social: "Instagram", icon: <FaInstagram /> },
];

export default function Footer() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const navs = [
    { label: "home", path: "" },
    { label: "about us", path: "about-us" },
    { label: "services", path: "services" },
    { label: "process", path: "process" },
    { label: "ongoing projects", path: "on-going-projects" },
    { label: "portfolio", path: "portfolio" },
    { label: "contact", path: "contact" },
  ];

  const handleNameClick = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <footer className="w-full">
      <div className="w-full flex justify-between flex-wrap">
        <div className="w-full lg:w-[70%] pt-20 lg:pt-10 px-5 xl:pl-50 xl:pr-20">
          <div className="w-full flex items-center justify-start border-b pb-7 px-3">
            <Link to="/" className={"w-44"} onClick={handleNameClick}>
              <img src={theme === "light" ? lightLogo : darkLogo} alt="footer-logo" />
            </Link>
          </div>
          <div className="w-full flex flex-wrap items-center justify-evenly gap-10 md:gap-5 py-10 md:py-15 px-3">
            <div className="w-full md:w-auto">
              <h6 className="w-full text-center md:text-start text-2xl mb-1">Quick Links</h6>
              <ul className="w-3/4 flex flex-col md:flex-row items-center justify-center md:items-center flex-wrap gap-2 md:gap-3">
                {navs.map(nav => (
                  <li key={nav.label} className="capitalize">
                    <GsapNavLink to={`/${nav.path}`} isFooter>
                      {nav.label}
                    </GsapNavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col flex-wrap items-start justify-center gap-1">
              <div className="flex flex-wrap items-center justify-center gap-1">
                <MapPin size={20} />
                <address className="hover:underline">Hiriyur, Chitradurga, Karnataka</address>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1">
                <Mail size={20} />
                <a className="hover:underline" href="mailto:8147995278">
                  manojalur98@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1">
                <Phone size={20} />
                <a className="hover:underline" href="tel:8147995278">
                  +91-8147995278
                </a>
              </div>
            </div>
          </div>
          <h1 className="w-full text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-muted-foreground uppercase border-t border-b py-10 md:p-15">
            Tru Interiors
          </h1>
          <h5 className="py-10 px-3">&copy; {CURRENT_YEAR} Tru Interiors. All Right Reserved.</h5>
        </div>
        <div className="w-full lg:w-[30%] pt-10 pb-10 px-10 xl:px-20 lg:bg-secondary flex flex-wrap items-start justify-between gap-10">
          <h3 className="text-4xl font-bold">Have A Project In Mind? Let’s Talk.</h3>
          <div className="w-full flex items-center justify-center sm:justify-start">
            <Link
              to="/contact"
              className="w-50 md:w-55 h-50 md:h-55 flex items-center justify-center border lg:border-primary rounded-full cursor-pointer hover:bg-foreground/10 text-2xl"
            >
              Contact Us
              <ArrowUpRight />
            </Link>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-3">
            <h5 className="text-2xl">Follow Us</h5>
            <div className="w-full flex items-start gap-2">
              {SOCIALS.map(social => (
                <Button key={social.social} size="icon" className="active:scale-90">
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
