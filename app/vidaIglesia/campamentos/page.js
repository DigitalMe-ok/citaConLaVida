import BannerCards from "../../components/BannerCards";
import Image from "next/image";
import Parallax from "@/app/components/parallax";
import bannerMusicos from "@/public/bannerMusicos.jpeg"
import TextImg from "@/app/components/textImage";
import danzaImg from "@/public/danzaImg.jpg";
import CampaFt from "@/public/Campa3.jpg"
import CampaFtTxtImg from "@/public/Campa5.jpg"
import Link from 'next/link';
import NavRedes from "@/app/components/navRedes";
export default function CampamentosPage() {

  const txtImgCampa = `En el mes de febrero se desarrollaron los campamentos para niños de 10 a 18 años, en los cuales se vivieron días espectaculares en la presencia de Dios!; Donde se les impartió palabra y compartieron momentos únicos en un lugar adaptado para el disfrute en tiempo estival; con juegos acuáticos y piscinas adaptadas para todas las edades. No dudes de consultar las fechas para los próximos campamentos te esperamos!.
¡Pasarás un tiempo hermoso en la presencia de Dios!
`
  return (
    <>    
    
    <BannerCards imgBanner={CampaFt}>
      <h1 className="text-4xl text-gray-300 text-center"> 
        Campamentos
      </h1>
      <h3 className="text-lg text-gray-400 text-center">CITA CON LA VIDA</h3>
    </BannerCards>


     

    <TextImg title={"Acerca de los campamentos"} paragraph={txtImgCampa} img={CampaFtTxtImg.src} imgDist={"izq"}>


    </TextImg>
    <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 border border-red-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Estas interesado en sumarte ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Te invitamos a contactarte para más información. 
              Pasaremos un tiempo hermoso en presencia de Dios!.
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
