"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  const email = "diallodjiby1603@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="bg-[#FBF7F4] scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE ================= */}
          <div className="relative">
            <img
              src="/Photo.profil1.png"
              alt="Djiby Diallo"
              className="w-[300px] rounded-[28px] shadow-lg"
            />

            {/* Badge main */}
            <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow animate-wave">
              👋
            </div>
          </div>

          {/* ================= TEXTE ================= */}
          <div>
            <p className="text-sm text-[#8B0027] font-medium mb-3">
              {t.section}
            </p>

            <h2 className="text-[42px] leading-tight font-semibold mb-6">
              {t.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
              {t.description}
            </p>

            {/* ================= EMAIL ================= */}
            <div className="flex items-center gap-3">
              <img src="/gmail.png" alt={translations[lang].hero.email} className="h-5" />

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
                  cursor-pointer
                "
              >
                {/* Icône copier */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 12h6a2 2 0 002-2v-8a2 2 0 00-2-2h-6a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>

                {copied ? t.copied : t.copy}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
