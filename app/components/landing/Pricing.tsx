import { THEME, ORDER_UNIT_PRICE_BDT } from "../../lib/constants";

export default function Pricing() {
  return (
    <section
      className="px-4 py-12 md:px-8 md:py-16"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-lg text-white/90 md:text-xl">
          রেগুলার প্রাইজ <span className="line-through">(৩০০০ টাকা)</span>
        </p>
        <p className="mt-3 text-2xl font-bold text-white md:text-3xl" style={{ color: THEME.greenLight }}>
          অফারে মাত্র {ORDER_UNIT_PRICE_BDT} টাকা
        </p>
        <p className="mt-1 text-sm text-white/70">(সীমিত সময়ের জন্য)</p>
      </div>
    </section>
  );
}
