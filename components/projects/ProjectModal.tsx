"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  const { lang } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6">
      {/* BACKDROP */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative z-10
          max-w-4xl w-full
          rounded-3xl bg-white
          overflow-hidden
          shadow-2xl
          animate-fade-in
        "
      >
        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title[lang]}
          className="h-72 w-full object-cover"
        />

        {/* CONTENU */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold mb-1">
                {project.title[lang]}
              </h3>
              <p className="text-sm text-gray-500">
                {project.location[lang]}
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-700 mb-4">
            {project.description[lang]}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            {project.author[lang]}
          </p>

          <p className="text-sm text-gray-400 mb-6">
            {project.date[lang]}
          </p>

          <div className="flex gap-3 mb-6">
            {project.techs?.map((tech: string, i: number) => (
              <img key={i} src={tech} className="h-7 w-7 opacity-80" />
            ))}
          </div>

          <a
            href={project.pdf}
            target="_blank"
            className="
              inline-block rounded-full bg-[#8B0027]
              px-6 py-2 text-sm text-white
              hover:bg-[#6F001F] transition
            "
          >
            {lang === "fr" ? "Ouvrir le PDF" : "Open PDF"}
          </a>
        </div>
      </div>
    </div>
  );
}
