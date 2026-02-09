"use client";

import { useEffect, useState } from "react";

const logos = [
  { name: "R Studio", src: "/r-logo.png", color: "#276DC3" },
  { name: "FME", src: "/FME.png", color: "#FF6B00" },
  { name: "ArcGIS", src: "/arcgis-logo.png", color: "#2C7BE5" },
  { name: "Next.js", src: "/next-js.svg", color: "#111111" },
  { name: "Python", src: "/python-logo.png", color: "#3776AB" },
  { name: "HTML5", src: "/html.jpeg", color: "#E34F26" },
  { name: "CSS3", src: "/CSS.jpeg", color: "#1572B6" },
  { name: "JavaScript", src: "/JS.jpeg", color: "#F7DF1E" },
  { name: "QGIS", src: "/qgis-logo.png", color: "#589632" },
  { name: "PostgreSQL", src: "/sql-logo.png", color: "#336791" },
  { name: "Excel", src: "/excel-logo.png", color: "#217346" },
  { name: "GitHub", src: "/Github.png", color: "#000000" },
];

export default function SkillLogoSwitcher() {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<"idle" | "out" | "in">("idle");

  const current = logos[index];

  useEffect(() => {
    const interval = setInterval(() => {
      // sort
      setState("out");

      // change logo quand invisible
      setTimeout(() => {
        setIndex((i) => (i + 1) % logos.length);
        setState("in");
      }, 400);

      // reset
      setTimeout(() => {
        setState("idle");
      }, 800);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 w-16 overflow-hidden">
      <div
        className={`
          h-full w-full
          rounded-2xl bg-white
          flex items-center justify-center
          ${
            state === "out"
              ? "animate-slide-out"
              : state === "in"
              ? "animate-slide-in"
              : ""
          }
        `}
        style={{
          border: `2px solid ${current.color}`,
        }}
      >
        <img
          src={current.src}
          alt={current.name}
          className="h-9 w-9 object-contain"
        />
      </div>
    </div>
  );
}
