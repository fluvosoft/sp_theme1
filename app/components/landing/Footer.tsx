import { THEME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer
      className="border-t border-slate-200 py-8 text-center text-sm"
      style={{ backgroundColor: THEME.grayLight, color: THEME.grayText }}
    >
      <p className="font-body">
        Copyright © {new Date().getFullYear()} | Made with FluvoSoft only
      </p>
    </footer>
  );
}
