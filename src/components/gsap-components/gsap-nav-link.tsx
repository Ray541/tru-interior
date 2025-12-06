import { Link, NavLink, useMatch } from "react-router-dom";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type GsapNavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  isFooter?: boolean;
};

export function GsapNavLink({ to, children, onClick, isFooter = false }: GsapNavLinkProps) {
  const underlineRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const matches = useMatch(to);
  const isActive = !isFooter ? matches : false;

  useEffect(() => {
    if (!underlineRef.current) return;

    const element = underlineRef.current;

    if (isFooter) {
      // Initialize underline hidden for footer
      gsap.set(element, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      tweenRef.current = gsap.to(element, {
        scaleX: 1,
        duration: 0.4,
        ease: "power3.inOut",
        paused: true,
      });

      return;
    }

    if (isActive) {
      gsap.set(element, {
        scaleX: 1,
        transformOrigin: "left center",
      });
      tweenRef.current = null;
      return;
    }

    tweenRef.current = gsap.fromTo(
      element,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power3.inOut",
        paused: true,
      }
    );
  }, [isActive, isFooter]);

  const handleMouseEnter = () => {
    if (!isActive) {
      gsap.set(underlineRef.current, { transformOrigin: "left center" });
      tweenRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      gsap.set(underlineRef.current, { transformOrigin: "right center" });
      tweenRef.current?.reverse();
    }
  };

  const linkClasses = cn(
    "relative uppercase font-bold text-sm tracking-wider transition",
    !isFooter && isActive ? "text-muted-foreground" : "text-primary"
  );

  const underlineClasses = cn(
    "absolute left-0 -bottom-1 h-0.5 w-full bg-primary",
    // For non-footer active links show underline
    !isFooter && isActive ? "scale-x-100" : "scale-x-0"
  );

  return !isFooter ? (
    <NavLink to={to} className={linkClasses} onClick={onClick}>
      <span
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span ref={underlineRef} className={underlineClasses} />
      </span>
    </NavLink>
  ) : (
    <Link to={to} className={linkClasses} onClick={onClick}>
      <span
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span
          ref={underlineRef}
          className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary scale-x-0 origin-left"
        />
      </span>
    </Link>
  );
}
