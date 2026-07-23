import Link from "next/link";

const Meetings = () => {

  const meetings = [
    {
      day: "Martes",
      time: "17:00 HS",
      title: "Danza",
      type: "infantil",
      link: "/ministerios/citaKids",
    },
    {
      day: "Martes",
      time: "20:00 HS",
      title: "Reunión de Hombres",
      type: "hombres",
      link: "/ministerios/hombres",
    },
    {
      day: "Miércoles",
      time: "20:00 HS",
      title: "Reunión general",
      type: "principal",
      link: "/nosotros",
    },
    {
      day: "Jueves",
      time: "20:30 HS",
      title: "Rompiendo cadenas",
      description: "Orientación para salir de las adicciones",
      type: "oracion",
      link: "/ministerios/adicciones",
    },

    {
      day: "Viernes",
      time: "20:00 HS",
      title: "Reunión general",
      type: "principal",
      link: "/nosotros",
    },
    {
      day: "Sábado",
      time: "20:00 HS",
      title: "Jóvenes",
      type: "jovenes",
      link: "/ministerios/jovenes",
    },
    {
      day: "Sábado",
      time: "11:00 HS",
      title: "CitaKids",
      type: "infantil",
      link: "/ministerios/citaKids",
    },
    {
      day: "Domingo",
      time: "19:30 HS",
      title: "Reunión general",
      type: "principal",
      link: "/nosotros",
    },
  ];

  const getTypeStyle = (type) => {
    const styles = {
      principal: "border-l-red-500 bg-red-500/50 text-red-400 border-red-500/30",
      hombres: "border-l-cyan-400 bg-cyan-400/50 text-cyan-400 border-cyan-400/30 border-l-pink-500 bg-pink-500/50 text-pink-400 border-pink-500/30",
      infantil: "border-l-amber-400 bg-amber-400/50 text-amber-400 border-amber-400/30",
      oracion: "border-l-purple-500 bg-purple-500/50 text-purple-400 border-purple-500/30",
      };

    return styles[type] || "bg-white/10 border-white/20";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#2a2a2a] to-[#181818] text-white">
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
            
            <div className={`cardMeetings grid    rounded-2xl  backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
              <div className={`barraCard ${getTypeStyle(
                meeting.type
              )}`}>

              </div>
            <div
              key={index}
              className={` pt-6 pb-6 `}
            >
            
              {/* TOP */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm text-gray-400">
                  {meeting.day.toUpperCase()}
                </span>

                <span className={`capitalize text-xs px-4 py-2 rounded-full bg-[#3a3a3a]`}>
                  {meeting.type === "oracion" ? "oración" : meeting.type === "jovenes" ? "Jóvenes" : meeting.type}
                </span>
              </div>

              {/* TIME */}
              <div className="mb-4">
                <p className="text-3xl font-bold tracking-tight">
                  {meeting.time}
                </p>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2 transition">
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

            </div>
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