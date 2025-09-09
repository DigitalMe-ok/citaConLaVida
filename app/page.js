import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import BannerCards from "./components/BannerCards";
import Carousel  from "./components/carousel"
import imgBanner from "../public/imgInicio.jpg"
import TextImage from "./components/textImage";
import Meetings from "./components/meetings";
import Locations from "./components/locations";
import imgAbUs from "../public/portada.webp";
import CartaEst from "./components/cartaEst";
import NavRedes from "./components/navRedes";
import SoyNuevo from "./components/soyNuevo";
export default function Home() {
const infoEstadistica = [
  {
    title:"Ministerios",
    stat:4
  }
]
const paragraphAbUs=`
Creemos en una vida transformada por el poder del amor de Dios. Nuestro propósito es inspirar y equipar a las personas para vivir una vida plena y significativa en Cristo. 
Nuestra misión es proporcionar un lugar donde cada persona pueda experimentar el amor incondicional de Dios, crecer en su relación con Él y ser capacitado para marcar una diferencia positiva en el mundo.
Nuestras reuniones
`;
const imgs =["/CarouselMain2.jpeg","/carousel1.jpg"]

  return (
    <>
    
      <Navbar />
      <Carousel imgs={imgs} bgOpacity={"xl"} style={{backgroundColor:"#000d"}}> 
      
      <h1 className="text-6xl text-gray-200 mb-15">Bienvenido a la iglesia de la familia</h1>
      <h2 className="text-lg">CITA CON LA VIDA MONTECRISTO</h2>

      </Carousel>
   <TextImage title={"Cita Con la vida Montecristo"} paragraph={paragraphAbUs} img={imgAbUs.src}>

   </TextImage>

      <Meetings />
      <SoyNuevo></SoyNuevo>

      <Locations />
      <NavRedes/>
      <Footer />

    </>
  );
}
