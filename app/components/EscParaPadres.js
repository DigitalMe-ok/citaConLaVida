import Link from "next/link";

export default function EscParaPadres() {
  return (
   <section className="relative py-24 mb-20 overflow-hidden" style={{backgroundImage:`url(/escparaPadres.webp)`,backgroundPosition:"center",backgroundSize:"100%"}}>
      
      {/* Background */}
    <div className=" absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>

      {/* Overlay para suavizar */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm">
          Evento especial · 2 meses
        </div>

        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Escuela para Padres 👨‍👩‍👧
        </h2>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Un espacio diseñado para crecer juntos en la crianza. Herramientas prácticas,
          guía espiritual y acompañamiento para fortalecer la familia.
        </p>

        {/* Info rápida */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          
          <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            📅 Inicio: <span className="font-semibold">Jueves 14 de mayo</span>
          </div>

          <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            ⏰ Hora: <span className="font-semibold">20:00 hs</span>
          </div>

          <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            ⏳ Duración: <span className="font-semibold">2 meses</span>
          </div>
        </div>

        {/* Temas */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left mb-12">
          <p>✔ Lo valioso de un hijo</p>
          <p>✔ Padre ejemplar</p>
          <p>✔ Noviazgo en la adolescencia</p>
          <p>✔ Redes sociales</p>
          <p className="md:col-span-2">✔ ¡Y muchos otros temas para la familia!</p>
        </div>

        {/* CTA */}
        <Link href="/contacto">
          <button className="bg-gradient-to-r from-white to-gray-200 text-red-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
            Quiero participar
          </button>
        </Link>
      </div>
    </section>
  );
}