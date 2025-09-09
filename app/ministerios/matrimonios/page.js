/* // app/ministerios/jovenes/page.jsx
import Image from "next/image";
import img from "@/public/pareja.jpeg"
import BannerCards from "@/app/components/BannerCards";
import imgBanner from "../../../public/matrimonioBanner.jpg";
import TextImg from "@/app/components/textImage";
import NavRedes from "@/app/components/navRedes";
export default function MatrimonioPage() {
  const textoDiscipulado = ` Romanos 12:2 y Jeremías 29:11 nos aseguran que sus planes son buenos y beneficiosos. Casarse con un Cristiano comprometido: Proverbios 21:9 y 25:24 advierten sobre las consecuencias de casarse equivocadamente. Buscar un cónyuge comprometido con Cristo es esencial. 2 Corintios 6:14-18 nos enseña sobre no unirnos en yugo desigual con no creyentes. El matrimonio debe ser una unión centrada en Cristo. Prioridad en el matrimonio: Mateo 6:33 nos recuerda buscar primero el reino de Dios.

Mantener a Dios como nuestra prioridad más importante es esencial. 1 Corintios 7:32-35 aconseja a los solteros y casados a enfocarse en servir al Señor sin distracciones. El ministerio de matrimonios debe fomentar la unidad, el crecimiento espiritual y la adoración a Dios en la relación conyugal.
`
  return (
    <>   
  
    <BannerCards imgBanner={imgBanner}>

    <h1 className="text-4xl text-gray-200">Ministerio de matrimonios</h1>
    <h2 className="text-md text-gray-300">CITA CON LA VIDA MONTECRISTO</h2>

    </BannerCards>
 
      <section className="py-12 px-6 max-w-screen mx-auto text-center">
        <TextImg title={"Discipulado"} paragraph={textoDiscipulado} img={img.src}></TextImg>
        <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
        <p className="text-lg text-gray-600">
        </p>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Actividades</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li className="bg-white shadow-md rounded-xl p-6">✅ Reunión semanal de matrimonios</li>
         <li className="bg-white shadow-md rounded-xl p-6">✅Estudio de la palabra de Dios.</li>
           {/* className="bg-white shadow-md rounded-xl p-6">✅ Campamentos y excursiones</li>
          <li className="bg-white shadow-md rounded-xl p-6">✅ Programas de voluntariado</li> *///}
       // </ul>
      //</section>
/* 
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Horarios de Reunión</h2>
        <p className="text-lg text-gray-700">
          📅 Todos los <strong>jueves</strong> a las <strong>20:00 hs</strong> <br />
          📍 IGLESIA CITA CON LA VIDA MONTECRISTO
        </p>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recursos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Image src="/recursos.jpg" alt="Jóvenes 1" width={350} height={250} className="rounded-xl shadow-md"/>
          <Image src="/recursos1.jpg" alt="Jóvenes 2" width={350} height={250} className="rounded-xl shadow-md"/>
          <Image src="/recursos3.webp" alt="Jóvenes 3" width={350} height={250} className="rounded-xl shadow-md"/>
        </div>
      </section>
      <NavRedes/>
    </> */
 // );
//}
 //*/
 // app/ministerios/jovenes/page.jsx
// app/ministerios/jovenes/page.jsx
import Image from "next/image";
import img from "@/public/pareja.jpeg";
import BannerCards from "@/app/components/BannerCards";
import imgBanner from "../../../public/matrimonioBanner.jpg";
import TextImg from "@/app/components/textImage";
import NavRedes from "@/app/components/navRedes";
import Link from "next/link";

export default function MatrimonioPage() {
  const textoDiscipulado = ` Romanos 12:2 y Jeremías 29:11 nos aseguran que sus planes son buenos y beneficiosos. Casarse con un Cristiano comprometido: Proverbios 21:9 y 25:24 advierten sobre las consecuencias de casarse equivocadamente. Buscar un cónyuge comprometido con Cristo es esencial. 2 Corintios 6:14-18 nos enseña sobre no unirnos en yugo desigual con no creyentes. El matrimonio debe ser una unión centrada en Cristo. Prioridad en el matrimonio: Mateo 6:33 nos recuerda buscar primero el reino de Dios.

Mantener a Dios como nuestra prioridad más importante es esencial. 1 Corintios 7:32-35 aconseja a los solteros y casados a enfocarse en servir al Señor sin distracciones. El ministerio de matrimonios debe fomentar la unidad, el crecimiento espiritual y la adoración a Dios en la relación conyugal.
`;

  const recursos = [
    {
      img: "/recursos.jpg",
      alt: "Recurso 1",
      enlace: "http://citaconlavida.com.ar/radiohtml.html"
    },
    {
      img: "/recursos1.jpg",
      alt: "Recurso 2",
      enlace: "https://www.biblegateway.com/?language=es"
    },
    {
      img: "/recursos3.webp",
      alt: "Recurso 3",
      enlace: "https://www.youtube.com/@citaconlavidamontecristo3858"
    }
  ];

  return (
    <>
      <BannerCards imgBanner={imgBanner}>
        <h1 className="text-4xl text-center text-gray-200">Ministerio de matrimonios</h1>
        <h2 className="text-md text-gray-300">CITA CON LA VIDA MONTECRISTO</h2>
      </BannerCards>

      <section className="py-12 px-6 max-w-screen mx-auto text-center">
        <TextImg title={"Discipulado"} paragraph={textoDiscipulado} img={img.src}></TextImg>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Actividades</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          <li className="bg-white shadow-md rounded-xl p-6">✅ Reunión semanal de matrimonios</li>
          <li className="bg-white shadow-md rounded-xl p-6">✅ Estudio de la palabra de Dios.</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Horarios de Reunión</h2>
        <p className="text-lg text-gray-700">
          📅 Todos los <strong>jueves</strong> a las <strong>20:00 hs</strong> <br />
          📍 IGLESIA CITA CON LA VIDA MONTECRISTO
        </p>
      </section>

      {/* Sección de Recursos con cards de imagen completa */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Recursos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recursos.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md"
            >
              {/* Imagen ocupa toda la tarjeta */}
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover"
              />

              {/* Botón encima de la imagen en la parte inferior */}
              <Link
                href={item.enlace}
                target="_blank"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                Visitar
              </Link>
            </div>
          ))}
        </div>
      </section>

      <NavRedes/>
    </>
  );
}
