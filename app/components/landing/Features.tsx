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
      className="px-4 py-14 md:px-8 md:py-20"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-xl font-bold text-white md:text-2xl lg:text-3xl">
          কেন আপনার &quot;{PRODUCT_NAME}&quot; কেনা উচিৎ?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left: watch image */}
          <div className="aspect-square max-w-xs overflow-hidden rounded-xl bg-white/10 md:max-w-full">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center text-white/50">
                <span className="text-4xl font-bold">10:09</span>
                <div className="mt-2 flex justify-center">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <p className="mt-1 text-xs">Smartwatch</p>
              </div>
            </div>
          </div>

          {/* Right: feature list + pricing + CTA */}
          <div className="flex flex-col justify-center space-y-6">
            <ul className="space-y-2">
              {FEATURES.map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white md:text-base">
                  <span style={{ color: THEME.green }}>
                    <CheckIcon />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-white/5 p-4 text-center">
              <p className="text-lg text-white/90">
                রেগুলার প্রাইজ <span className="line-through">(৩০০০ টাকা)</span>
              </p>
              <p className="mt-2 text-2xl font-bold" style={{ color: THEME.greenLight }}>
                অফারে মাত্র {ORDER_UNIT_PRICE_BDT} টাকা
              </p>
              <p className="mt-1 text-sm text-white/70">(সীমিত সময়ের জন্য)</p>
            </div>
            <div className="flex justify-center">
              <CtaButton>{CTA_LABEL}</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
