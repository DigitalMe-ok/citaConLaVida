
"use client"
import { useState } from "react";
import imagenBack from "../../public/image.png";
import Link from "next/link";
const Locations = () => {
  

  const locations = [
    {
      name: "AUDITORIO",
      address: "CALLE SALTA 257",
      gradient: "from-red-950 to-amber-900",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      schedule: [
        { day: "Lunes", times: ["18:00 hs."] },
        { day: "Martes a Viernes", times: ["10:00", "18:00 y 20:00 hs."] },
        { day: "Domingo", times: ["10:30 y 19:00 hs."] }
      ]
    },

  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">


      <div className="mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">

            <h2 className="titleLocat font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              NUESTRA UBICACIÓN
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Si quieres visitarnos y ser parte de esta gran familia, ¡eres bienvenido!
          </p>
        </div>

        {/* Locations Grid */}
        <div className="relative map w-full relative rounded-xl mb-20" style={{backgroundImage:`url(${imagenBack.src})`,minHeight:"700px",backgroundPosition:"center",backgroundSize:"cover"}}>

      
        <div className=" relative flex flex-col items-end rounded-xl  " >

            <div className="text-center   ">
              <div className="textAndBtn flex flex-col items-center  gap-5   rounded-xl">

                <h2 className="text-gray-200 text-2xl">Pje. Cervantes 675</h2>
                <h3 className="text-gray-200 text-2xl">Montecristo, Córdoba</h3>
                <h4 className="text-gray-200 text-lg font-thin">República Argentina</h4>
                <Link href={"https://maps.app.goo.gl/oyyFShX9P2LyCnrd9"} className="p-2 bg-red-900 rounded-lg hover:bg-red-600 max-w-100 ">Ver en el mapa</Link>
            </div>
            </div>
        </div>
        
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">
                Este es nuestro canal de Youtube. 
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
               Conéctate a nuestro canal,  Revive y vuelve a escuchar la palabra sembrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/*     <button className="bg-white text-gray-900 px-10 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-xl shadow-lg hover:shadow-xl">
                  Contacto
                </button> */}
                <Link href="https://www.youtube.com/@citaconlavidamontecristo3858"> <button className="border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 rounded-xl">
                  Youtube
                </button></Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
