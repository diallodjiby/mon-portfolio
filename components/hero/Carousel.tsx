"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const SLIDE_DURATION = 4000;

const slides = [
  { src: "/terrain.jpeg" },
  { src: "/test.png" },
  { src: "/gris.png" },
  { src: "/visualisationn.png" },
];

export default function Carousel() {
  const { lang } = useLanguage();
  const t = translations[lang].hero.carousel;

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100));
    }, SLIDE_DURATION / 100);

    const slideTimeout = setTimeout(() => {
      setDirection(1);
      triggerSlide((index + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [index]);

  const triggerSlide = (nextIndex: number) => {
    setAnimating(true);
    setTimeout(() => {
      setIndex(nextIndex);
      setAnimating(false);
    }, 450);
  };

  const goToSlide = (i: number) => {
    setDirection(i > index ? 1 : -1);
    triggerSlide(i);
  };

  return (
    <div className="rounded-[28px] border border-[#8B0027] p-[6px]">
      <div className="relative overflow-hidden rounded-[22px]">

        {/* IMAGE */}
        <img
          src={slides[index].src}
          alt={t[index].title}
          className={`h-[500px] w-full object-cover
            transition-all duration-500 ease-in-out
            ${animating
              ? direction === 1
                ? "opacity-0 -translate-x-6"
                : "opacity-0 translate-x-6"
              : "opacity-100 translate-x-0"
            }
          `}
        />

        {/* JAUGES */}
        <div className="absolute top-3 left-4 right-4 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className="relative h-1.5 flex-1 rounded-full bg-white/30 overflow-hidden"
            >
              {i === index && (
                <div
                  className="absolute left-0 top-0 h-full bg-white transition-all"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* TITRE */}
        <div className="absolute bottom-5 left-5 text-white text-sm font-medium">
          {t[index].title}
        </div>
      </div>

      {/* MINIATURES */}
      <div className="mt-1 flex gap-2 px-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`relative h-16 w-full overflow-hidden rounded-xl border
              ${i === index
                ? "border-[#8B0027]"
                : "border-transparent opacity-50"}
            `}
          >
            <img
              src={slide.src}
              alt={t[i].title}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
