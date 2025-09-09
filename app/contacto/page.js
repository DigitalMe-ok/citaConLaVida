"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerCards from "../components/BannerCards";
import imgBanner from "../../public/Card3.jpg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";


export default function Contacto() {

  const postNewContacto = async (datos)=>{
    console.log(datos);
    
    try{
    const coleccion = collection(db,"contacto");
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
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = postNewContacto(formData);
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

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <BannerCards imgBanner={imgBanner}>
        <div className="text-center">
          <h1 className="tituloContacto text-gray-200 mb-6 font-semibold">Contáctanos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu mensaje y nos pondremos en contacto contigo pronto.
          </p>
        </div>
      </BannerCards>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Estamos ubicados en Montecristo y nos encantaría conocerte. 
                  No dudes en contactarnos para cualquier consulta o información.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Ubicación</h3>
                      <p className="text-gray-600">Pje. Cervantes 675, Montecristo Córdoba Argentina</p>
                    
                    </div>
                  </div>
                </div>

               {/*  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                      <p className="text-gray-600">+54 351 123 4567</p>
                      <p className="text-gray-600">+54 351 987 6543</p>
                    </div>
                  </div>
                </div> */}

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">contacto@citaconlavida.org</p>
                      <p className="text-gray-600">info@citaconlavida.org</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Horarios</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Envíanos un Mensaje</h3>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ¡Mensaje enviado correctamente! Te contactaremos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border text-stone-900  border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border text-stone-900  border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                {/* Email y Teléfono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border text-stone-900  border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      required
                      onChange={handleChange}
                      className="w-full px-4 text-stone-900  py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="+54 351 123 4567"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full text-stone-900 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-auto ">
                  <h3 className="text-5xl text-gray-800 p-20 mb-10">Ubicación</h3>

              <div className="  w-screen bg-gray-200 rounded-lg flex flex ">
              <iframe  className="w-full h-200 z-300"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.395788317651!2d-63.947!3d-31.344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d85a0e9a6d0f7%3A0xXXXXXXXXXXXXXX!2sPje.%20Cervantes%20675%2C%20Montecristo%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1699999999999"
        
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
              </div>
            
            {/* <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Auditorio Mayor</h3>
              <p className="text-gray-600 mb-4">Buchardo 865, Montecristo</p>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Mapa interactivo aquí</p>
              </div>
            </div> */}

      </section>

      <Footer />
    </>
  );
}

