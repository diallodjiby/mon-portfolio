"use client";

import { useState } from "react";
import JumpBars from "./JumpBars";
import ProjectModal from "@/components/projects/ProjectModal";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations"; // ✅ AJOUT


export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;   // ✅ MANQUANT
  const [selectedProject, setSelectedProject] = useState<any>(null);


  const projects = [
    {
      title: {
        fr: "Parc Normandie – Maine",
        en: "Normandie–Maine Regional Park",
      },
      location: {
        fr: "Pays de la Loire et Normandie",
        en: "Pays de la Loire & Normandy",
      },
      image: "/Chantier-école.png",
      description: {
        fr: "Diagnostic de la forêt du Parc Normandie-Maine dans le cadre d’un observatoire forestier.",
        en: "Forest assessment of the Normandie–Maine Regional Park as part of a forest observatory.",
      },
      author: {
        fr: "Travail en groupe",
        en: "Group project",
      },
      date: {
        fr: "Octobre 2023 – Mars 2024",
        en: "October 2023 – March 2024",
      },
      pdf: "/Méthodologie_groupe_1.pdf",
      techs: ["/qgis-logo.png", "/sql-logo.png"],
    },
    {
      title: {
        fr: "Pays du Mans",
        en: "Pays du Mans",
      },
      location: {
        fr: "Le Mans",
        en: "Le Mans",
      },
      image: "/Pays_du_Mans.png",
      description: {
        fr: "Diagnostic territorial de l'attractivité du Pays du Mans.",
        en: "Territorial assessment of the attractiveness of the Pays du Mans area.",
      },
      author: {
        fr: "Djiby Diallo",
        en: "Djiby Diallo",
      },
      date: {
        fr: "Janvier 2024 – Février 2024",
        en: "January 2024 – February 2024",
      },
      pdf: "/Diagnostic_Territorial.pdf",
      techs: ["/qgis-logo.png", "/excel-logo.png"],
    },
    {
      title: {
        fr: "Rapport de stage",
        en: "Internship Report",
      },
      location: {
        fr: "Département de la Sarthe",
        en: "Sarthe Department",
      },
      image: "/Rapport_de_stage.png",
      description: {
        fr: "Étude sur le logement des étudiants.",
        en: "Study on student housing.",
      },
      author: {
        fr: "Djiby Diallo",
        en: "Djiby Diallo",
      },
      date: {
        fr: "Avril 2024 – Juillet 2024",
        en: "April 2024 – July 2024",
      },
      pdf: "/Rapport_version_2.pdf",
      techs: ["/qgis-logo.png", "/arcgis-logo.png", "/excel-logo.png"],
    },
    {
      title: {
        fr: "Sortie de terrain en Ariège",
        en: "Fieldwork in Ariège",
      },
      location: {
        fr: "Mas d'Azil, Foix, Monts d'Olmes",
        en: "Mas d'Azil, Foix, Monts d'Olmes",
      },
      image: "/Geomatique_terrain_Diallo_Djiby.png",
      description: {
        fr: "Cartographie numérique et réalité du terrain à travers les SIG.",
        en: "Digital mapping and field validation using GIS tools.",
      },
      author: {
        fr: "Djiby Diallo",
        en: "Djiby Diallo",
      },
      date: {
        fr: "Décembre 2024 – Mars 2025",
        en: "December 2024 – March 2025",
      },
      pdf: "/Ariege.pdf",
      techs: ["/qgis-logo.png", "/arcgis-logo.png"],
    },
    {
      title: {
        fr: "Théorie et ingénierie des BDD",
        en: "Database Theory and Engineering",
      },
      location: {
        fr: "Rennes",
        en: "Rennes",
      },
      image: "/SQL.png",
      description: {
        fr: "Système de gestion et analyse des données urbaines et environnementales.",
        en: "Design and analysis of urban and environmental databases.",
      },
      author: {
        fr: "En binôme",
        en: "Pair work",
      },
      date: {
        fr: "Septembre 2024 – Décembre 2024",
        en: "September 2024 – December 2024",
      },
      pdf: "/Cahier_des_Charges_du_Projet_SGBD.pdf",
      techs: ["/sql-logo.png"],
    },
    {
      title: {
        fr: "Sensibilité à l'érosion des sols",
        en: "Soil Erosion Sensitivity",
      },
      location: {
        fr: "Seine-Maritime",
        en: "Seine-Maritime",
      },
      image: "/projet_arcgis_pro.png",
      description: {
        fr: "Évaluation de la sensibilité des sols à l'échelle régionale.",
        en: "Regional-scale assessment of soil erosion sensitivity.",
      },
      author: {
        fr: "Djiby Diallo",
        en: "Djiby Diallo",
      },
      date: {
        fr: "Novembre 2025 – Décembre 2025",
        en: "November 2025 – December 2025",
      },
      pdf: "/2025-ProjetSIG-DIALLO_Djiby.pdf",
      techs: ["/arcgis-logo.png"],
    },
    {
      title: {
        fr: "Observatoire de la forêt – Corse",
        en: "Forest Observatory – Corsica",
      },
      location: {
        fr: "Corse",
        en: "Corsica",
      },
      image: "/Corse.png",
      description: {
        fr: "Conception et description d'une cartographie statistique appliquée au territoire corse.",
        en: "Design and analysis of statistical cartography applied to the Corsican territory.",
      },
      author: {
        fr: "Djiby Diallo",
        en: "Djiby Diallo",
      },
      date: {
        fr: "Septembre 2024 – Novembre 2024",
        en: "September 2024 – November 2024",
      },
      pdf: "/Diallo_Djiby_Cartographie.pdf",
      techs: ["/magrit.png"],
    },
    {
      title: {
        fr: "Projet cartographique – Basket",
        en: "Cartographic Project – Basketball",
      },
      location: {
        fr: "Rennes",
        en: "Rennes",
      },
      image: "/basket.png",
      description: {
        fr: "Analyse cartographique du basket, du sport mondialisé au sport amateur.",
        en: "Cartographic analysis of basketball, from a global sport to amateur practice.",
      },
      author: {
        fr: "Djiby Diallo",
        en: "Djiby Diallo",
      },
      date: {
        fr: "Janvier 2023 – Février 2023",
        en: "January 2023 – February 2023",
      },
      pdf: "/DM_BASKETBALL.pdf",
      techs: ["/qgis-logo.png", "/excel-logo.png"],
    },
    {
      title: {
        fr: "Télédétection radar",
        en: "Radar Remote Sensing",
      },
      location: {
        fr: "Toulouse",
        en: "Toulouse",
      },
      image: "/snapp.png",
      description: {
        fr: "Analyse de séries temporelles d’images Sentinel-1 avec SNAP",
        en: "Time-series analysis of Sentinel-1 radar images using SNAP.",
      },
      author: {
        fr: "Trinôme",
        en: "Group of three",
      },
      date: {
        fr: "Janvier 2026",
        en: "January 2026",
      },
      pdf: "/snap.pdf",
      techs: ["/SNAP_icon.jpg"],
    },
  ];

  return (
    <section id="projects" className="bg-[#FDF1F4] scroll-mt-32">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <p className="text-sm text-[#8B0027] font-medium mb-3">
          {lang === "fr" ? "PROJETS" : "PROJECTS"}
        </p>

        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-[42px] font-semibold">
            {lang === "fr" ? "Ce que j'ai créé" : "What I've built"}
          </h2>
          <JumpBars />
        </div>

        <p className="text-gray-600 mb-12">
          {lang === "fr"
            ? "Quelques projets sur lesquels j'ai travaillé"
            : "Some projects I've worked on"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#7A2E3A] flex flex-col h-full"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm font-semibold mb-1">
                  {project.title[lang]}
                </h3>

                <p className="text-xs text-gray-500 mb-1">
                  {project.location[lang]}
                </p>

                <div className="min-h-[40px] mb-2">
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {project.description[lang]}
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="text-xs text-gray-400 mb-2">
                    {project.date[lang]}
                  </p>

                  <div className="flex gap-1.5">
                    {project.techs.map((tech, idx) => (
                      <img
                        key={idx}
                        src={tech}
                        alt=""
                        className="h-5 w-5 opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* PORTFOLIO */}
          <div className="rounded-xl border border-[#E6BFC9] bg-white overflow-hidden hover:-translate-y-1 hover:shadow-lg transition flex flex-col h-full">
            <div className="h-40 w-full overflow-hidden">
              <img
                src="/porfolio.png"
                alt="Portfolio"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E6BFC9] px-2.5 py-0.5 text-xs text-[#8B0027] mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B0027]" />
                {lang === "fr" ? "Vous êtes ici" : "You are here"}
              </span>

              <h3 className="text-sm font-semibold mb-1">Portfolio</h3>

<div className="min-h-[40px] mb-2">
  <p className="text-sm text-gray-700 line-clamp-2">
    {t.portfolioDesc}
  </p>
</div>


              <div className="mt-auto">
                <p className="text-xs text-gray-400 mb-2">
                  {lang === "fr" ? "En cours" : "In progress"}
                </p>
                <div className="flex gap-1.5">
                  <img src="/next-js.svg" alt="Next.js" className="h-5 w-5" />
                  <img src="/tailwin.png" alt="Tailwind" className="h-5 w-5" />
                  <img src="/vercel.png" alt="Vercel" className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* VOTRE PROJET */}
          <div className="rounded-xl border-2 border-dashed border-[#E6BFC9] bg-gradient-to-br from-[#FBE9EE] to-[#FDF1F4] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-lg transition h-full min-h-[250px] p-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F1D6DC] text-[#8B0027] text-lg mb-3">
              +
            </div>
            <h3 className="text-base font-semibold mb-1.5">
              {lang === "fr" ? "Votre projet ?" : "Your project?"}
            </h3>
            <p className="text-sm text-gray-600 mb-3 max-w-[180px]">
              {lang === "fr"
                ? "Travaillons ensemble sur votre projet"
                : "Let's work together on your project"}
            </p>
            <a
              href="#contact"
              className="rounded-full bg-[#8B0027] px-4 py-1.5 text-xs text-white hover:bg-[#6F001F] transition"
            >
              {lang === "fr" ? "Me contacter" : "Contact me"}
            </a>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
