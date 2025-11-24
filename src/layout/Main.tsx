import type { FC, ReactNode } from "react";

interface MainProps {
  className?: string;
  children: ReactNode;
}

const Main: FC<MainProps> = ({ className, children }) => {
  return <main className={`${className}`}>{children}</main>;
};

export default Main;
