"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const images = ["/cine.png", "/musique.png", "/lire.png", "/musculation.png"];

export default function LifeOutsideTerminal() {
  const { lang } = useLanguage();
  const t = translations[lang].life;

  const slides = t.slides.map((slide, i) => ({
    image: images[i],
    title: slide.title,
    description: slide.description,
  }));

  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  const fullTitle = t.title;
  const [typedText, setTypedText] = useState("");

  const THRESHOLD = 100;

  /* ===== TITLE OBSERVER ===== */
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ===== TYPING EFFECT ===== */
  useEffect(() => {
    if (!titleVisible) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [titleVisible, fullTitle]);

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  /* ===== DRAG ===== */
  const startDrag = (x: number) => {
    isDragging.current = true;
    startX.current = x;
  };

  const moveDrag = (x: number) => {
    if (!isDragging.current) return;
    setDragX(x - startX.current);
  };

  const endDrag = () => {
    if (!isDragging.current) return;

    if (dragX < -THRESHOLD) next();
    else if (dragX > THRESHOLD) prev();

    setDragX(0);
    isDragging.current = false;
  };

  return (
    <section className="bg-[#FBF7F4]">
      <div className="mx-auto max-w-6xl px-6 py-28">
        {/* SECTION LABEL */}
        <p className="text-sm text-[#8B0027] font-medium mb-4">
          {t.section}
        </p>

        {/* ===== TERMINAL TITLE ===== */}
        <div
          ref={titleRef}
          className={`terminal-title mb-14 transition-all duration-700 ease-out ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="prompt">$</span>
          <span className="ml-2">{typedText}</span>
          <span className="terminal-cursor" />
        </div>

        {/* ===== STACKED SLIDER ===== */}
        <div className="relative h-[520px] w-full flex justify-center items-center select-none overflow-hidden">
          {slides.map((slide, i) => {
            const position = i - index;
            if (position < 0 || position > 1) return null;

            const isActive = position === 0;
            const progress = Math.min(Math.abs(dragX) / THRESHOLD, 1);

            return (
              <div
                key={i}
                className="absolute w-[420px] h-[520px] rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  transform: `translateX(${isActive ? dragX : 0}px) scale(${isActive ? 1 : 0.98})`,
                  opacity: isActive ? 1 : progress,
                  zIndex: isActive ? 2 : 1,
                  transition: isDragging.current
                    ? "none"
                    : "transform 0.5s cubic-bezier(.22,1,.36,1), opacity 0.3s ease",
                  cursor: isActive ? (isDragging.current ? "grabbing" : "grab") : "default",
                }}
                onMouseDown={isActive ? (e) => startDrag(e.clientX) : undefined}
                onMouseMove={isActive ? (e) => moveDrag(e.clientX) : undefined}
                onMouseUp={isActive ? endDrag : undefined}
                onMouseLeave={isActive ? endDrag : undefined}
                onTouchStart={isActive ? (e) => startDrag(e.touches[0].clientX) : undefined}
                onTouchMove={isActive ? (e) => moveDrag(e.touches[0].clientX) : undefined}
                onTouchEnd={isActive ? endDrag : undefined}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  draggable={false}
                  className="h-full w-full object-cover pointer-events-none"
                  style={
                    isActive
                      ? {
                          transform: `translateX(${-dragX}px)`,
                          transition: isDragging.current
                            ? "none"
                            : "transform 0.5s cubic-bezier(.22,1,.36,1)",
                          willChange: "transform",
                        }
                      : undefined
                  }
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white max-w-[280px]">
                  <h3 className="text-2xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-sm text-white/80">{slide.description}</p>
                  <div className="mt-4 text-xs text-white/60">
                    {String(i + 1).padStart(2, "0")} — {String(slides.length).padStart(2, "0")}
                  </div>
                </div>

                {isActive && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-0 top-0 h-full w-1/3 z-20"
                      aria-label="Previous slide"
                    />
                    <button
                      onClick={next}
                      className="absolute right-0 top-0 h-full w-1/3 z-20"
                      aria-label="Next slide"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* HINT */}
        <p className="mt-6 text-center text-sm text-gray-500">
          {t.hint}
        </p>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-[#8B0027]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
