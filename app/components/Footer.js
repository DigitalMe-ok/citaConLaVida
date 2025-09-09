import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-400 text-gray-700 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* SECCIÓN 1 - LOGO Y DESCRIPCIÓN */}
        <div>
          <h2 className="text-2xl font-bold mb-4">CITA CON LA VIDA MONTECRISTO</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Una familia que adora, comparte y crece en la fe de Jesucristo.
            ¡Te esperamos en nuestras reuniones y actividades!
          </p>
        </div>

        {/* SECCIÓN 2 - MINISTERIOS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ministerios</h3>
          <ul className="space-y-2 text-gray-800">
          <li><Link href="/ministerios/adicciones" className="hover:text-sky-700">Adicciones</Link></li> 
            <li><Link href="/ministerios/mujeres" className="hover:text-sky-700">Mujeres</Link></li>
            <li><Link href="/ministerios/hombres" className="hover:text-sky-700">Hombres</Link></li>
            <li><Link href="/ministerios/matrimonios" className="hover:text-sky-700">Matrimonios</Link></li>
            <li><Link href="/ministerios/jovenes" className="hover:text-sky-700">Jóvenes</Link></li>
            <li><Link href="/ministerios/citaKids" className="hover:text-sky-700">CitaKids</Link></li>
          </ul>
        </div>

        {/* SECCIÓN 3 - VIDA DE LA IGLESIA */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Vida de la Iglesia</h3>
          <ul className="space-y-2 text-gray-800">
          
            <li><Link href="/vidaIglesia/escuelaMusica" className="hover:text-sky-700">Escuela de Música</Link></li>
            <li><Link href="/vidaIglesia/campamentos" className="hover:text-sky-700">Campamento</Link></li>
          </ul>
          <h3 className="text-lg font-semibold mb-4">Redes sociales</h3>
          <div className="grid gap-1 grid-cols-3">
            <a href="https://www.instagram.com/citaconlavidamontecristo/?hl=es" ><svg className="redesLogo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#4f1d1d" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg></a>
            <a href="https://www.facebook.com/citaconlavida.montecristo/?locale=es_LA"><svg className="redesLogo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#4f1d1d" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg></a>
            <a href="https://x.com/citamonte"><svg className="redesLogo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="#4f1d1d" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg></a>
          </div>
        </div>

        {/* SECCIÓN 4 - INFO Y CONTACTO */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2 text-gray-800">
            <li><Link href="/nosotros" className="hover:text-sky-700">Nosotros</Link></li>
            <li><Link href="/soyNuevo" className="hover:text-sky-700">Soy Nuevo</Link></li>
            <li><Link href="/contacto" className="hover:text-sky-700">Contacto</Link></li>
          </ul>
          <div className="mt-6 text-sm text-gray-800 space-y-2">
            <p>📍 Pje. Cervantes 675 Montecristo- Córdoba, Argentina</p>
            {/* <p>📧 contacto@iglesiaev.org</p>
            <p>📱 +54 351 123 4567</p> */}
          </div>
        </div>
      </div>
      <div className="d-flex flex-row">
        <nav className="linksExteriores flex-row gap-1">
          <a href="http://citaconlavida.com.ar/radiohtml.html" className="linkExterior p-2 rounded-lg underline  decoration-transparent bg-transparent hover:decoration-red-400 ">Radio Amistad</a>
          <a href="http://citaconlavida.com.ar/" className="linkExterior p-2 rounded-lg underline  decoration-transparent bg-transparent hover:decoration-red-400  ">Cita Con La vida Central</a>
          <a href="https://www.youtube.com/@citaconlavidamontecristo3858" className="linkExterior p-2 rounded-lg underline  decoration-transparent bg-transparent hover:decoration-red-400 ">Canal de Youtube</a>
          <a href="https://institutocitaconlavida.com/" className="linkExterior p-2 rounded-lg underline  decoration-transparent bg-transparent hover:decoration-red-400 ">Instituto  Bíblico</a>


        </nav>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-800">
        © {new Date().getFullYear()} Cita Con La Vida Montecristo | Todos los derechos reservados
      </div>
    </footer>
  );
}
