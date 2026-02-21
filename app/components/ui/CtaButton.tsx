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
      className={`font-heading inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-medium transition-all duration-200 hover:opacity-90 active:opacity-95 ${className}`}
      style={{
        backgroundColor: THEME.greenLight,
        color: THEME.darkBlue,
      }}
    >
      {children}
    </a>
  );
}
