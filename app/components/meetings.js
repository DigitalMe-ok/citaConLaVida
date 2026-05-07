import Link from "next/link";

const Meetings = () => {
  const meetings = [
    {
      day: "Martes",
      time: "17:00 HS",
      title: "Danza",
      type: "infantil",
    },
    {  day: "Martes",
      time: " 20:00 HS",
      title: "Reunión de Hombres",
      type:" hombres"


    },
    {
      day: "Miércoles",
      time: "20:00 HS",
      title: "Reunión general",
      type: "principal",
    },
    {
      day: "Jueves",
      time: "20:30 HS",
      title: "Rompiendo cadenas",
      description: "Orientación para salir de las adicciones",
      type: "oracion",
    },
    {
      day: "Jueves",
      time: "20:00 HS",
      title: "Escuela Para Padres",
      description: "A partir del 14 de mayo. Duración 2 meses",
      type: "estudio",
    },
    {
      day: "Viernes",
      time: "20:00 HS",
      title: "Reunión general",
      type: "principal",
    },
    {
      day: "Sábado",
      time: "20:00 HS",
      title: "Jóvenes",
      type: "jovenes",
    },
    {
      day: "Sábado",
      time: "11:00 HS",
      title: "CitaKids",
      type: "infantil",
    },
    {
      day: "Domingo",
      time: "19:30 HS",
      title: "Reunión general",
      type: "principal",
    },
  ];

  const getTypeStyle = (type) => {
    const styles = {
      principal: "bg-white/10 border-white/20",
      jovenes: "bg-red-500/10 border-red-400/30",
      oracion: "bg-blue-500/10 border-blue-400/30",
      estudio: "bg-green-500/10 border-green-400/30",
      infantil: "bg-yellow-500/10 border-yellow-400/30",
    };
    return styles[type] || "bg-white/10 border-white/20";
  };

  return (
   <section className="py-24 bg-gradient-to-b from-[#2a2a2a] to-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Nuestras Reuniones
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Espacios pensados para conectar, crecer y compartir en comunidad.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${getTypeStyle(
                meeting.type
              )}`}
            >
              {/* TOP */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm text-gray-400">
                  {meeting.day}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10">
                  {meeting.type}
                </span>
              </div>

              {/* TIME */}
              <div className="mb-4">
                <p className="text-3xl font-bold tracking-tight">
                  {meeting.time}
                </p>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition">
                {meeting.title}
              </h3>

              {/* DESCRIPTION */}
              {meeting.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {meeting.description}
                </p>
              )}

              {/* LINE */}
              <div className="w-full h-px bg-white/10 my-4"></div>

              {/* CTA */}
              <button className="text-sm text-red-400 hover:text-red-300 transition">
                Ver más →
              </button>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-24 text-center">
          <Link href="/contacto">
            <button className="px-10 py-4 rounded-xl bg-red-700 hover:bg-red-600 transition text-white font-semibold shadow-lg hover:shadow-red-900/40">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Meetings;