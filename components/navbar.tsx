"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const t = translations[lang].navbar;

  const isPortfolio = pathname === "/";
  const isCV = pathname.startsWith("/cv");

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCV = () => {
    const el = document.getElementById("cv");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePortfolioClick = () => {
    if (isPortfolio) scrollToHero();
    else router.push("/#hero");
  };

  const handleCVClick = () => {
    if (isCV) scrollToCV();
    else router.push("/cv#cv");
  };

  const activeClass =
    "rounded-full bg-[#8B0027] px-4 py-2 text-sm font-medium text-white";
  const inactiveClass =
    "rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition";

  // 👉 Impression du CV (au lieu du téléchargement PDF)
  const handlePrintCV = () => {
    window.print();
  };

  return (
    <header className="print:hidden w-full bg-[#FBF7F4] border-b border-[#E5E1DC] sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* ===== GAUCHE ===== */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePortfolioClick}
            className={`cursor-pointer transition ${
              isPortfolio ? activeClass : inactiveClass
            }`}
          >
            {t.portfolio}
          </button>

          <button
            onClick={handleCVClick}
            className={`cursor-pointer transition ${
              isCV ? activeClass : inactiveClass
            }`}
          >
            {t.cv}
          </button>
        </div>

        {/* ===== DROITE ===== */}
        <div className="flex items-center gap-4">
          {/* CTA dynamique */}
          {!isCV ? (
            <button
              onClick={() => router.push("/cv")}
              className="cursor-pointer flex items-center gap-2 rounded-full bg-[#8B0027] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              <img src="/libreofficewriter.svg" alt="" className="h-4 w-4" />
              {t.seeCV}
            </button>
          ) : (
            <button
              onClick={handlePrintCV}
              className="cursor-pointer flex items-center gap-2 rounded-full bg-[#8B0027] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              <img src="/libreofficewriter.svg" alt="" className="h-4 w-4" />
              {lang === "fr" ? "Imprimer le CV" : "Print CV"}
            </button>
          )}

          {/* ===== LANG SWITCH ===== */}
          <div className="relative flex items-center bg-[#F3F3F3] rounded-full p-1 shadow-sm">
            <div
              className={`
                absolute top-1 bottom-1 w-[42px]
                rounded-full bg-white
                transition-all duration-300 ease-out
                ${lang === "fr" ? "left-1" : "left-[46px]"}
              `}
            />

            <button
              onClick={() => setLang("fr")}
              className={`relative z-10 w-[42px] h-[28px] text-xs font-medium transition-colors duration-300 ${
                lang === "fr"
                  ? "text-[#8B0027]"
                  : "text-gray-500 hover:text-[#8B0027]"
              }`}
            >
              FR
            </button>

            <button
              onClick={() => setLang("en")}
              className={`relative z-10 w-[42px] h-[28px] text-xs font-medium transition-colors duration-300 ${
                lang === "en"
                  ? "text-[#8B0027]"
                  : "text-gray-500 hover:text-[#8B0027]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
