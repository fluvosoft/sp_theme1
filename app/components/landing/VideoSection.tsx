import { THEME, CTA_LABEL } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your video ID

export default function VideoSection() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16" style={{ backgroundColor: THEME.darkBlueDark }}>
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-center text-xl font-bold text-white md:text-2xl">
          দেখুন কীভাবে কাজ করে
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10 md:mt-8">
          <div className="aspect-video w-full">
            <iframe
              title="Saffron Goat Milk Soap"
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-6 text-center text-base leading-relaxed text-white/95 md:text-lg">
          ত্বক যতই কালো হোক না কেন,{" "}
          <span className="font-semibold" style={{ color: THEME.greenLight }}>
            Saffron Goat Milk Soap
          </span>{" "}
          ব্যবহারে মাত্র ৭ দিনে ত্বক হবে স্পটলেস, চকচকে দুধের মতো ফর্সা, দাগহীন, মসৃণ ও নরম।
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton>{CTA_LABEL}</CtaButton>
        </div>
      </div>
    </section>
  );
}
