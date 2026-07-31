"use client";

import { useState } from "react";
import Image from "next/image";
  import { useMediaQuery } from "react-responsive";

export default function GaleriaGrid({ imgs = [] }) {

const isMobile = useMediaQuery({ maxWidth: 767 });
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
  const colSpan = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
  };
  const rowSpan ={
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
  }
            
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-8 gap-4">
       {imgs.map((img, i) => {
  const cols = isMobile ? img.mobileCols ?? img.cols : img.cols;
  const rows = isMobile ? img.mobileRows ?? img.rows : img.rows;

  return (
    <button
      key={i}
      onClick={() => setActiveIndex(i)}
      className={`
        relative
        group
        overflow-hidden
        rounded-2xl
        ${colSpan[cols]}
        ${rowSpan[rows]}
      `}
      style={{
        minHeight: "250px",
      }}
    >
      <Image
        src={img.url}
        alt={`img-${i}`}
        fill
        className="object-cover sepia-50 group-hover:sepia-0 group-hover:scale-110 transition duration-500"
      />
    </button>
  );


          // <button
          //   key={i}
          //   onClick={() => setActiveIndex(i)}
          //   className={`relative group overflow-hidden rounded-2xl ${colSpan[img.cols]} ${rowSpan[img.rows]}  `}
          //   style={{
          //         minHeight: "250px",
          //   }}
          // >
          //   <Image
          //     src={img.url}
          //     alt={`img-${i}`}

          //     fill
          //     className={`w-full h-full  grid h-56 md:h-64 object-cover sepia-50 group-hover:scale-110 group-hover:sepia-0 transition duration-500`}
          //   />
          // </button>
})}
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