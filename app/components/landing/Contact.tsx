import { PhoneIcon } from "../ui/Icons";
import { THEME, CONTACT_PHONES } from "../../lib/constants";

export default function Contact() {
  return (
    <section
      className="px-4 py-12 md:px-8 md:py-16"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-xl font-bold text-white md:text-2xl">
          প্রয়োজনে ফোন করুন
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {CONTACT_PHONES.map((num) => (
            <a
              key={num}
              href={`tel:${num}`}
              className="font-heading inline-flex items-center gap-2 text-lg font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <PhoneIcon className="h-5 w-5" />
              {num}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
