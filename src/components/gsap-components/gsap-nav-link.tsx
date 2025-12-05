import { NavLink, useMatch } from "react-router-dom";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type GsapNavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function GsapNavLink({ to, children, onClick }: GsapNavLinkProps) {
  const underlineRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Detect if current route matches "to"
  const isActive = useMatch(to);

  useEffect(() => {
    if (!underlineRef.current) return;

    if (isActive) {
      gsap.set(underlineRef.current, {
        scaleX: 1,
        transformOrigin: "left center",
      });
      tweenRef.current = null;
      return;
    }

    const element = underlineRef.current;

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
  }, [isActive]);

  const handleMouseEnter = () => {
    if (!isActive) {
      // Set anchor left → grow (left → right)
      gsap.set(underlineRef.current, { transformOrigin: "left center" });
      tweenRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      // Set anchor right → collapse (left → right)
      gsap.set(underlineRef.current, { transformOrigin: "right center" });
      tweenRef.current?.reverse();
    }
  };

  return (
    <NavLink
      to={to}
      className={cn(
        "relative uppercase font-bold text-sm tracking-wider transition",
        isActive ? "text-muted-foreground" : "text-primary"
      )}
      onClick={onClick}
    >
      <span
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span
          ref={underlineRef}
          className={cn(
            "absolute left-0 -bottom-1 h-0.5 w-full bg-primary",
            isActive ? "scale-x-100" : "scale-x-0"
          )}
        />
      </span>
    </NavLink>
  );
}
