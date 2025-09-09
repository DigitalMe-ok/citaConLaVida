import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import BannerCards from "../components/BannerCards"
import imgBanner from "@/public/bannerequipo.jpg"
import jovenesEP from "@/public/jovenesEP.jpg";
import hombresImg from "@/public/hombres.jpg";
import mujeresImg from "@/public/Mujeres.jpg";
import minMatrimImg from "@/public/ministerioMatrimonio.jpg";
import adiccImg from "@/public/adiccImg.jpeg";
import NavRedes from "../components/navRedes";

import Link from "next/link";
export default function Equipo() {
  const contenidoEqCards =[
    {
      img:hombresImg.src,
      nombre:"Carlos Jaime",
      ministerio:"Ministerio de hombres",
      descripcion:"Reunión los martes 20:00 HS"

    },
    {
      img:mujeresImg.src,
      nombre:"Pra. Roxana Benigno",
      ministerio:"Ministerio de mujeres",
      descripcion:"Reunión los jueves 20:00 HS"

    },
    {
      img:adiccImg.src,
      nombre:"Nahuel Feidman y Matias Cid",
      ministerio:"Ministerio de Adicciones",
      descripcion:"Reunión los jueves 21:00 HS"

    },
    {
      img:minMatrimImg.src,
      nombre:"Pr. y Pra. Marcos y Roxana Benigno",
      ministerio:"Ministerio de matrimonios",
      descripcion:"Reunión martes 21:00 hs."

    },
    {
      img:jovenesEP.src,
      nombre:"Equipo pastoral",
      ministerio:"Cita Kids",
      descripcion:"Reunión sábados 18:00 hs."

    }
    ,
    {
      img:jovenesEP.src,
      nombre:"Equipo pastoral",
      ministerio:"Ministerio de Pre. Ados. y jóvenes",
      descripcion:"Reunión sábados 20:00 hs."

    }
  ]
  return (
    <>
     <Navbar />

<BannerCards imgBanner={imgBanner} bgOpacity={"xl"}> 
  <h1 className="text-6xl text-center text-gray-200 mb-15">Cita con la vida</h1>
  <h2 className="text-lg">CITA CON LA VIDA MONTECRISTO</h2>
</BannerCards>

{/* Team Section */}
<section className="py-20 bg-gray-50">
  <div className="w-full mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">Nuestro Equipo</h2>
      <p className="text-xl text-gray-600 w-full mx-auto">
        Conoce a los líderes y pastores que guían nuestra congregación con amor y dedicación.
      </p>
      <div className="w-24 h-1 bg-red-600 mx-auto mt-8 rounded-full"></div>
    </div>

    {/* Team Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {contenidoEqCards.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          {/* Imagen circular con borde degradado */}
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gradient-to-r from-red-400 via-pink-500 to-yellow-400">
            <img
              src={item.img}
              alt={item.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">{item.nombre}</h3>
          <p className="text-red-600 font-medium mt-1">{item.ministerio}</p>
          <p className="text-gray-500 mt-2">{item.descripcion}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Redes flotantes */}
<nav className="navRedes flex flex-col items-center justify-center fixed top-100 left-10 gap-2 p-2 rounded-xl z-50" style={{backgroundColor:"#0008"}}>
  <Link className="hover:scale-125" href="">
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="#fff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
  </Link>
  {/* Otras redes similares */}
</nav>

<Footer />
<NavRedes/>
    </>
  );
}
