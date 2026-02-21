import { THEME, CTA_LABEL } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";
import FaqAccordion from "../FaqAccordion";

export default function FaqSection() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20" style={{ backgroundColor: THEME.darkBlueDark }}>
      <div className="mx-auto max-w-2xl">
        <p className="font-heading text-center text-sm font-semibold uppercase tracking-widest text-white/80">
          প্রশ্নোত্তর
        </p>
        <h2 className="font-heading mt-2 text-center text-xl font-bold text-white md:text-2xl">
          নিচের প্রশ্নগুলো আমরা প্রতিনিয়ত পেয়ে থাকি
        </h2>
        <div className="mt-10">
          <FaqAccordion />
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButton>{CTA_LABEL}</CtaButton>
        </div>
      </div>
    </section>
  );
}
