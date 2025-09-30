// app/ministerios/citakids/page.jsx
import BannerCards from "../../components/BannerCards";
import imgBanner from "@/public/bannerAdicciones.jpg";
import NavRedes from "@/app/components/navRedes";

export default function MinisterioAdiccionesPage() {
  return (
    <>
      {/* Banner principal */}
      <BannerCards imgBanner={imgBanner}>
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6 text-center">
          Ministerio de Adicciones
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl text-center leading-relaxed">
          Un espacio de restauración, fe y acompañamiento para quienes buscan
          libertad en Cristo.
        </p>
      </BannerCards>

      {/* Nuestra misión */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          🌿 Nuestra Misión
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Queremos compartir con ustedes el corazón y el propósito del grupo Rompiendo Cadenas, un ministerio que nació hace ya más de seis años dentro de nuestra iglesia, como una extensión del grupo de jóvenes, con un fuerte deseo de ayudar a personas en situación de adicción y lucha interior.<br />
Todo comenzó con una charla sencilla en la iglesia, con el deseo de transmitir a otros lo que Dios había hecho en nuestras vidas. Desde ese momento, con la guía pastoral del Pastor Marcos Benigno, su esposa Roxana Benigno y Viviana Mañanes, y con el respaldo tanto espiritual como emocional de nuestras familias, se fue formando lo que hoy es este hermoso equipo.<br />
Este grupo de contención trabaja todos los jueves, actualmente de 20:30 a 21:30 hs (ajustándose según la época del año), sin interrupciones. Ni feriados ni fechas especiales han sido excusa: Rompiendo Cadenas nunca cierra, porque creemos que la necesidad no tiene descanso, y la esperanza no puede esperar. Los encuentros se realizan en nuestra amada iglesia Cita con la Vida Monte Cristo (Pasaje Cervantes 675).<br />
Nuestra labor se divide en etapas, comenzando por un proceso de encuentros donde forjamos la identidad y el carácter de cada persona, para luego entregar herramientas sólidas basadas en la Palabra de Dios, que les permitan no solo dejar atrás la adicción, sino también recuperar su vida, su propósito, y convertirse en motivación para otros.
Es importante destacar que este es un grupo de contención libre: quienes llegan pueden venir, quedarse o regresar en el momento que deseen. No se ejerce presión, pero sí se trabaja profundamente con quienes deciden entregarse por completo al proceso.<br />
Hasta hoy, más de 130 personas han pasado por este camino: jóvenes, adultos, hombres de todas las edades, con historias difíciles y diversas. Acompañamos no solo la liberación del consumo, sino también el proceso de reinserción en la sociedad, en lo financiero, en lo familiar. En muchos casos, ayudamos incluso desde lo económico en los primeros tiempos, mientras se reconstruyen.<br />
El equipo de trabajo está conformado por Matías Cid, Nahuel Feldmann, Leandro Ocaño, Andrés Toledo y Gastón Barrera, junto al sostén constante de sus esposas y familias. Porque este servicio no termina en una reunión: implica estar disponibles en cualquier momento, atender urgencias, salir a buscar a alguien de madrugada, dejar el hogar para socorrer una vida. Y sin el respaldo de nuestras familias, esto no sería posible.
Por sobre todas las cosas, creemos firmemente que la verdadera transformación la produce Dios. Que su Palabra tiene poder donde la razón no llega, y que cuando una vida se encuentra con Cristo, no solo deja una adicción, sino también la mentira, la manipulación, el robo, y empieza a construir desde cero: a formar una familia, a conseguir trabajo, a soñar de nuevo.

        </p>
      </section>

      {/* Valores principales */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fe en Cristo",
                desc: "Creemos que solo en Jesús hay verdadera libertad y restauración.",
                icon: "✝️",
              },
              {
                title: "Acompañamiento",
                desc: "No caminamos solos. Cada proceso está rodeado de apoyo y comunidad.",
                icon: "🤝",
              },
              {
                title: "Esperanza",
                desc: "Promovemos un futuro lleno de propósito, lejos de la esclavitud de las adicciones.",
                icon: "🌟",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          No estás sólo!
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">¿Estás luchando con una adicción o problema que parece no tener salida? No estás solo. En la iglesia Dios es la Respuesta, creemos que Jesús sana, restaura y transforma vidas. Te invitamos con amor a acercarte. Hay esperanza. Hay libertad. ¡Ven y encuentra una nueva oportunidad en Cristo!</p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "",
              text: "Rompiendo Cadenas es eso: un espacio de libertad, restauración y propósito. Donde no trabajamos solos, sino que Dios es el centro y la fuerza que nos sostiene.",
            },
            {
              name: "",
              text: "Gracias por acompañarnos, por orar, por sostenernos como iglesia. Seguimos adelante con la certeza de que la causa de Cristo está por encima de todo.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-100 p-8 rounded-xl shadow hover:bg-gray-200 transition-colors"
            >
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <h4 className="font-bold text-gray-800">- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Horarios */}
      <section className="py-16 px-6 bg-gradient-to-t from-blue-500  to-blue-00 text-center text-white">
  <h2 className="text-4xl font-bold mb-6 text-gray-800">🕒 Horarios de Reunión</h2>
  <p className="text-lg leading-relaxed text-gray-700">
    📅 Todos los <strong>Jueves</strong>  <br />
    ⏰ 20:30 hs <br />
    📍  Iglesia CITA CON LA VIDA MONTECRISTO
  </p>
</section>


      <NavRedes />
    </>
  );
}
