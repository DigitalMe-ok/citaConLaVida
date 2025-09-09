import Link from 'next/link';
const Meetings = () => {
  const meetings = [
    
    {
      day: "Martes",
      time: "20:00 HS",
      title: "Reunión de hombres"
    },
    {
      day: "Miercoles",
      time: "20:00 HS",
      title: "Reunión de Oración"
    },
    {
      day: "Jueves",
      time: "20:00 HS",
      title: "Rompiendo cadenas",
      description: "Orientación para salir de las adicciones"
    },
    {
      day: "Viernes",
      time: "20:00 HS",
      title: "Reunión de Intercesión"
    },
    {
      day: "Sabado",
      time: "20:00 HS",
      title: "Reunión de pre-ados y jovenes"
    },
    {
      day: "Sabado",
      time: "16:00 HS",
      title: "Merenderos"
    },
    {
      day: "Domingo",
      time: "19:30 HS",
      title: "Reunión general",
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      principal: "bg-gradient-to-r from-amber-500 to-orange-600",
      vespertino: "bg-gradient-to-r from-purple-500 to-pink-600",
      oracion: "bg-gradient-to-r from-blue-500 to-cyan-600",
      estudio: "bg-gradient-to-r from-green-500 to-emerald-600",
      jovenes: "bg-gradient-to-r from-red-500 to-rose-600",
      mujeres: "bg-gradient-to-r from-pink-500 to-rose-600",
      hombres: "bg-gradient-to-r from-indigo-500 to-blue-600",
      infantil: "bg-gradient-to-r from-yellow-500 to-orange-500"
    };
    return colors[type] || "bg-gradient-to-r from-gray-500 to-gray-600";
  };

  const getTypeIcon = (type) => {
    const icons = {
      principal: "⛪",
      vespertino: "🌅",
      oracion: "🙏",
      estudio: "📖",
      jovenes: "🔥",
      mujeres: "👩",
      hombres: "👨",
      infantil: "👶"
    };
    return icons[type] || "⛪";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nuestras Reuniones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Únete a nuestra familia de fe en estos momentos especiales de adoración, 
            comunión y crecimiento espiritual. Cada reunión es una oportunidad para 
            conectarte con Dios y con tu comunidad.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Meetings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`${getTypeColor(meeting.type)} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{getTypeIcon(meeting.type)}</span>
                    <span className="text-sm font-medium text-gray-800 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                      {meeting.day}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{meeting.title}</h3>
                  <p className="text-sm opacity-90">{meeting.location}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{meeting.time}</p>
                    <p className="text-sm text-gray-500">Hora de inicio</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {meeting.description}
                </p>
              </div>
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-300 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 border border-red-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Primera vez en nuestra iglesia?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Te invitamos a comenzar con nuestro culto principal del domingo. 
              Será un honor recibirte y acompañarte en tu caminar espiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/*   <button className="bg-gradient-to-r from-red-950 to-orange-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Planificar mi visita
              </button> */}
            <Link href="/contacto"> <button className="border-2 border-red-950 text-amber-950 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-800 hover:text-white transition-all duration-300 transform hover:scale-105">
                Contactar con nosotros
              </button></Link> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetings;
