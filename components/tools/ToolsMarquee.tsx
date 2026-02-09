"use client";

const tools = [
  { name: "R studio", src: "/r-logo.png" },
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
  { name: "Tailwind", src: "/tailwin.png" },
  { name: "Leaflet", src: "/Leaflet.png" },
  { name: "Google Earth Engine", src: "/google_earth_engine.png" },
  { name: "Netlogo", src: "/Netlogo.svg" },
  { name: "Power BI", src: "/Power_BI.jpeg" },
  { name: "OpenAI", src: "/openai.png" },
  { name: "Claude", src: "/claude.png" },
  { name: "Snap", src: "/SNAP_icon.jpg" },
  { name: "Geoserver", src: "/GeoServer.png" },
  { name: "Vercel", src: "/vercel.png" },
];

export default function ToolsMarquee() {
  return (
    <section className="relative overflow-hidden bg-gray-50 border-y border-gray-200 py-4">

      {/* Fade gauche */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />

      {/* Fade droite */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...tools, ...tools].map((tool, i) => (
          <div
            key={i}
            className="mx-5 flex items-center gap-2 text-sm text-gray-600"
          >
            <img
              src={tool.src}
              alt={tool.name}
              className="h-5 w-auto opacity-80"
            />
            <span className="whitespace-nowrap">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
