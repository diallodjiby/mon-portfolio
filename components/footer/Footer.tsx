"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

/* ===== Scroll helper ===== */
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Footer() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  const skillsHref = pathname === "/" ? "#skills" : "/#skills";
  const projectsHref = pathname === "/" ? "#projects" : "/#projects";
  const aboutHref = pathname === "/" ? "#about" : "/#about";
  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  const linkClass = "hover:text-[#8B0027] transition cursor-pointer";

  return (
    <footer className="bg-[#FBF7F4] border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Photo.profil1.png"
                alt="Djiby Diallo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-900">Djiby Diallo</span>
            </div>
            <p className="text-sm text-gray-600">
              {lang === "fr" ? "Géomaticien / Cartographe." : "Geomatics Engineer / Cartographer."}
            </p>
          </div>

          {/* SECTIONS */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              {t.sections}
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                [lang === "fr" ? "Compétences" : "Skills", "skills", skillsHref],
                [lang === "fr" ? "Projets" : "Projects", "projects", projectsHref],
                [lang === "fr" ? "À propos" : "About", "about", aboutHref],
                [lang === "fr" ? "Contact" : "Contact", "contact", contactHref],
              ].map(([label, id, href]) => (
                <li key={id}>
                  <Link
                    href={href}
                    className={linkClass}
                    onClick={() => scrollToId(id as string)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PAGES */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              {t.pages}
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href={projectsHref}
                  className={linkClass}
                  onClick={() => scrollToId("projects")}
                >
                  {t.allProjects}
                </Link>
              </li>
              <li>
                <Link
                  href="/cv#cv"
                  className={linkClass}
                  onClick={() => {
                    setTimeout(() => scrollToId("cv"), 0);
                  }}
                >
                  CV
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-4">
              {t.contact}
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://www.linkedin.com/in/djiby-diallo-05a0842a8/"
                  target="_blank"
                  className={linkClass}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/diallodjiby"
                  target="_blank"
                  className={linkClass}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:diallodjiby1603@gmail.com"
                  className={linkClass}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>
            © 2026 Djiby DIALLO. {t.rights}
          </span>
          <div className="flex items-center gap-2">
            <span>
              {t.madeWith} <b>Next.js</b>
            </span>
            <span>•</span>
            <span>
              {t.hostedOn} <b>Vercel</b>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
