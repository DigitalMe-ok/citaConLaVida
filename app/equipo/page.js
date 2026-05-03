import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerCards from "../components/BannerCards";
import imgBanner from "@/public/bannerequipo.webp";
import jovenesEP from "@/public/jovenesEP.webp";
import hombresImg from "@/public/hombres.webp";
import mujeresImg from "@/public/Mujeres.webp";
import minMatrimImg from "@/public/ministerioMatrimonio.webp";
import adiccImg from "@/public/adiccImg.webp";
import NavRedes from "../components/navRedes";
import Link from "next/link";

export default function Equipo() {
  const contenidoEqCards = [
    {
      img: hombresImg.src,
      nombre: "Carlos Jaime",
      ministerio: "Ministerio de hombres",
      descripcion: "Reunión los martes 20:00 HS",
      link: "/ministerios/hombres",
    },
    {
      img: mujeresImg.src,
      nombre: "Pra. Roxana Benigno",
      ministerio: "Ministerio de mujeres",
      descripcion: "Reunión los jueves 20:00 HS",
      link: "/ministerios/mujeres",
    },
    {
      img: adiccImg.src,
      nombre: "Nahuel Feldmann y Matias Cid",
      ministerio: "Ministerio de Adicciones",
      descripcion: "Reunión los jueves 21:00 HS",
      link: "/ministerios/adicciones",
    },
    {
      img: minMatrimImg.src,
      nombre: "Pr. y Pra. Marcos y Roxana Benigno",
      ministerio: "Ministerio de matrimonios",
      descripcion: "Reunión martes 21:00 hs.",
      link: "/ministerios/matrimonios",
    },
    {
      img: jovenesEP.src,
      nombre: "Equipo pastoral",
      ministerio: "Cita Kids",
      descripcion: "Reunión sábados 18:00 hs.",
      link: "/ministerios/citaKids",
    },
    {
      img: jovenesEP.src,
      nombre: "Equipo pastoral",
      ministerio: "Pre Adolescentes y Jóvenes",
      descripcion: "Reunión sábados 20:00 hs.",
      link: "/ministerios/jovenes",
    },
  ];

  return (
    <>
      <Navbar />

      <BannerCards imgBanner={imgBanner} bgOpacity={"xl"}>
        <h1 className="text-6xl text-center text-gray-200 mb-15">
          Equipo de colaboradores
        </h1>
        <h2 className="text-gray-300 text-lg">
          CITA CON LA VIDA MONTECRISTO
        </h2>
      </BannerCards>

      {/* TEAM SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Conoce a quienes acompañan y guían cada área de la comunidad.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contenidoEqCards.map((item, index) => (
              <Link
                key={index}
                href={item.link}
               className="group relative block rounded-2xl overflow-hidden h-[420px] cursor-pointer transition hover:scale-[1.02] shadow-md hover:shadow-xl"
              >
                {/* Imagen */}
                <img
                  src={item.img}
                  alt={item.nombre}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Contenido con blur */}
                <div className="absolute bottom-0 w-full p-6 backdrop-blur-md bg-black/20">
                  <p className="text-sm text-gray-300 mb-1">
                    {item.ministerio}
                  </p>

                  <h3 className="text-2xl font-semibold text-white leading-tight">
                    {item.nombre}
                  </h3>

                  <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    {item.descripcion}
                  </p>
                </div>

                {/* Borde sutil */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-red-500/40 transition"></div>

                {/* Línea animada */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <NavRedes />
    </>
  );
}