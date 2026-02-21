import { THEME, CTA_LABEL } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

const REVIEW_PLACEHOLDER_COUNT = 4;

export default function Reviews() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20" style={{ backgroundColor: THEME.darkBlue }}>
      <div className="mx-auto max-w-5xl">
        <p className="font-heading text-center text-sm font-semibold uppercase tracking-widest text-white/80">
          গ্রাহকদের মতামত
        </p>
        <h2 className="font-heading mt-2 text-center text-xl font-bold text-white md:text-2xl lg:text-3xl">
          আমাদের কাস্টমার রিভিউ
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {Array.from({ length: REVIEW_PLACEHOLDER_COUNT }, (_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white/10 p-4 shadow-lg ring-1 ring-white/10 backdrop-blur-sm md:p-5"
            >
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-white/5">
                <span className="text-sm text-white/50">কাস্টমার রিভিউ {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButton>{CTA_LABEL}</CtaButton>
        </div>
      </div>
    </section>
  );
}
