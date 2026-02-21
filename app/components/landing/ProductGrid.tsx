import { THEME, PRODUCTS, CTA_LABEL } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

export default function ProductGrid() {
  return (
    <section
      className="px-4 py-14 md:px-8 md:py-20"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-xl font-bold text-white md:text-2xl lg:text-3xl">
          আমাদের প্রোডাক্ট সমূহ
        </h2>
        <p className="mt-2 text-center text-white/80">
          পছন্দের স্মার্টওয়াচ বা ব্যান্ড বেছে নিন
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-xl bg-white/10 shadow-lg ring-1 ring-white/10"
            >
              <div className="aspect-square w-full bg-white/5">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-3xl font-bold text-white/30">10:09</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-heading text-sm font-bold text-white md:text-base">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-bold" style={{ color: THEME.greenLight }}>
                  {product.priceBdt} টাকা
                </p>
                <div className="mt-4 flex-1" />
                <CtaButton className="mt-3 w-full justify-center text-sm">
                  {CTA_LABEL}
                </CtaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
