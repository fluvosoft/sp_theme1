"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { LockIcon } from "../ui/Icons";
import {
  THEME,
  ORDER_FORM_ID,
  PRODUCTS,
  type ProductId,
  SHIPPING_INSIDE_DHAKA_BDT,
  SHIPPING_OUTSIDE_DHAKA_BDT,
} from "../../lib/constants";

const initialQuantities: Record<ProductId, number> = {
  y100: 1,
  m8: 0,
  x5: 0,
  band2: 0,
};

export default function OrderForm() {
  const [quantities, setQuantities] = useState<Record<ProductId, number>>(initialQuantities);
  const [shipping, setShipping] = useState<"inside" | "outside">("outside");

  const deliveryCharge =
    shipping === "inside" ? SHIPPING_INSIDE_DHAKA_BDT : SHIPPING_OUTSIDE_DHAKA_BDT;
  const subtotal = PRODUCTS.reduce(
    (sum, p) => sum + (quantities[p.id] ?? 0) * p.priceBdt,
    0
  );
  const total = subtotal + deliveryCharge;
  const hasAnyProduct = subtotal > 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hasAnyProduct) return;
    // TODO: wire to backend or order service
  }

  function handleDecrement(productId: ProductId) {
    return (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setQuantities((q) => ({
        ...q,
        [productId]: Math.max(0, (q[productId] ?? 0) - 1),
      }));
    };
  }

  function handleIncrement(productId: ProductId) {
    return (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setQuantities((q) => ({
        ...q,
        [productId]: Math.min(10, (q[productId] ?? 0) + 1),
      }));
    };
  }

  return (
    <section
      id={ORDER_FORM_ID}
      className="bg-white px-4 py-8 md:px-8 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="py-4 text-center text-sm font-medium text-white md:py-5 md:text-base"
          style={{ backgroundColor: THEME.darkBlue }}
        >
          অর্ডার করতে নিচের ফর্মে আপনার নাম, সম্পূর্ন ঠিকানা এবং মোবাইল নম্বর লিখে Place Order
          বাটনে ক্লিক করুন
        </div>

        <div
          className="py-3 text-center text-sm text-white md:py-4"
          style={{ backgroundColor: THEME.darkBlueLight }}
        >
          <p>অর্ডার করতে অগ্রিম কোন টাকা দিতে হবে না, পন্য হাতে পেয়ে দেখে টাকা দিবেন</p>
          <p className="mt-1 font-semibold">১০০% ক্যাশ অন হোম ডেলিভারি</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 overflow-hidden rounded-xl border-2 bg-white shadow-lg"
          style={{ borderColor: THEME.darkBlue }}
        >
          <div
            className="h-1.5 w-full"
            style={{ backgroundColor: THEME.darkBlueLight }}
            aria-hidden
          />

          <div className="space-y-0">
            <div className="grid grid-cols-1 gap-4 border-b border-gray-200 p-4 md:grid-cols-2 lg:p-5">
              <div>
                <h3 className="font-heading text-sm font-bold text-gray-800">Your Products</h3>
                <div className="mt-2 space-y-3">
                  {PRODUCTS.map((product) => {
                    const qty = quantities[product.id] ?? 0;
                    return (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50/50 p-3"
                      >
                        <input
                          type="checkbox"
                          checked={qty > 0}
                          readOnly
                          className="h-4 w-4 shrink-0 rounded"
                          style={{ accentColor: THEME.darkBlue }}
                        />
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-gray-300">
                          <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                            img
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="inline-flex items-center rounded-md border border-gray-300 bg-white">
                              <button
                                type="button"
                                onClick={handleDecrement(product.id)}
                                className="flex h-8 w-8 shrink-0 cursor-pointer select-none items-center justify-center rounded-l border-0 bg-transparent text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                                aria-label="কম করুন"
                              >
                                −
                              </button>
                              <span className="flex h-8 min-w-[2rem] items-center justify-center border-x border-gray-200 bg-white text-sm font-medium tabular-nums text-gray-900">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={handleIncrement(product.id)}
                                className="flex h-8 w-8 shrink-0 cursor-pointer select-none items-center justify-center rounded-r border-0 bg-transparent text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                                aria-label="বাড়ান"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-semibold text-gray-800">
                              {product.priceBdt}.00৳
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="font-heading text-sm font-bold text-gray-800">Your order</h3>
                <div className="mt-2 flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="px-3 py-2 text-left font-semibold text-gray-800">Product</th>
                        <th className="px-3 py-2 text-right font-semibold text-gray-800">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRODUCTS.filter((p) => (quantities[p.id] ?? 0) > 0).map((product) => (
                        <tr key={product.id} className="border-b border-gray-100">
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 shrink-0 overflow-hidden rounded bg-gray-200">
                                <div className="flex h-full w-full items-center justify-center text-[10px] text-gray-500">
                                  img
                                </div>
                              </div>
                              <span className="font-medium text-gray-900">
                                {product.name} × {quantities[product.id]}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-2 text-right font-medium text-gray-900">
                            {(quantities[product.id] * product.priceBdt).toFixed(2)}৳
                          </td>
                        </tr>
                      ))}
                      {!hasAnyProduct && (
                        <tr>
                          <td colSpan={2} className="px-3 py-4 text-center text-gray-500">
                            কোন প্রোডাক্ট সিলেক্ট নেই
                          </td>
                        </tr>
                      )}
                      {hasAnyProduct && (
                        <>
                          <tr className="border-b border-gray-100">
                            <td className="px-3 py-1.5 font-medium text-gray-700">Subtotal</td>
                            <td className="px-3 py-1.5 text-right font-medium text-gray-900">
                              {subtotal}.00৳
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="px-3 py-1.5 font-medium text-gray-700">Delivery charge</td>
                            <td className="px-3 py-1.5 text-right font-medium text-gray-900">
                              {deliveryCharge}.00৳
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-1.5 font-semibold text-gray-800">Total</td>
                            <td className="px-3 py-1.5 text-right font-bold text-gray-900">
                              {total}.00৳
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr,340px]">
              <div className="border-b border-gray-200 p-4 lg:border-b-0 lg:border-r lg:p-5">
                <h3 className="font-heading mb-3 text-sm font-bold text-gray-800">
                  অর্ডার করার জন্য নিচের ফর্মটি পূরণ করুন।
                </h3>

                <div className="space-y-3">
                  <div>
                    <label htmlFor="order-name" className="block text-xs font-semibold text-gray-800">
                      আপনার নাম *
                    </label>
                    <input
                      id="order-name"
                      type="text"
                      required
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/20"
                      style={{ borderColor: "inherit" }}
                      placeholder="এখানে আপনার নাম লিখুন"
                    />
                  </div>
                  <div>
                    <label htmlFor="order-phone" className="block text-xs font-semibold text-gray-800">
                      আপনার ফোন নাম্বার *
                    </label>
                    <input
                      id="order-phone"
                      type="tel"
                      required
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/20"
                      placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন"
                    />
                  </div>
                  <div>
                    <label htmlFor="order-address" className="block text-xs font-semibold text-gray-800">
                      আপনার সম্পূর্ণ ঠিকানা *
                    </label>
                    <textarea
                      id="order-address"
                      required
                      rows={2}
                      className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/20"
                      placeholder="এলাকার নাম, থানা/উপজেলার নাম, জেলার নাম লিখুন.."
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-heading text-sm font-bold text-gray-800">Shipping</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 p-2.5 text-sm hover:bg-gray-50">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === "outside"}
                        onChange={() => setShipping("outside")}
                        className="h-4 w-4"
                        style={{ accentColor: THEME.darkBlue }}
                      />
                      <span className="text-gray-800">ঢাকার বাহিরে:</span>
                      <span className="font-semibold text-gray-900">
                        {SHIPPING_OUTSIDE_DHAKA_BDT}.00৳
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 p-2.5 text-sm hover:bg-gray-50">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === "inside"}
                        onChange={() => setShipping("inside")}
                        className="h-4 w-4"
                        style={{ accentColor: THEME.darkBlue }}
                      />
                      <span className="text-gray-800">ঢাকার ভিতরে:</span>
                      <span className="font-semibold text-gray-900">
                        {SHIPPING_INSIDE_DHAKA_BDT}.00৳
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-gray-50/50 p-4 lg:p-5">
                <div className="mt-2">
                  <h3 className="font-heading text-sm font-bold text-gray-800">
                    Cash on delivery
                  </h3>
                  <div className="mt-1.5 rounded-lg border border-gray-200 bg-gray-100/80 px-3 py-2 text-xs text-gray-600">
                    Pay with cash upon delivery.
                  </div>
                </div>

                <p className="mt-4 text-[11px] leading-relaxed text-gray-500">
                  Your personal data will be used to process your order, support your experience
                  throughout this website, and for other purposes described in our{" "}
                  <a
                    href="#"
                    className="font-medium underline focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    privacy policy
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  disabled={!hasAnyProduct}
                  className="font-heading mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ backgroundColor: THEME.darkBlue }}
                >
                  <LockIcon className="h-4 w-4" />
                  এখানে ক্লিক দিয়ে অর্ডার কনফার্ম করুন {total}.00৳
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
