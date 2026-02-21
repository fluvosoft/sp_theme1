import { THEME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer
      className="py-8 text-center text-sm md:py-10"
      style={{ backgroundColor: THEME.grayLight, color: THEME.grayText }}
    >
      <p className="font-body">
        Copyright © {new Date().getFullYear()} | Made with FluvoSoft 
      </p>
    </footer>
  );
}
