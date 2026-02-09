"use client";

import Carousel from "./Carousel";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="bg-[#FBF7F4] scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 items-start">

          {/* ================= LEFT : TEXTE ================= */}
          <div className="max-w-xl mt-20">
            <p className="text-sm text-[#8B0027] font-medium mb-3">
              {t.job}
            </p>

            <h1 className="text-[52px] leading-[1.05] font-semibold mb-5">
              {t.name}
              <span className="text-[#8B0027]">.</span>
            </h1>

            <p className="text-[17px] leading-relaxed text-gray-600 mb-6">
              {t.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 availability-dot"></span>
              {t.availability}
            </div>

            <div className="mb-8">
              <p className="text-xs tracking-widest text-gray-400 mb-2">
                {t.languagesLabel}
              </p>
              <p className="text-sm font-medium">
                {t.languages}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:diallodjiby1603@gmail.com"
                className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-sm hover:bg-white transition"
              >
                <img src="/gmail.png" alt="Email" className="h-5 w-5" />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/djiby-diallo-05a0842a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-sm hover:bg-white transition"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="h-5 w-5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/diallodjiby"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-sm hover:bg-white transition"
              >
                <img src="/Github.png" alt="GitHub" className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>

          {/* ================= RIGHT : CAROUSEL ================= */}
          <div className="relative mt-[-50px] ml-auto w-[300px]">
            <Carousel />
          </div>

        </div>
      </div>
    </section>
  );
}
