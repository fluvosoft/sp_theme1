import { THEME, CTA_LABEL, CONTACT_PHONES } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

export default function RefundPolicy() {
  const phone = CONTACT_PHONES[0];
  return (
    <section className="bg-slate-50 px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2
          className="font-heading rounded-t-xl py-4 text-center text-lg font-semibold text-white md:py-5 md:text-xl"
          style={{ backgroundColor: THEME.darkBlue }}
        >
          আমাদের রিফান্ড পলিসি গুলো
        </h2>
        <div className="rounded-b-xl border border-t-0 border-slate-200 bg-white p-6 md:p-8">
          <div className="space-y-4 font-body text-[15px] leading-relaxed text-slate-600">
            <p>
              সাপোর্টে যোগাযোগ করার পর প্রোডাক্ট ডেলিভারি পার্সনের কাছে হস্তান্তর করার নির্দেশনা
              অনুসরণ করুন।
            </p>
            <p>
              প্রোডাক্টে কোনো ত্রুটি থাকলে দ্রুত <strong className="text-slate-800">{phone}</strong> নম্বরে ফোন করুন।
            </p>
            <p>
              ডেলিভারি পার্সনের সামনেই প্রোডাক্ট ভালোভাবে পরীক্ষা করুন। সন্তুষ্ট না হলে ডেলিভারি
              চার্জ পরিশোধ করে রিটার্ন করতে পারবেন।
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <CtaButton>{CTA_LABEL}</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
