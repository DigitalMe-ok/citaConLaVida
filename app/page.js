"use client"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Meetings from "./components/meetings";
import Locations from "./components/locations";
import NavRedes from "./components/navRedes";
import SoyNuevo from "./components/soyNuevo";
import EscParaPadres from "./components/EscParaPadres";
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('./components/carousel'), { ssr: false });
export default function Home() {

  const imgs = [
     // 🔥 Evento (sin overlay ni texto)
    "/CarouselMain2.webp",
    "/carousel1.webp"
  ];

  const paragraphAbUs = `
Creemos en una vida transformada por el poder del amor de Dios. Nuestro propósito es inspirar y equipar a las personas para vivir una vida plena y significativa en Cristo. 
Nuestra misión es proporcionar un lugar donde cada persona pueda experimentar el amor incondicional de Dios, crecer en su relación con Él y ser capacitado para marcar una diferencia positiva en el mundo.
Nuestras reuniones
`;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <Carousel imgs={imgs}>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Bienvenido a la iglesia de la familia
        </h1>

        <h2 className="text-lg md:text-xl text-gray-200">
          CITA CON LA VIDA MONTECRISTO
        </h2>
      </Carousel>

      {/* INTRO */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Cita Con la Vida Montecristo
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {paragraphAbUs}
        </p>
      </section>

      <Meetings />

      {/* EVENTO DESTACADO */}
      <EscParaPadres />

      <SoyNuevo />

      <Locations />

      <NavRedes />

      <Footer />
    </>
  );
}