import { Link, useMatch } from "react-router-dom";
import { useGsapUnderline } from "@/hooks/useGsapUnderline";
import { cn } from "@/lib/utils";

type AnimatedNavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  enableActive?: boolean; // When true, disables isActive check and uses hover animation only (e.g. in footer).
  textTransform?: string;
  height?: string | number;
};

export function AnimatedNavLink({
  to,
  children,
  onClick,
  enableActive = false,
  textTransform = "capitalize",
  height = "0.5",
}: AnimatedNavLinkProps) {
  const match = useMatch(to);
  const isActive = enableActive && Boolean(match);
  const { underlineRef, handleMouseEnter, handleMouseLeave } = useGsapUnderline(isActive);

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        `relative inline-block font-normal ${textTransform} text-sm tracking-wider transition`,
        isActive ? "text-muted-foreground font-semibold" : "text-primary"
      )}
    >
      {children}
      <span
        ref={underlineRef}
        className={cn(
          `absolute left-0 -bottom-1 w-full bg-primary origin-left`,
          isActive ? "scale-x-100" : "scale-x-0",
          typeof height === "string" && `h-${height}`
        )}
        style={typeof height === "number" ? { height: `${height}px` } : undefined}
      />
    </Link>
  );
}
