/* import BannerCards from "../../components/BannerCards";
import Image from "next/image";
export default function CitaKidsPage() {
  return (
    <>    
    <section className="mt-60 mb-50 flex flex-col gap-10 justify-center items-center">
    <h1 className="text-4xl text-gray-800">Cita Kids</h1>
    <h2 className="text-md text-gray-600">CITA CON LA VIDA MONTECRISTO</h2>
    </section>
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-600">
          Equipar a los hombres para vivir conforme al llamado de Dios, 
          siendo ejemplo en sus hogares, trabajo y comunidad.
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
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Jornadas de servicio comunitario
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Encuentros de oración y discipulado
          </li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Horarios de Reunión</h2>
        <p className="text-lg text-gray-700">
          📅 Todos los <strong>viernes</strong> a las <strong>20:00 hs</strong> <br />
          📍 Salón principal de la iglesia
        </p>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Galería</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Image
            src="/pastorSinFondo.png"
            alt="Ministerio de Hombres 1"
            width={350}
            height={250}
            className="rounded-xl shadow-md"
          />
          <Image
            src="/portada.webp"
            alt="Ministerio de Hombres 2"
            width={350}
            height={250}
            className="rounded-xl shadow-md"
          />
          <Image
            src="/imgInicio.jpg"
            alt="Ministerio de Hombres 3"
            width={350}
            height={250}
            className="rounded-xl shadow-md"
          />
        </div>
      </section>
    </>
  );
}
 */
// app/ministerios/citakids/page.jsx
import BannerCards from "../../components/BannerCards";
import Image from "next/image";
import imgBanner from "@/public/Bannerkids.jpg"
import NavRedes from "@/app/components/navRedes";
import CarouselGaleria from "@/app/components/CarouselGalleria";
export default function CitaKidsPage() {
  const imgsParaCarousel = [
    "/capacitacion.jpeg",
    "/capacitacion2.jpeg",
    "/capacitacion3.jpeg",
    "/capacitacion4.jpeg",
    "/capacitacion5.jpeg",
    "/capacitacion6.jpeg",
    "/capacitacion7.jpeg",
    "/capacitacion8.jpeg",
    "/capacitacion1.jpeg"
  ]
  return (
    <>    
      <BannerCards imgBanner={imgBanner}>
        <h1 className="text-4xl text-gray-200 mb-15">Cita Kids</h1>
        <h3 className="text-xl text-center text-gray-200 max-w-2xl mb-5">Pero Jesús les dijo: «Dejen que los niños vengan a mí. ¡No los detengan! Pues el reino del cielo pertenece a los que son como estos niños».</h3>
        <h3 className="text-md text-gray-300">(Mateo 19:14 NTV)</h3>
      </BannerCards>

      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-600">
        El objetivo principal del ministerio de niños es ayudar a los niños a escuchar y responder al evangelio. Es un espacio donde los pequeños pueden aprender sobre Dios, Jesús y la Biblia de manera accesible y significativa. Además, el ministerio de niños proporciona un contexto para la amistad y relaciones seguras entre generaciones. Los niños interactúan con adultos piadosos que les guían y les muestran el amor de Cristo. Los niños aprenden el contenido y la importancia de las Escrituras. Se les enseña sobre la creación, el pecado, la gracia, la salvación y cómo vivir una vida centrada en Jesús.
El enfoque debe ser sano y divertido, adaptado a la edad de cada niño. Las lecciones bíblicas, canciones, juegos y actividades son apropiadas y atractivas. Los niños crecen en su fe y desarrollan una relación personal con Jesús. El ministerio de niños es más grande de lo que imaginamos. No sólo impacta a los niños, sino también a las familias y a toda la iglesia.

        </p>
      </section>
{/* 
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Actividades</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Reunión semanal de estudio bíblico
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Charlas de liderazgo y familia
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Jornadas de servicio comunitario
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            ✅ Encuentros de oración y discipulado
          </li>
        </ul>
      </section> */}

      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Horarios de Reunión</h2>
        <p className="text-lg text-gray-700">
          📅 Todos los <strong>viernes</strong> a las <strong>20:00 hs</strong> <br />
          📍 Salón principal de la iglesia
        </p>
      </section>
      <h3 className="text-stone-800 text-center w-full mb-10 mt-5 text-5xl">Galería</h3>

  <CarouselGaleria imgs={imgsParaCarousel}/>
    
      <NavRedes/>
    </>
  );
}
