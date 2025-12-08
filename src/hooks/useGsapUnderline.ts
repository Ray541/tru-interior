import { useRef, useEffect } from "react";
import gsap from "gsap";

export function useGsapUnderline(isActive: boolean = false) {
  const underlineRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const element = underlineRef.current;
    if (!element) return;

    // For active navs
    if (isActive) {
      gsap.set(element, {
        scaleX: 1,
        transformOrigin: "left center",
      });
      tweenRef.current = null;
      return;
    }

    gsap.set(element, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    tweenRef.current = gsap.to(element, {
      scaleX: 1,
      duration: 0.5,
      ease: "power3.inOut",
      paused: true,
    });
  }, [isActive]);

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

  return {
    underlineRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}
