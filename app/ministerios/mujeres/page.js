// app/ministerios/jovenes/page.jsx
import Image from "next/image";
import img from "@/public/imgNosotros.webp"
import imgBanner from "../../../public/bannerMujeres.webp";
import BannerCards from "@/app/components/BannerCards";
import TextImg from "@/app/components/textImage";

import CarouselGaleria from "@/app/components/CarouselGalleria.js";
export default function MujeresPage() {
  const textoDiscipulado = ` Un espacio donde las mujeres pueden crecer espiritualmente, fortalecer sus relaciónes con Dios y entre ellas, y ser equipadas para enfrentar los desafíos de la vida cotidiana con fé y confianza. ¡Te esperamos!`
  const imgsParaCarousel = [
    
      "/Mujeres.webp",


    "/mujeres2.webp",

      "/jovenes3.webp"

  ]
  return (
    <>   
  
    <BannerCards imgBanner={imgBanner} className="mt-60 mb-50 flex flex-col gap-10 justify-center items-center">

    <h1 className="text-4xl text-gray-200">Ministerio de mujeres</h1>
    <h2 className="text-md text-gray-300 txtBannMuj">CITA CON LA VIDA MONTECRISTO</h2>
    <div className="flex cardsMujBanner gap-10">
    <div  className="block max-w-sm p-6 bg-red-200 border border-gray-200 rounded-lg shadow-sm hover:bg-red-300">
      <h5 className="mb-2 text-2xl  tracking-tight text-gray-900">{"La mujer virtuosa es corona de su marido; ella es digna de honra y su vida refleja la sabiduría de Dios."}</h5>
      <p className="text-right text-gray-800 ">- Provervios 12:4</p>
      </div>
      <div  className="block max-w-sm p-6 bg-red-200 border border-gray-200 rounded-lg shadow-sm hover:bg-red-300">
      <h5 className="mb-2 text-2xl  tracking-tight text-gray-900">{"Tú fuiste creada a la imagen de Dios, y en Él encuentras tu valor y propósito. Eres amada, preciosa y elegida para cumplir Su voluntad." }</h5>
      <p className="text-right text-gray-800 ">– Génesis 1:27, 1 Pedro 2:9</p>
      </div>
      <div  className="block max-w-sm p-6 bg-red-200 border border-gray-200 rounded-lg shadow-sm hover:bg-red-300">
      <h5 className="mb-2 text-2xl font- tracking-tight text-gray-900">{"La mujer que teme al Señor es digna de alabanza. Su fe y su amor por Dios transforman su hogar y su comunidad."}</h5>
      <p className="text-right text-gray-800 ">– Proverbios 31:30</p>
      </div>
    </div>

    </BannerCards>
 
      <section className="py-12 px-6 max-w-screen mx-auto text-center">
        <TextImg title={"Discipulado"} paragraph={textoDiscipulado} img={img.src}></TextImg>

      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Actividades</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li className="bg-white shadow-md rounded-xl p-6">✅ Reunión semanal de mujeres</li>
          <li className="bg-white shadow-md rounded-xl p-6">✅ Talleres de liderazgo</li>
        {/*   <li className="bg-white shadow-md rounded-xl p-6">✅ Campamentos y excursiones</li>
          <li className="bg-white shadow-md rounded-xl p-6">✅ Programas de voluntariado</li> */}
        </ul>
      </section>

      {/* <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Horarios de Reunión</h2>
        <p className="text-lg text-gray-700">
          📅 Todos los <strong>miércoles</strong> a las <strong>19:30 hs</strong> <br />
          📍 IGLESIA CITA CON LA VIDA MONTECRISTO
        </p>
      </section> */}
      <h3 className="text-stone-800 text-center w-full mb-10 mt-5 text-5xl">Galería</h3>

      <CarouselGaleria imgs={imgsParaCarousel}/>
  
    </>
  );
}
