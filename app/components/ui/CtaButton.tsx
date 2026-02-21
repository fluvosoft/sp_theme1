import type { ReactNode } from "react";
import { THEME } from "../../lib/constants";

type CtaButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function CtaButton({ children, href = "#order", className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`font-heading inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] ${className}`}
      style={{ backgroundColor: THEME.white, color: THEME.darkBlue }}
    >
      {children}
    </a>
  );
}
