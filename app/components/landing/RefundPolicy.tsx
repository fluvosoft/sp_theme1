import { THEME, CTA_LABEL, CONTACT_PHONES } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

export default function RefundPolicy() {
  const phone = CONTACT_PHONES[0];
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-3xl">
        <h2
          className="font-heading py-3 text-center text-lg font-bold text-white md:text-xl"
          style={{ backgroundColor: THEME.darkBlue }}
        >
          আমাদের রিফান্ড পলিসি গুলো
        </h2>
        <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-gray-700">
          <p>
            সাপোর্টে যোগাযোগ করার পর প্রোডাক্ট ডেলিভারি পার্সনের কাছে হস্তান্তর করার নির্দেশনা
            অনুসরণ করুন।
          </p>
          <p>
            প্রোডাক্টে কোনো ত্রুটি থাকলে দ্রুত {phone} নম্বরে ফোন করুন।
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
    </section>
  );
}
