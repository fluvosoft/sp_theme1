import { THEME, PRODUCTS, CTA_LABEL } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

export default function ProductGrid() {
  return (
    <section
      className="px-4 py-16 md:px-8 md:py-24"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
          আমাদের প্রোডাক্ট সমূহ
        </h2>
        <p className="mt-3 text-center text-sm text-slate-400">
          পছন্দের স্মার্টওয়াচ বা ব্যান্ড বেছে নিন
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white/[0.06] transition-colors hover:bg-white/[0.08]"
            >
              <div className="aspect-square w-full">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-4xl font-medium tabular-nums text-white/20">10:09</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-sm font-semibold text-white md:text-base">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-semibold" style={{ color: THEME.greenLight }}>
                  {product.priceBdt} টাকা
                </p>
                <div className="mt-4 flex-1" />
                <CtaButton className="mt-4 w-full justify-center text-sm">
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
