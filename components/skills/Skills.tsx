"use client";

import SkillLogoSwitcher from "./SkillLogoSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  const techSkills = [
    { name: "R Studio", src: "/r-logo.png" },
    { name: "FME", src: "/fme.png" },
    { name: "ArcGIS", src: "/arcgis-logo.png" },
    { name: "Next.js", src: "/next-js.svg" },
    { name: "Python", src: "/python-logo.png" },
    { name: "HTML5", src: "/html.jpeg" },
    { name: "CSS3", src: "/CSS.jpeg" },
    { name: "JavaScript", src: "/js.jpeg" },
    { name: "QGIS", src: "/qgis-logo.png" },
    { name: "PostgreSQL", src: "/sql-logo.png" },
    { name: "Excel", src: "/excel-logo.png" },
    { name: "GitHub", src: "/Github.png" },
  ];

  return (
    <section id="skills" className="bg-[#FBF7F4] scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 pb-28">

        {/* TITRE */}
        <p className="text-sm text-[#8B0027] font-medium mb-3">
          {t.section}
        </p>

        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[42px] font-semibold">
            {t.title}
          </h2>

          {/* LOGO QUI DÉFILE */}
          <SkillLogoSwitcher />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* ================= TECH ================= */}
          <div>
            <p className="mb-6 font-medium">
              {t.technical}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex items-center gap-3
                    rounded-xl border border-gray-200
                    bg-white px-4 py-3
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="h-6 w-6"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SOFT ================= */}
          <div>
            <p className="mb-6 font-medium">
              {t.soft}
            </p>

            <div className="flex flex-wrap gap-3">
              {t.softList.map((soft: string) => (
                <span
                  key={soft}
                  className="rounded-xl border border-[#E6BFC9] bg-[#FBE9EE] px-4 py-2 text-sm text-[#8B0027]"
                >
                  {soft}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
