"use client";

import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function CVPage() {
  const { lang } = useLanguage();
  const t = translations[lang].cv;

  const handleDownloadCV = () => {
    const fileName =
      lang === "fr"
        ? "/Cv_Djiby_Diallo_Géomaticien.pdf"
        : "/Cv_Djiby_Diallo_Geomatics_Engineer.pdf";

    const link = document.createElement("a");
    link.href = fileName;
    link.download = fileName.split("/").pop()!;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {/* ===== HEADER CV ===== */}
      <section id="cv" className="bg-white pt-12 pb-6 scroll-mt-[96px]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white border border-[#E5E1DC] rounded-xl overflow-hidden shadow-sm">
            <div className="relative bg-[#F4ECEA] px-8 py-6 flex items-start gap-10">
              <div className="absolute left-0 top-0 h-full w-2 bg-[#7A2E3A]" />

              <div className="shrink-0 border-2 border-[#C8A6AD] p-1">
                <Image
                  src="/Photo.profil1.png"
                  alt="Djiby Diallo"
                  width={115}
                  height={130}
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10">
                <div>
                  <h1 className="text-3xl font-semibold text-[#7A2E3A] mb-1">
                    Djiby Diallo
                  </h1>

                  <p className="text-gray-700 mb-5">
                    {t.job}
                  </p>

                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <Image src="/Gmail.png" alt="" width={16} height={16} />
                      <a href="mailto:diallodjiby1603@gmail.com" className="hover:underline">
                        diallodjiby1603@gmail.com
                      </a>
                    </li>

                    <li className="flex items-center gap-2">
                      <Image src="/linkedin.png" alt="" width={16} height={16} />
                      <a
                        href="https://www.linkedin.com/in/djiby-diallo-05a0842a8/"
                        target="_blank"
                        className="hover:underline"
                      >
                        linkedin.com/in/djiby-diallo
                      </a>
                    </li>

                    <li className="flex items-center gap-2">
                      <Image src="/Github.png" alt="" width={16} height={16} />
                      <a
                        href="https://github.com/diallodjiby"
                        target="_blank"
                        className="hover:underline"
                      >
                        github.com/diallodjiby
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="self-end space-y-3 text-sm text-gray-700">
                  <div>📞 07 58 12 37 85</div>
                  <div>📍 Bordeaux, France</div>
                  <div>🌍 {t.languages}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ===== PROFIL ===== */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 pt-1 pb-4">
    <div className="flex gap-6 pl-8">
      <div className="w-[2px] bg-[#D8BFC4] shrink-0 mt-1" />
      <div className="max-w-5xl">
        <h2 className="text-xs font-semibold tracking-widest text-[#7A2E3A] mb-1.5">
          {t.profile}
        </h2>

        <p className="text-[12.5px] leading-[1.45] text-gray-700">
          {lang === "fr"
            ? "Géomaticien passionné par l’analyse spatiale, la cartographie et la valorisation des données géographiques. Formé aux outils SIG, au développement web et à l’analyse de données."
            : "Geomatics engineer passionate about spatial analysis, cartography and geographic data valorization. Trained in GIS tools, web development and data analysis."}
        </p>
      </div>
    </div>
  </div>
</section>



{/* ===== STACK TECHNIQUE ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <div className="flex gap-6 pl-8">
            <div className="w-[2px] bg-[#D8BFC4] shrink-0 mt-1" />
            <div className="max-w-6xl">
              <h2 className="text-xs font-semibold tracking-widest text-[#7A2E3A] mb-3">
                {t.stack}
              </h2>

              <div className="flex flex-wrap gap-3 max-w-5xl">
          {[
            { name: "R Studio", src: "/r-logo.png" },
            { name: "FME", src: "/FME.png" },
            { name: "ArcGIS", src: "/arcgis-logo.png" },
            { name: "QGIS", src: "/qgis-logo.png" },
            { name: "Google Earth Engine", src: "/google_earth_engine.png" },
            { name: "Python", src: "/python-logo.png" },
            { name: "PostgreSQL", src: "/sql-logo.png" },
            { name: "Geoserver", src: "/GeoServer.png" },
            { name: "Leaflet", src: "/Leaflet.png" },
            { name: "Next.js", src: "/next-js.svg" },
            { name: "JavaScript", src: "/JS.jpeg" },
            { name: "HTML5", src: "/html.jpeg" },
            { name: "CSS3", src: "/CSS.jpeg" },
            { name: "Tailwind", src: "/tailwin.png" },
            { name: "Excel", src: "/excel-logo.png" },
            { name: "Power BI", src: "/Power_BI.jpeg" },
            { name: "Netlogo", src: "/Netlogo.svg" },
            { name: "GitHub", src: "/Github.png" },
            { name: "OpenAI", src: "/openai.png" },
            { name: "Claude", src: "/claude.png" },
            { name: "Vercel", src: "/vercel.png" },
          ].map((tool) => (
            <span
              key={tool.name}
              className="
                flex items-center gap-2
                rounded-full border border-[#E5E1DC]
                bg-[#FBF7F4]
                px-3 py-1
                text-[13px] text-gray-700
              "
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="h-3.5 w-auto opacity-80"
              />
              {tool.name}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

{/* ===== EXPÉRIENCE ===== */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 pb-12">
    <div className="flex gap-8 pl-8">

      {/* BARRE */}
      <div className="w-[2px] bg-[#D8BFC4] shrink-0 mt-1" />

      {/* CONTENU */}
      <div className="flex-1 max-w-6xl">
        <h2 className="text-xs font-semibold tracking-widest text-[#7A2E3A] mb-5">
          {t.experience}
        </h2>

        {/* ===== EXP 1 ===== */}
        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 mb-5">
          <h3 className="text-[14px] font-semibold text-gray-900">
            {lang === "fr" ? "Alternance en géomatique" : "Work-study in geomatics"}
          </h3>

          <span className="inline-flex items-center rounded-full bg-[#F6EFEF] px-2.5 py-0.5 text-[12px] font-medium text-[#7A2E3A] whitespace-nowrap">
            {lang === "fr"
              ? "Sept. 2024 — Sept. 2026"
              : "Sept. 2024 — Sept. 2026"}
          </span>

          <p className="text-[12.5px] text-gray-600">
            Enedis · Mérignac
          </p>

          <span />

          <p className="col-span-2 text-[12.5px] leading-[1.4] text-gray-700 mt-1 max-w-4xl">
            {lang === "fr"
              ? "Participation aux projets SIG liés aux réseaux électriques, analyse et structuration de données géographiques, production cartographique et appui aux équipes métiers pour la visualisation et l’exploitation des données territoriales."
              : "Contribution to GIS projects related to power networks, analysis and structuring of geographic data, map production and support for business teams in data visualization and usage."}
          </p>
        </div>

        {/* ===== EXP 2 ===== */}
        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1">
          <h3 className="text-[14px] font-semibold text-gray-900">
            {lang === "fr" ? "Stage en géomatique" : "Internship in geomatics"}
          </h3>

          <span className="inline-flex items-center rounded-full bg-[#F6EFEF] px-2.5 py-0.5 text-[12px] font-medium text-[#7A2E3A] whitespace-nowrap">
            {lang === "fr"
              ? "Avril 2024 — Juillet 2024"
              : "April 2024 — July 2024"}
          </span>

          <p className="text-[12.5px] text-gray-600">
            {lang === "fr"
              ? "Département de la Sarthe · Le Mans"
              : "Sarthe Department · Le Mans"}
          </p>

          <span />

          <p className="col-span-2 text-[12.5px] leading-[1.4] text-gray-700 mt-1 max-w-4xl">
            {lang === "fr"
              ? "Analyse spatiale de l’offre de logement étudiant, traitement et croisement de données SIG, réalisation de cartes thématiques et production d’indicateurs d’aide à la décision pour les acteurs publics."
              : "Spatial analysis of student housing supply, GIS data processing and cross-analysis, thematic map production and decision-support indicators for public stakeholders."}
          </p>
        </div>

      </div>
    </div>
  </div>
</section>



{/* ===== PROJETS ===== */}
<section className="bg-white print-break-after">
  <div className="mx-auto max-w-7xl px-6 pb-6">
    <div className="flex gap-8 pl-8">

      {/* BARRE GAUCHE */}
      <div className="w-[2px] bg-[#D8BFC4] shrink-0 mt-1" />

      {/* CONTENU */}
      <div className="flex-1">
        <h2 className="text-xs font-semibold tracking-widest text-[#7A2E3A] mb-6">
          {t.projects}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">

          {[
            {
              title: lang === "fr" ? "Parc Normandie – Maine" : "Normandy–Maine Regional Park",
              desc:
                lang === "fr"
                  ? "Diagnostic de la forêt du Parc Normandie-Maine dans le cadre d’un observatoire forestier."
                  : "Forest diagnosis of the Normandy–Maine Regional Park as part of a forest observatory.",
              link: "/Méthodologie_groupe_1.pdf",
              techs: ["/qgis-logo.png", "/sql-logo.png"],
            },
            {
              title: lang === "fr" ? "Pays du Mans" : "Pays du Mans",
              desc:
                lang === "fr"
                  ? "Diagnostic territorial de l’attractivité du Pays du Mans."
                  : "Territorial diagnosis of the attractiveness of the Pays du Mans area.",
              link: "/Diagnostic_Territorial.pdf",
              techs: ["/qgis-logo.png", "/excel-logo.png"],
            },
            {
              title: lang === "fr" ? "Logement étudiant – Sarthe" : "Student Housing – Sarthe",
              desc:
                lang === "fr"
                  ? "Analyse du logement étudiant à l’échelle départementale."
                  : "Analysis of student housing at the departmental scale.",
              link: "/Rapport_version_2.pdf",
              techs: ["/qgis-logo.png", "/excel-logo.png", "/arcgis-logo.png"],
            },
            {
              title: lang === "fr" ? "Sortie de terrain en Ariège" : "Field Survey in Ariège",
              desc:
                lang === "fr"
                  ? "Cartographie numérique et confrontation terrain à l’aide des SIG."
                  : "Digital mapping and field validation using GIS tools.",
              link: "/Ariege.pdf",
              techs: ["/qgis-logo.png", "/arcgis-logo.png"],
            },
            {
              title:
                lang === "fr"
                  ? "Ingénierie des bases de données"
                  : "Database Engineering",
              desc:
                lang === "fr"
                  ? "Conception et analyse de bases de données urbaines et environnementales."
                  : "Design and analysis of urban and environmental databases.",
              link: "/Cahier_des_Charges_du_Projet_SGBD.pdf",
              techs: ["/sql-logo.png"],
            },
            {
              title:
                lang === "fr"
                  ? "Sensibilité à l’érosion des sols"
                  : "Soil Erosion Sensitivity",
              desc:
                lang === "fr"
                  ? "Évaluation régionale de la sensibilité des sols à l’érosion."
                  : "Regional assessment of soil erosion sensitivity.",
              link: "/2025-ProjetSIG-DIALLO_Djiby.pdf",
              techs: ["/arcgis-logo.png"],
            },
            {
              title:
                lang === "fr"
                  ? "Observatoire de la forêt – Corse"
                  : "Forest Observatory – Corsica",
              desc:
                lang === "fr"
                  ? "Conception et description d’une cartographie statistique appliquée au territoire corse."
                  : "Design and description of statistical cartography applied to Corsica.",
              link: "/Diallo_Djiby_Cartographie.pdf",
              techs: ["/magrit.png"],
            },
            {
              title:
                lang === "fr"
                  ? "Projet cartographique – Basket"
                  : "Cartographic Project – Basketball",
              desc:
                lang === "fr"
                  ? "Analyse cartographique du basket, du sport mondialisé au sport amateur."
                  : "Cartographic analysis of basketball, from global sport to amateur practice.",
              link: "/DM_BASKETBALL.pdf",
              techs: ["/qgis-logo.png", "/excel-logo.png"],
            },
            {
              title:
                lang === "fr"
                  ? "Télédétection radar"
                  : "Radar Remote Sensing",
              desc:
                lang === "fr"
                  ? "Analyse de séries temporelles d’images Sentinel-1 avec SNAP."
                  : "Time series analysis of Sentinel-1 images using SNAP.",
              link: "/snap.pdf",
              techs: ["/SNAP_icon.jpg"],
            },
          ].map((project, i) => (
            <div
              key={i}
              className="
                project-card
                relative
                rounded-lg
                border border-[#E5E1DC]
                bg-white
                px-2 py-1.5
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-[#7A2E3A]
              "
            >
              {/* TECH ICONS */}
              <div className="absolute top-4 right-4 flex gap-2">
                {project.techs.map((tech, idx) => (
                  <img key={idx} src={tech} className="h-4 w-4 opacity-80" />
                ))}
              </div>

              <h3 className="text-[14px] font-semibold text-gray-900 mb-1 pr-12">
                {project.title}
              </h3>

              <p className="text-[12.5px] text-gray-600 leading-[1.4] mb-2">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="text-[13px] font-medium text-[#7A2E3A] hover:underline"
              >
                {t.viewProject}
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  </div>
</section>


{/* ===== FORMATION ===== */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 pb-12">
    <div className="flex gap-8 pl-8">

      {/* BARRE */}
      <div className="w-[2px] bg-[#D8BFC4] shrink-0 mt-1" />

      {/* CONTENU */}
      <div className="flex-1 max-w-6xl">
        <h2 className="text-xs font-semibold tracking-widest text-[#7A2E3A] mb-6">
          {t.education}
        </h2>

        <div className="space-y-7">

          <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1">
            <p className="text-[15px] font-semibold text-gray-900 italic">
              {lang === "fr"
                ? "Master de Géomatique – Sciences Géomatique en Environnement et Aménagement (SIGMA)"
                : "Master’s degree in Geomatics – Environmental and Spatial Planning (SIGMA)"}
            </p>
            <span className="inline-flex items-center rounded-full bg-[#F6EFEF] px-3 py-1 text-[13px] font-medium text-[#7A2E3A] whitespace-nowrap">
              2024 – 2026
            </span>
            <p className="text-[13.5px] text-gray-600">
              {lang === "fr"
                ? "Université Jean Jaurès – ENSAT INP"
                : "Jean Jaurès University – ENSAT INP"}
            </p>
            <span />
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1">
            <p className="text-[15px] font-semibold text-gray-900 italic">
              {lang === "fr"
                ? "Master 1 – Méthodes, outils de suivi pour l’aménagement et l’environnement (MOSAE)"
                : "Master 1 – Methods and tools for spatial planning and environment (MOSAE)"}
            </p>
            <span className="inline-flex items-center rounded-full bg-[#F6EFEF] px-3 py-1 text-[13px] font-medium text-[#7A2E3A] whitespace-nowrap">
              2023 – 2024
            </span>
            <p className="text-[13.5px] text-gray-600">
              {lang === "fr" ? "Le Mans Université – ESGT" : "Le Mans University – ESGT"}
            </p>
            <span />
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1">
            <p className="text-[15px] font-semibold text-gray-900 italic">
              {lang === "fr"
                ? "Licence 2 et 3 en Géographie et Aménagement de l’Espace"
                : "Bachelor’s degree (Years 2 & 3) in Geography and Spatial Planning"}
            </p>
            <span className="inline-flex items-center rounded-full bg-[#F6EFEF] px-3 py-1 text-[13px] font-medium text-[#7A2E3A] whitespace-nowrap">
              2021 – 2023
            </span>
            <p className="text-[13.5px] text-gray-600">
              {lang === "fr" ? "Université Rennes 2" : "University of Rennes 2"}
            </p>
            <span />
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1">
            <p className="text-[15px] font-semibold text-gray-900 italic">
              {lang === "fr"
                ? "Licence 1 et 2 en Géographie"
                : "Bachelor’s degree (Years 1 & 2) in Geography"}
            </p>
            <span className="inline-flex items-center rounded-full bg-[#F6EFEF] px-3 py-1 text-[13px] font-medium text-[#7A2E3A] whitespace-nowrap">
              2019 – 2021
            </span>
            <p className="text-[13.5px] text-gray-600">
              {lang === "fr"
                ? "Université Cheikh Anta Diop de Dakar"
                : "Cheikh Anta Diop University of Dakar"}
            </p>
            <span />
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== CENTRES D’INTÉRÊT ===== */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 pb-12">
    <div className="flex gap-8 pl-8">

      {/* BARRE */}
      <div className="w-[2px] bg-[#D8BFC4] shrink-0 mt-1" />

      {/* CONTENU */}
      <div className="flex-1 max-w-6xl">
        <h2 className="text-xs font-semibold tracking-widest text-[#7A2E3A] mb-6">
          {t.interests}
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E1DC] bg-white px-4 py-1.5 text-[13px] text-gray-700">
            💻 {lang === "fr" ? "Codage" : "Coding"}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E1DC] bg-white px-4 py-1.5 text-[13px] text-gray-700">
            🏋️ {lang === "fr" ? "Musculation" : "Weight training"}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E1DC] bg-white px-4 py-1.5 text-[13px] text-gray-700">
            🏺 {lang === "fr" ? "Égyptologie" : "Egyptology"}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E1DC] bg-white px-4 py-1.5 text-[13px] text-gray-700">
            🎵 {lang === "fr" ? "Musique" : "Music"}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


<Footer />


    </>
  );
}
