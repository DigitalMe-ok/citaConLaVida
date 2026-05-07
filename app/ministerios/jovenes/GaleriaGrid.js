"use client";

import { useState } from "react";
import Image from "next/image";

export default function GaleriaGrid({ imgs = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const next = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % imgs.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative group overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`img-${i}`}
              width={600}
              height={400}
              className="w-full h-56 md:h-64 object-cover group-hover:scale-110 transition duration-500"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={close}
        >
          <div className="relative max-w-5xl w-full px-4">
            <Image
              src={imgs[activeIndex]}
              alt="preview"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl"
            />

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              ›
            </button>

            <button
              onClick={close}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}