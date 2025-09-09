/* import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import BannerCards from "../components/BannerCards"
import imgBanner from "../../public/imgNosotros.jpg"
import AboutUs from "../components/textImage";
import Meetings from "../components/meetings";
import Locations from "../components/locations";
import PresentPastor from "../components/presentacionPastor";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <BannerCards imgBanner={imgBanner} bgOpacity={"xl"}> 
      
      <h1 className="text-6xl text-gray-200 mb-15">Nosotros</h1>
      <h2 className="text-2xl mb-20 max-w-450">La vida del pastor es una vocación llena de desafíos, sacrificios y bendiciones. El pastor lleva la carga de cuidar las almas de la congregación. Esto implica orar por ellos, aconsejarlos, visitarlos en momentos de necesidad y guiarlos en su caminar con Dios. La responsabilidad de predicar la Palabra de Dios con fidelidad y amor es un peso significativo. </h2>
      <h2 className="text-2xl max-w-450">El pastor estudia, prepara las predicas y ministra incluso cuando su propio corazón está afligido. Las emergencias, las visitas hospitalarias, los funerales y las reuniones con miembros de la iglesia pueden surgir en cualquier momento. Esto requiere de su flexibilidad y sacrificio personal. </h2>

      </BannerCards>
     <PresentPastor></PresentPastor>
     <nav className="navRedes flex flex-col items-center justify-center fixed top-100 left-10 gap-2 p-2 rounded-xl z-999" style={{backgroundColor:"#0008"}}>
      <Link className="hover:scale-125" href=""><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="#fff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg></Link>
      <Link className="hover:scale-125" href=""><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 16 16"><path fill="#fff" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path></svg></Link>
      <Link className="hover:scale-125" href=""><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="#fff" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg></Link>
      <Link className="hover:scale-125" href=""><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="#fff" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"></path></svg></Link>
      </nav>
      <Footer />

    </>
  );
}
 */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerCards from "../components/BannerCards";
import imgBanner from "../../public/imgNosotros.jpg";
import NavRedes from "../components/navRedes"

import Image from "next/image";


export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <BannerCards imgBanner={imgBanner} bgOpacity="xl">
        <div className="text-center  mx-auto px-6 containerTxtBann">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 drop-shadow-lg">
            Nosotros
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          La vida del pastor es una vocación llena de desafíos, sacrificios y bendiciones. El pastor lleva la carga de cuidar las almas de la congregación. Esto implica orar por ellos, aconsejarlos, visitarlos en momentos de necesidad y guiarlos en su caminar con Dios. La responsabilidad de predicar la Palabra de Dios con fidelidad y amor es un peso significativo. 
El pastor estudia, prepara las predicas y ministra incluso cuando su propio corazón está afligido. Las emergencias, las visitas hospitalarias, los funerales y las reuniones con miembros de la iglesia pueden surgir en cualquier momento. Esto requiere de su flexibilidad y sacrificio personal.
Marcos Benigno
Pastor de la Iglesia Cita con la Vida Monte Cristo

          </p>
        </div>
      </BannerCards>

      {/* Foto del pastor */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
        <Image
  src="/pastorSinFondo.png"
  alt="Pastor Principal"
  width={400}
  height={400}
  className="rounded-xl shadow-xl mx-auto mb-6"
/>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Pastor Marcos Benigno
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La vida del pastor es una vocación llena de desafíos y bendiciones.
            Cuidar las almas de la congregación implica orar, aconsejar y
            acompañar en cada etapa de la vida.
          </p>
        </div>
      </section>

      {/* Misión de la Iglesia */}
      <section className="py-20  bg-gradient-to-t from-gray-500 to-gray-100 text-gray-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Nuestra Misión</h2>
          <p className="text-lg md:text-xl leading-relaxed">
          Seguimos la visión de Jesús: alcanzar a las multitudes con el mensaje del Evangelio. Al igual que Él, tambien tenemos un método claro: formar líderes apasionadso por la evangelización y el discipulado. Para lograrlo, hemos construido la Escalera del Éxito, compuesta por cuatro pasos fundamentales: Ganar, Consolidar, Discipular y Enviar.
          </p>
        </div>
      </section>

      {/* Redes sociales flotantes */}
      <NavRedes/>
      <Footer />
    </>
  );
}
