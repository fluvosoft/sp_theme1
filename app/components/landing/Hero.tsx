import { THEME, CTA_LABEL, PRODUCT_NAME, ORDER_UNIT_PRICE_BDT } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

export default function Hero() {
  return (
    <section
      className="px-4 py-12 md:px-8 md:py-16 lg:py-20"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-center text-2xl font-bold leading-snug text-white md:text-4xl lg:text-[2.75rem]">
          {PRODUCT_NAME}
        </h1>
        <p className="mt-4 text-center text-base text-white md:text-lg">
          বউ কিংবা গার্লফ্রেন্ড যাকেই দিবেন খুশি হবেই{" "}
          <span
            className="inline-flex items-center rounded-full border-2 px-3 py-0.5 font-semibold"
            style={{ borderColor: THEME.green, color: THEME.greenLight }}
          >
            মাত্র {ORDER_UNIT_PRICE_BDT} টাকায়
          </span>
        </p>

        {/* Three image placeholders */}
        <div className="mt-8 grid grid-cols-3 gap-3 md:mt-10 md:gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square w-full overflow-hidden rounded-lg bg-white/10"
              aria-hidden
            >
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  className="h-12 w-12 text-white/30 md:h-16 md:w-16"
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

        <div className="mt-8 flex justify-center md:mt-10">
          <CtaButton>{CTA_LABEL}</CtaButton>
        </div>
      </div>
    </section>
  );
}
