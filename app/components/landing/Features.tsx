import { THEME, CTA_LABEL, PRODUCT_NAME, ORDER_UNIT_PRICE_BDT } from "../../lib/constants";
import { CheckIcon } from "../ui/Icons";
import CtaButton from "../ui/CtaButton";

const FEATURES = [
  "Bluetooth calling and music playback",
  "Heart rate monitoring",
  "Blood pressure monitoring",
  "Sleep tracking",
  "Activity tracking",
  "Calorie tracking",
  "Sedentary reminder",
  "Remote camera control",
  "Water resistance rating of IP67",
];

export default function Features() {
  return (
    <section
      className="px-4 py-16 md:px-8 md:py-24"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
          কেন আপনার &quot;{PRODUCT_NAME}&quot; কেনা উচিৎ?
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl bg-white/[0.06] md:max-w-sm">
            <div className="aspect-square w-full">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center text-white/40">
                  <span className="text-5xl font-medium tabular-nums">10:09</span>
                  <p className="mt-3 text-sm">Smartwatch</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <ul className="space-y-3">
              {FEATURES.map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-200 md:text-base">
                  <span style={{ color: THEME.greenLight }}>
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-white/[0.06] p-5">
              <p className="text-sm text-slate-400">
                রেগুলার প্রাইজ <span className="line-through">(৩০০০ টাকা)</span>
              </p>
              <p className="mt-1 text-2xl font-semibold" style={{ color: THEME.greenLight }}>
                অফারে মাত্র {ORDER_UNIT_PRICE_BDT} টাকা
              </p>
              <p className="mt-0.5 text-xs text-slate-500">(সীমিত সময়ের জন্য)</p>
            </div>
            <div>
              <CtaButton className="min-w-[180px]">{CTA_LABEL}</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
