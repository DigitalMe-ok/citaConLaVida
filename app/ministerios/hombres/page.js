import BannerCards from "../../components/BannerCards";
import Image from "next/image";
import imgBanner from "../../../public/hombres5.jpg";
import NavRedes from "@/app/components/navRedes";
import CarouselGaleria from "@/app/components/CarouselGalleria";
export default function HombresPage() {
  const imgsParaCarousel= [
    "/Hombres1.jpg",
    "/Hombres2.jpg",
    "/Hombres3.jpg"
  ]
  return (
    <>
      <BannerCards imgBanner={imgBanner} bgOpacity="lg">
        <h1 className="text-5xl text-white text-center font-bold mb-4">Ministerio de Hombres</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Un espacio diseñado para fortalecer la fe, la comunión y el liderazgo 
          de los hombres en nuestra iglesia y comunidad.
        </p>
      </BannerCards>

      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-600">
        El discipulado de hombres en nuestra iglesia es un programa diseñado para fortalecer y edificar la fe, carácter y liderazgo de los hombres en nuestra comunidad. A través de reuniones regulares, estudios bíblicos, tiempo de oración y actividades prácticas, buscamos fomentar relaciones auténticas entre los hombres, inspirar un compromiso más profundo con Dios y equiparlos para enfrentar los desafíos de la vida cotidiana desde una perspectiva cristiana. Nuestro objetivo es cultivar hombres piadosos, íntegros y valientes que puedan impactar positivamente a sus familias, lugares de trabajo y comunidades, reflejando el carácter de Cristo en todas sus acciones y decisiones.
        </p>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Actividades</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Reunión semanal de estudio bíblico
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Charlas de liderazgo y familia
          </li>
       {/*    <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Jornadas de servicio comunitario
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Encuentros de oración y discipulado
          </li> */}
        </ul>
      </section>

      {/* <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Horarios de Reunión</h2>
        <p className="text-lg text-gray-700">
          📅 Todos los <strong>martes</strong> a las <strong>20:00 hs</strong> <br />
          📍 Salón principal de la iglesia
        </p>
      </section> */}
      <h3 className="text-stone-800 text-center w-full mb-10 mt-5 text-5xl">Galería</h3>

      <CarouselGaleria imgs={imgsParaCarousel}/>
    

      <NavRedes/>
    </>
  );
}
