import BannerCards from "../../components/BannerCards";
import Image from "next/image";
import Parallax from "@/app/components/parallax";
import bannerMusicos from "@/public/bannerMusicos.jpeg"
import TextImg from "@/app/components/textImage";
import danzaImg from "@/public/danzaImg.jpg";
import NavRedes from "@/app/components/navRedes";
import Link from 'next/link';
export default function EscMusicPage() {
  const txtBanner=[
    `Más allá de la excelencia musical, debemos concentrarnos en los objetivos de un ministerio musical eficaz. La música tiene la capacidad divina de conmovernos e inspirarnos. Los objetivos de la adoración incluyen, recordar verdades bíblicas; las canciones deben ayudar al pueblo a recordar las verdades fundamentales de la fe. La música enseña y amonesta a los demás en la sabiduría de Dios. `,
    `Adorar a Dios: La adoración fluye desde corazones agradecidos por quién es Dios y lo que ha hecho. Los músicos que sirven en el ministerio cultivan su entendimiento del evangelio, crecen en santidad y luchan contra el pecado. Además, desarrollan sus habilidades musicales. `,
    `El coro, desempeña un papel crucial en el ministerio. Su función es importante y debe recibir atención especial. El ministerio de música no se trata sólo de la calidad musical, sino de dirigir a la congregación hacia una adoración significativa y centrada en Dios.`
  ] 
  const txtDanza = `Expresa tu adoración a través del arte del movimiento. En el taller de danza aprenderás técnicas y coreografías diseñadas para glorificar a Dios, desarrollando sensibilidad y conexión espiritual mientras bailas. Es un espacio donde cuerpo y alma se unen en alabanza, fomentando creatividad, disciplina y un corazón dispuesto para ministrar a través de la danza. ¡Únete!`
  return (
    <>    
    <section className="mt-60 mb-50 flex flex-col gap-10 justify-center items-center">
    <h1 className="text-4xl text-gray-800">Escuela de músicos</h1>
    <h2 className="text-md text-gray-600">CITA CON LA VIDA MONTECRISTO</h2>
    {
      txtBanner.map((element,index) => (
        
        <p key={index} className="max-w-450 text-gray-800 text-center text-lg">{element}</p>
        
    ))
    }
    </section>
     <Parallax img={bannerMusicos.src}>
      <p className="max-w-300 text-xl text-center">
      {"Cada talento y don que Dios nos da es una oportunidad para adorarle con todo nuestro ser. Como músicos, somos instrumentos en Sus manos, llamados a glorificar a Dios a través de la música, llevando Su mensaje de amor y esperanza al mundo."  }
      </p>      
      
     </Parallax>
     

    <TextImg title={"Taller de danza"} paragraph={txtDanza} img={danzaImg.src}>


    </TextImg>
    <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 border border-red-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Desarrolla tu don, se parte de este increible ministerio.
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Te invitamos a contactarte para más información. 
              {/* Pasaremos un tiempo hermoso en presencia de Dios!. */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {/*  <button className="bg-gradient-to-r from-red-950 to-orange-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Planificar mi visita
              </button> */}
              <Link href="/contacto"> <button className="border-2 border-red-950 text-amber-950 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-800 hover:text-white transition-all duration-300 transform hover:scale-105">
                Contactar con nosotros
              </button></Link> 
            </div>
          </div>
        </div>
        <NavRedes/>
    </>
  );
}
