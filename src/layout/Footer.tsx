import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedNavLink } from "@/components/gsap-components/animated-nav-link";

const CURRENT_YEAR = new Date().getFullYear();

const SOCIALS = [
  { social: "Linked In", icon: <FaLinkedinIn /> },
  { social: "Facebook", icon: <FaFacebook /> },
  { social: "Instagram", icon: <FaInstagram /> },
];

export default function Footer() {
  const navs1 = [
    { label: "home", path: "" },
    { label: "about us", path: "about-us" },
    { label: "services", path: "services" },
    { label: "process", path: "process" },
  ];
  const navs2 = [
    { label: "ongoing projects", path: "on-going-projects" },
    { label: "portfolio", path: "portfolio" },
    { label: "contact", path: "contact" },
  ];

  const handleNameClick = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <footer className="w-full px-3 bg-accent relative">
      <div className="max-w-340 mx-auto">
        <div className="w-full flex flex-wrap lg:flex-nowrap items-start justify-between gap-10 md:gap-5 py-7 px-3">
          <div className="flex-1 flex flex-col items-start gap-2 md:gap-3">
            <Link to="/" className="text-center text-6xl font-black logo" onClick={handleNameClick}>
              TRU
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tru Interiors is a full-service interior design studio specializing in elegant,
              functional, and customized spaces. With a commitment to craftsmanship and detail, we
              transform ideas into inspiring environments tailored to your lifestyle and vision.
            </p>
          </div>

          <ul className="w-full md:flex-1 flex flex-col flex-wrap items-start md:items-center gap-2 md:gap-3">
            {navs1.map(nav => (
              <li key={nav.label}>
                <AnimatedNavLink to={`/${nav.path}`}>{nav.label}</AnimatedNavLink>
              </li>
            ))}
          </ul>

          <ul className="w-full md:flex-1 flex flex-col flex-wrap items-start md:items-center gap-2 md:gap-3">
            {navs2.map(nav => (
              <li key={nav.label}>
                <AnimatedNavLink to={`/${nav.path}`}>{nav.label}</AnimatedNavLink>
              </li>
            ))}
          </ul>

          <div className="flex-1 flex flex-col items-start md:items-end gap-3 text-sm">
            <div className="flex gap-2">
              <MapPin size={20} />
              <address>Hiriyur, Chitradurga, Karnataka</address>
            </div>
            <div className="flex gap-2">
              <Mail size={20} />
              <a className="hover:underline" href="mailto:manojalur98@gmail.com">
                manojalur98@gmail.com
              </a>
            </div>
            <div className="flex gap-2">
              <Phone size={20} />
              <a className="hover:underline" href="tel:8147995278">
                +91-8147995278
              </a>
            </div>

            <div className="flex gap-2">
              {SOCIALS.map(social => (
                <Button key={social.social} size="icon" className="active:scale-90">
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <h1 className="text-center text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-black text-muted-foreground uppercase border-t border-b py-10">
          Tru Interiors
        </h1>

        <h5 className="text-center text-sm py-5 px-3">
          &copy; {CURRENT_YEAR} Tru Interiors. All Right Reserved.
        </h5>
      </div>
    </footer>
  );
}
