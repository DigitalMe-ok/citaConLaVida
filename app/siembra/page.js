import BannerCards from "../components/BannerCards";
import Image from "next/image";
import Parallax from "@/app/components/parallax";
import bannerMusicos from "@/public/bannerMusicos.jpeg"
import TextImg from "@/app/components/textImage";
import danzaImg from "@/public/danzaImg.jpg";
import imgBanner from "@/public/siembraBanner.jpg"
import NavRedes from "../components/navRedes";
export default function SiembraPage() {
 
  
  return (
    <>    
    
    <BannerCards imgBanner={imgBanner}>
      <div className="tituloPag mb-30">
      <h1 className="text-4xl text-gray-300 text-center  mb-15"> 
        Dando con fé
      </h1>
      <h3 className="text-xl text-gray-200 text-center max-w-300 mb-5">Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejercitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde. </h3>
      <h4 className="text-lg text-gray-400 text-center">Malaquias 3:10 (RVR1960)</h4>
      </div>
      <div className="datosTransf">
        <h2 className="text-2xl text-gray-300 text-center">Datos para transferir</h2>
        <div className="cards containerDatos justify-center items-center ">
          <div className="card flex flex-col justify-center items-center cardSiembrBanner">
            <h3 className="text-200 text-lg font-bold ">Alias</h3>
            <p className="text-300 text-md">CITA.PESOS.GALICIA</p>
          </div>
          <hr className="border-1 divisionDatos"></hr>
          <div className="card flex flex-col justify-center items-center cardSiembrBanner">
            <h3 className="text-200 text-lg font-bold ">CBU</h3>
            <p className="text-300 text-md">0070138530004062070170</p>
          </div>
        </div>
      </div>
    </BannerCards>
    <NavRedes/>

    
    </>
  );
}
