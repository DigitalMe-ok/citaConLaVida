"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Droplets } from "lucide-react";

export default function Bautismo() {
  const [hover, setHover] = useState(false);

  const imagenes = [
    "/bautismo1.webp",
    "/bautismo2.webp",
    "/bautismo3.webp",
    "/bautismo4.webp",
  ];

  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative overflow-hidden py-24 px-6 mt-24 rounded-[1rem] transitio duration-1000 ease-in-out"
    >
      {/* Background */}
      <div
        className={`
          absolute inset-0 transition duration-700
          ${
            hover
              ? "scale-105 bg-gradient-to-br from-sky-950 via-cyan-900 to-slate-900"
              : "bg-gradient-to-br from-slate-950 via-sky-950 to-black"
          }
        `}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full" />

      {/* Icon */}
      <Droplets
        className={`
          absolute top-10 right-10 w-20 h-20 text-cyan-300/20
          transition-all duration-500
          ${hover ? "rotate-12 scale-110" : ""}
        `}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white">
            Abril 2026 · Evento especial
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-6">
          Bautismo 
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 text-center max-w-4xl mx-auto leading-relaxed mb-14">
          Vivimos una jornada inolvidable donde muchas personas dieron un paso
          público de fe, declarando su amor y compromiso con Jesús a través del
          bautismo.
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {imagenes.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group shadow-2xl"
            >
              <Image
                src={img}
                alt={`bautismo-${i}`}
                width={500}
                height={500}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
          <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center text-white">
            <h3 className="text-4xl font-bold mb-2">+20</h3>
            <p className="text-gray-300">Personas bautizadas</p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center text-white">
            <h3 className="text-4xl font-bold mb-2">1</h3>
            <p className="text-gray-300">Decisión de fe</p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center text-white">
            <h3 className="text-4xl font-bold mb-2">∞</h3>
            <p className="text-gray-300">Vidas transformadas</p>
          </div>
        </div>

        
      </div>
    </section>
  );
}