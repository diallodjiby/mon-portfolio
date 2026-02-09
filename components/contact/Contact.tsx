"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const email = "diallodjiby1603@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#FBF7F4]">
      <div className="mx-auto max-w-6xl px-6 py-28">

        {/* ===== TITRE ===== */}
        <p className="text-sm text-[#8B0027] font-medium mb-3">
          {t.section}
        </p>

        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-[42px] font-semibold">
            {t.title}
          </h2>

          <div className="flex items-end gap-1 ml-2">
            <span className="jump-dot jump-dot-1" />
            <span className="jump-dot jump-dot-2" />
            <span className="jump-dot jump-dot-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* TEXTE */}
          <div className="md:col-span-2 max-w-xl">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t.description}
            </p>

            <div className="flex items-center gap-3">
              <img src="/gmail.png" alt="Email" className="h-5" />

              <span className="text-[#8B0027] font-medium">
                {email}
              </span>

              <button
                onClick={copyEmail}
                className="
                  ml-3 flex items-center gap-2
                  rounded-full border border-gray-200
                  bg-gray-100 px-4 py-1.5 text-xs
                  font-medium text-gray-700
                  transition-all duration-200
                  hover:border-[#8B0027]
                  hover:bg-[#8B0027]
                  hover:text-white
                  active:scale-95
                "
              >
                {copied ? t.copied : t.copy}
              </button>
            </div>
          </div>

          {/* ===== CARTE À DROITE ===== */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:-translate-y-10">
            <h3 className="font-semibold mb-4">
              {t.summaryTitle}
            </h3>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex justify-between">
                <span>{t.location}</span>
                <span className="font-medium">Bordeaux, France</span>
              </li>
              <li className="flex justify-between">
                <span>{t.school}</span>
                <span className="font-medium">{t.schoolValue}</span>
              </li>
              <li className="flex justify-between">
                <span>{t.search}</span>
                <span className="font-medium">{t.searchValue}</span>
              </li>
              <li className="flex justify-between">
                <span>{t.languages}</span>
                <span className="font-medium">{t.languagesValue}</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/djiby-diallo-05a0842a8/"
                target="_blank"
                className="flex items-center justify-center gap-2 flex-1 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/diallodjiby"
                target="_blank"
                className="flex items-center justify-center gap-2 flex-1 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 transition"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
