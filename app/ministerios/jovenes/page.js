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

import Image from "next/image";
import { Big_Shoulders, Manrope, JetBrains_Mono } from "next/font/google";
import imgBanner from "../../../public/jovenesImg/jovenesImg.avif";
import NavRedes from "@/app/components/navRedes";
import GaleriaGrid from "./GaleriaGrid";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

export default function JovenesPage() {
const imgsParaCarousel = [
  {
    url: "/jovenesImg/IMG_5775.avif",
    cols: 2,
    rows: 2,
    mobileCols: 3,
    mobileRows: 2,
  },
  {
    url: "/jovCita2.webp",
    cols: 3,
    mobileCols: 2,
    mobileRows: 1,
  },
  {
    url: "/jovenesImg/IMG_2387.avif",
    cols: 3,
    mobileCols: 2,
    mobileRows: 1,
  },
  {
    url: "/jovenesImg/IMG_2495.avif",
    cols: 2,
    mobileCols: 3,
    mobileRows: 1,
  },
  {
    url: "/jovCita6.webp",
    cols: 4,
    mobileCols: 2,
    mobileRows: 2,
  },
  {
    url: "/jovCita7.webp",
    cols: 3,
    mobileCols: 3,
    mobileRows: 1,
  },
  {
    url: "/jovenesImg/IMG_2424.avif",
    cols: 2,
    mobileCols: 3,
    mobileRows: 1,
  },
  {
    url: "/jovenesImg/IMG_2425.avif",
    cols: 3,
    rows: 2,
    mobileCols: 2,
    mobileRows: 1,
  },
  {
    url: "/danza.webp",
    cols: 1,
    mobileCols: 2,
    mobileRows: 1,
  },
  {
    url: "/jovenesImg/IMG_5772.avif",
    cols: 2,
    mobileCols: 3,
    mobileRows: 2,
  },
  {
    url: "/jovenesImg/IMG_2415(1).avif",
    cols: 2,
    mobileCols: 2,
    mobileRows: 1,
  },
];

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <style>{`
        @keyframes emberPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ember-glow { animation: none !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="bannerJovenes relative overflow-hidden bg-[#140D1E] pb-28 pt-24 px-6">
        {/* textura de fondo */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src={imgBanner}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b " />

        {/* resplandor tipo fogón */}
        <div
          className="ember-glow pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, #FF5B39 0%, transparent 70%)",
            animation: "emberPulse 5s ease-in-out infinite",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <p
            className="text-[#facc15] text-xs md:text-sm tracking-[0.3em]  mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Iglesia Cita Con La Vida · Montecristo
          </p>
          <h1
            className="text-white uppercase leading-[0.85] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(4rem, 14vw, 9rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Jóvenes
          </h1>
          <p className="text-[#C7BBDA] mb-5 text-lg md:text-xl max-w-xl mx-auto">
            Desarrollá tu don al servicio de Dios.
          </p>
        </div>

        {/* corte diagonal tipo afiche arrancado */}

      </section>

      {/* MISIÓN */}
      <section className="bg-[#000] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span
              className="text-[#facc15] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Nuestra misión
            </span>
            <h2
              className="text-[#fff] mt-3 mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Formar con propósito, no solo entretener
            </h2>
            <p className="text-[#fff] text-lg leading-relaxed">
              El ministerio de jóvenes prepara a los jóvenes con visión de un
              futuro íntegro, entendiendo los preceptos de la sana doctrina.
              Involucrarlos en el servicio, la adoración y el liderazgo les
              permite crecer y contribuir.
            </p>
            <p className="text-[#fff] text-lg leading-relaxed mt-4">
              Los jóvenes enfrentan decisiones importantes sobre su futuro. El
              ministerio ofrece apoyo espiritual y práctico mientras navegan
              la universidad, la carrera, el trabajo y las relaciones.
            </p>
          </div>

          <div className="bg-transparent border-2 border-[#facc15] rounded-2xl p-8 md:p-10">
            <h3
              className="text-white mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem" }}
            >
              En qué creemos
            </h3>
            <ul className="space-y-5">
              {[
                ["Fe práctica", "que se sostiene en el día a día, no solo el sábado a la noche."],
                ["Comunidad auténtica", "un lugar donde se puede llegar tal cual uno es."],
                ["Desarrollo personal", "acompañamiento real para estudio, trabajo y vocación."],
                ["Servicio con propósito", "cada don encuentra un lugar para ser usado."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-4">
                  <span className="w-1 shrink-0 rounded-full bg-[#facc15]" />
                  <div>
                    <p className="text-white font-semibold">{title}</p>
                    <p className="text-[#C7BBDA] text-sm mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section className="bg-[#222222] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span
            className="text-[#FFB648] text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Cómo trabajamos
          </span>
          <h2
            className="text-white mt-3 mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Actividades por etapa
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF3E7] rounded-2xl p-8">
              <span
                className="inline-block text-[#841617] text-xs tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Etapa · 9 a 12 años
              </span>
              <h3
                className="text-[#140D1E] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem" }}
              >
                Preadolescentes
              </h3>
              <p className="text-[#4A3E5C] leading-relaxed">
                Un espacio seguro para explorar la fe, hacer preguntas y
                recibir orientación. El foco está en establecer fundamentos
                bíblicos sólidos: gracia, salvación y vida en Cristo.
              </p>
            </div>

            <div className="bg-[#FBF3E7] rounded-2xl p-8">
              <span
                className="inline-block text-[#841617] text-xs tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Etapa · 13 a 17 años
              </span>
              <h3
                className="text-[#140D1E] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem" }}
              >
                Adolescentes
              </h3>
              <p className="text-[#4A3E5C] leading-relaxed">
                Identidad, presiones sociales y dudas de fe piden algo más que
                superficialidad. Predicamos la Palabra con fidelidad y
                abordamos los temas que de verdad les importan.
              </p>
            </div>

            <div className="bg-[#FBF3E7] rounded-2xl p-8 md:col-span-2">
              <span
                className="inline-block text-[#841617] text-xs tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Evento · Enero
              </span>
              <h3
                className="text-[#140D1E] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem" }}
              >
                Actividades de verano
              </h3>
              <p className="text-[#4A3E5C] leading-relaxed">
                Del 27 al 31 de enero llevamos adelante una capacitación en
                desarrollo web para jóvenes y adolescentes del ministerio,
                pensada para darles herramientas concretas de cara a su
                futuro laboral y profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="bg-[#000] py-20 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#facc15] bg-[#222222]/20 px-8 py-10 md:px-12 md:py-12 text-center">
          <span
            className="text-[#d72638] text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Reservá la fecha
          </span>
          <p
            className="text-white mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1,
            }}
          >
            Sábados · 20:00hs
          </p>
          <p className="text-[#2222222] mt-4 text-lg">
            Iglesia Cita Con La Vida Montecristo
          </p>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-[#000] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span
            className="text-[#fff] text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Momentos
          </span>
          <h2
            className="text-[#facc15] mt-3 mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Galería
          </h2>
          <GaleriaGrid imgs={imgsParaCarousel} />
        </div>
      </section>

      <NavRedes />
    </div>
  );
}