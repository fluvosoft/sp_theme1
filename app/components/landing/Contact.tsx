import { PhoneIcon } from "../ui/Icons";
import { THEME, CONTACT_PHONES } from "../../lib/constants";

export default function Contact() {
  return (
    <section
      className="px-4 py-16 md:px-8 md:py-20"
      style={{ backgroundColor: THEME.darkBlue }}
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-white md:text-2xl">
          প্রয়োজনে ফোন করুন
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CONTACT_PHONES.map((num) => (
            <a
              key={num}
              href={`tel:${num}`}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <PhoneIcon className="h-4 w-4" />
              {num}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
