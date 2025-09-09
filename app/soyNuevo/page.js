"use client"
import BannerCards from "../components/BannerCards";
import Image from "next/image";
import Parallax from "@/app/components/parallax";
import bannerMusicos from "@/public/bannerMusicos.jpeg"
import TextImg from "@/app/components/textImage";
import imgSoyNuevo from "@/public/sembrar.jpg";
import Link from "next/link";
import { useState } from "react";
import { db } from "../firebase/config";
import { collection,addDoc} from "firebase/firestore";
export default function SoyNuevoPage() {
      const [formData, setFormData] = useState({
      nombre: "",
      email: ""
            
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
  
  const postNewPerson = async (datos)=>{
    console.log(datos);
    
    try{
    const coleccion = collection(db,"soyNuevo");
    const fecha= new Date();
    const item = {fecha:fecha,...datos}
    console.log(item);
    
    const response = await addDoc(coleccion,item);
    console.log(response);
    return response
  } catch(e){
      return e;
    }

  }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = postNewPerson(formData);
      console.log(response);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          mensaje: ""
        });
      }, 2000);
    };
  
  const txtSoyNuevo = `Pero la semilla que cae en buena tierra se refiere a alguien que oye la palabra y la entiende. Este es el que produce una cosecha, que rinde cien, sesenta o treinta veces lo sembrado”.`
  return (
    <>    

    <TextImg title={"¡Bienvenido!"} paragraph={txtSoyNuevo}  img={imgSoyNuevo.src} imgDist={"izq"}>
    
    <h5 className="text-md text-gray-700">Mateo 13: 23 NVI</h5>

    </TextImg>


    <div className="w-full bg-black py-10">
  <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
    <div className="mb-5">
      <label
        htmlFor="nombre"
        className="block mb-2 text-sm font-medium text-white"
      >
        Tu Nombre
      </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-white"
      >
        Tu email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="tucorreo@gmail.com"
        value={formData.email}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-900 to-red-950 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Enviando...</span>
                              </div>
                            ) : (
                              "Enviar Mensaje"
                            )}
                          </button>
                        </div>
          </form>
</div>
<section className="w-full bg-white py-16">
  <div className="max-w-6xl mx-auto text-center px-4">
    {/* Título */}
    <h2 className="text-4xl font-bold text-gray-900 mb-10">Recursos</h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/recursos4.jpg" 
          alt="Recurso 4" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
         <Link href="https://www.youtube.com/watch?v=yFpBD18Vz9M"> <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700">
            Ver Más
          </button></Link> 
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/recursos2.jpg" 
          alt="Recurso 2" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
         <Link href="https://www.biblegateway.com/?language=es"><button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700">
            Ver Más
          </button></Link> 
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/recursos3.webp" 
          alt="Recurso 3" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
         <Link href="https://www.youtube.com/@citaconlavidamontecristo3858"><button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700">
            Ver Más
          </button></Link> 
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  );
}
