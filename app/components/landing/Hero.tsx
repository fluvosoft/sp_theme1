import { THEME, CTA_LABEL, PRODUCT_NAME, ORDER_UNIT_PRICE_BDT } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

export default function Hero() {
  return (
    <section
      className="relative px-4 py-16 md:px-8 md:py-24 lg:py-28"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-center text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          {PRODUCT_NAME}
        </h1>
        <p className="mt-6 text-center text-base text-slate-300 md:text-lg">
          প্রিয়জনকে উপহার দিন, খুশি হবেই{" "}
          <span
            className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ backgroundColor: "rgba(45, 212, 191, 0.2)", color: THEME.greenLight }}
          >
            মাত্র {ORDER_UNIT_PRICE_BDT} টাকায়
          </span>
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 md:mt-14 md:gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square w-full overflow-hidden rounded-2xl bg-white/[0.06]"
              aria-hidden
            >
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  className="h-12 w-12 text-white/20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton>{CTA_LABEL}</CtaButton>
        </div>
      </div>
    </section>
  );
}
