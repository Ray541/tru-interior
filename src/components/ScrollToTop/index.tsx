import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdArrowUpward } from "react-icons/md";

type ScrollToTopProps = {
  className?: string;
};

const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    isVisible && (
      <Button
        variant="default"
        size="icon"
        className={`pointer-events-none ${className}`}
        onClick={scrollToTop}
      >
        <MdArrowUpward />
      </Button>
    )
  );
};

export default ScrollToTop;
