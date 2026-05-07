// app/ministerios/jovenes/page.jsx
/* import BannerCards from "../../components/BannerCards";
import Image from "next/image";
import imgBanner from "../../../public/bannerJovenes.webp";
import NavRedes from "@/app/components/navRedes";
import CarouselGaleria from "@/app/components/CarouselGalleria";
export default function JovenesPage() {
  const imgsParaCarousel = [ 
    "/jovenes6.webp",
    "/jovenes4.webp",
    "/jovenes3.webp"
  ]
  return (
    <>
      <BannerCards imgBanner={imgBanner} bgOpacity="lg">
        <h1 className="text-5xl text-center text-white font-bold mb-4">Ministerio de Jóvenes</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Desarrolla tu don al servicio de Dios.
        </p>
      </BannerCards>

      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-600">
        El ministerio de jovenes prepara a los jóvenes con visión de un futuro integro, entendiendo los preceptos de la sana doctrina. Involucrar a los jóvenes en el servicio, la adoración y el liderazgo les permite crecer y contribuir.
Los jóvenes enfrentan decisiones importantes sobre su futuro. El ministerio debe ofrecer apoyo espiritual y práctico mientras navegan por la universidad, la carrera, trabajos y las relaciones.

        </p>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Actividades</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li className="bg-white shadow-md rounded-xl p-6">✅ Preadolescentes:  Etapa Crucial: La preadolescencia es un período de transición entre la niñez y la adolescencia. Los preadolescentes necesitan un espacio seguro donde puedan explorar su fe, hacer preguntas y recibir orientación. El ministerio de preadolescentes está centrado en establecer sólidos fundamentos bíblicos. Es el momento adecuado para enseñarles sobre la gracia, la salvación y la vida en Cristo.</li>
          <li className="bg-white shadow-md rounded-xl p-6">✅ Adolescentes:  Desafíos de la Adolescencia: La adolescencia es una etapa de cambios físicos, emocionales y sociales. Los adolescentes enfrentan desafíos como la identidad, las presiones sociales y las dudas de fe. El ministerio de adolescentes debe ir más allá de la superficialidad. Predicar la Palabra de Dios con fidelidad y abordar temas relevantes para ellos es esencial.</li>
          <li className="bg-white shadow-md rounded-xl p-6">✅ Actividades de verano:  Del 27 al 31 de enero, se llevó a cabo una capacitación en desarrollo web dirigida a los jóvenes y adolescentes de nuestro ministerio. Este programa tuvo como propósito brindarles nuevas herramientas y conocimientos, motivándolos a continuar su formación y preparándolos para enfrentar con éxito su futuro laboral y profesional.</li>
          {/* <li className="bg-white shadow-md rounded-xl p-6">✅ Programas de voluntariado</li> 
       /*  </ul>
      </section>

      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Horarios de Reunión</h2>
        <p className="text-lg text-gray-700">
          📅 Todos los <strong>sábados </strong> a las <strong>20:00 hs</strong> <br />
          📌 IGLESIA CITA CON LA VIDA MONTECRISTO
        </p>
      </section>
      <h3 className="text-stone-800 text-center w-full mb-10 mt-5 text-5xl">Galería</h3>

  <CarouselGaleria imgs={imgsParaCarousel}/>
    
      <NavRedes/>
    </>
  ); */
//}

import BannerCards from "../../components/BannerCards";
import Image from "next/image";
import imgBanner from "../../../public/jovCita9.webp";
import NavRedes from "@/app/components/navRedes";
import GaleriaGrid from "./GaleriaGrid";

export default function JovenesPage() {
  const imgsParaCarousel = [
    "/jovCita1.webp",
    "/jovCita2.webp",
    "/jovCita5.webp",
    "/jovCita4.webp",
    "/jovCita6.webp",
    "/jovCita7.webp",
    "/jovCita8.webp",
    "/jovCita3.webp",
    "/danza.webp"
  ];

  return (
    <>
      <BannerCards imgBanner={imgBanner} bgOpacity="lg">
        <h1 className="text-5xl text-center text-white font-bold mb-4">
          Ministerio de Jóvenes
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto text-center">
          Desarrolla tu don al servicio de Dios.
        </p>
      </BannerCards>

      {/* MISIÓN */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            El ministerio de jovenes prepara a los jóvenes con visión de un futuro integro, entendiendo los preceptos de la sana doctrina. Involucrar a los jóvenes en el servicio, la adoración y el liderazgo les permite crecer y contribuir.
            Los jóvenes enfrentan decisiones importantes sobre su futuro. El ministerio debe ofrecer apoyo espiritual y práctico mientras navegan por la universidad, la carrera, trabajos y las relaciones.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">En qué creemos</h3>
          <ul className="space-y-3">
            <li>✨ Fe práctica y real</li>
            <li>🤝 Comunidad auténtica</li>
            <li>🚀 Desarrollo personal</li>
            <li>🙏 Servicio con propósito</li>
          </ul>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Actividades
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 max-w-6xl mx-auto">
          <li className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            ✅ Preadolescentes: Etapa Crucial: La preadolescencia es un período de transición entre la niñez y la adolescencia. Los preadolescentes necesitan un espacio seguro donde puedan explorar su fe, hacer preguntas y recibir orientación. El ministerio de preadolescentes está centrado en establecer sólidos fundamentos bíblicos. Es el momento adecuado para enseñarles sobre la gracia, la salvación y la vida en Cristo.
          </li>

          <li className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            ✅ Adolescentes: Desafíos de la Adolescencia: La adolescencia es una etapa de cambios físicos, emocionales y sociales. Los adolescentes enfrentan desafíos como la identidad, las presiones sociales y las dudas de fe. El ministerio de adolescentes debe ir más allá de la superficialidad. Predicar la Palabra de Dios con fidelidad y abordar temas relevantes para ellos es esencial.
          </li>

          <li className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition md:col-span-2">
            ✅ Actividades de verano: Del 27 al 31 de enero, se llevó a cabo una capacitación en desarrollo web dirigida a los jóvenes y adolescentes de nuestro ministerio. Este programa tuvo como propósito brindarles nuevas herramientas y conocimientos, motivándolos a continuar su formación y preparándolos para enfrentar con éxito su futuro laboral y profesional.
          </li>
        </ul>
      </section>

      {/* HORARIOS */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Horarios de Reunión
        </h2>
        <p className="text-lg">
          📅 Todos los <strong>sábados </strong> a las <strong>20:00 hs</strong>
          <br />
          📌 IGLESIA CITA CON LA VIDA MONTECRISTO
        </p>
      </section>

      {/* GALERÍA */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-5xl text-center w-full mb-10 mt-5 text-stone-800">
          Galería
        </h3>

        <GaleriaGrid imgs={imgsParaCarousel} />
      </section>

      <NavRedes />
    </>
  );
}