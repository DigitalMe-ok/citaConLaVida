"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../public/logo.avif"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="relative z-999">
      <nav className="bg-navInactivo backdrop-blur-md shadow-lg border-b border-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-300 hover:bg-navActivo hover:border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 group">
                <img 
                  src={logo.src} 
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
                  alt="Cita con la Vida Logo" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className="linkActivo text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                href="/nosotros" 
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
              >
                Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Ministerios Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('ministerios')}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 flex items-center space-x-1 group"
                >
                  <span>Ministerios</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'ministerios' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openDropdown === 'ministerios' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <Link 
                      href="/ministerios/mujeres" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Mujeres</p>
                          <p className="text-sm text-gray-500">Ministerio femenino</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/hombres" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Hombres</p>
                          <p className="text-sm text-gray-500">Ministerio masculino</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/adicciones" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-500 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v4m0 4h.01M4.93 19h14.14a2 2 0 001.76-3l-7.07-12a2 2 0 00-3.52 0L3.17 16a2 2 0 001.76 3z"></path>
                             </svg>
                        </div>
                        <div>
                          <p className="font-medium">Adicciones</p>
                          <p className="text-sm text-gray-500">Ministerio de adicciones</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/matrimonios" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-500 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
  </svg>
                        </div>
                        <div>
                          <p className="font-medium">Matrimonios</p>
                          <p className="text-sm text-gray-500">Ministerio  matrimonial</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/jovenes" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Jóvenes</p>
                          <p className="text-sm text-gray-500">Ministerio juvenil</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/citaKids" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">CitaKids</p>
                          <p className="text-sm text-gray-500">Ministerio infantil</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Vida de la Iglesia Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('vida')}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 flex items-center space-x-1 group"
                >
                  <span>Vida de la Iglesia</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'vida' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openDropdown === 'vida' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    
                   {/* <Link 
                      href="/vida/calendario" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Calendario</p>
                          <p className="text-sm text-gray-500">Eventos y actividades</p>
                        </div>
                      </div>
                    </Link>
                    */}
                    <Link 
                      href="/vidaIglesia/escuelaMusica" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    > 
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Escuela de Música</p>
                          <p className="text-sm text-gray-500">Formación musical</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/vidaIglesia/campamentos" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Campamento</p>
                          <p className="text-sm text-gray-500">Retiros y campamentos</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/equipo" 
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
              >
                Nuestro Equipo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                href="/contacto" 
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* CTA Button */}
              <Link 
                href="/siembra" 
                className="bg-gradient-to-r from-red-800 to-red-900 text-white px-6 py-2.5 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sembrar
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
        </svg>
      </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden transition-all duration-300  bg-navResponsiveAc w-screen  z-999  hover:bg-navActivo ease-in-out fixed right-0 h-screen flex flex-col justify-end items-end ${isOpen ? ' opacity-100 min-w-200' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1  flex flex-col justify-around pb-30 items-center w-screen h-screen">
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/nosotros" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
                {/* Vida de la Iglesia Dropdown */}
                <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('vida')}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 flex items-center justify-center space-x-1 group"
                >
                  <span>Vida de la Iglesia</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'vida' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
            </button>

                {openDropdown === 'vida' && (
                  <div className=" top-full flex flex-col top-0 right-0  mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
{/*                     <Link 
                      href="/vida/calendario" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Calendario</p>
                          <p className="text-sm text-gray-500">Eventos y actividades</p>
                        </div>
                      </div>
                    </Link> */}
                    <Link 
                      href="/vidaIglesia/escuelaMusica" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Escuela de Música</p>
                          <p className="text-sm text-gray-500">Formación musical</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/vidaIglesia/campamentos" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Campamento</p>
                          <p className="text-sm text-gray-500">Retiros y campamentos</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('ministerios')}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 flex items-center space-x-1 group"
                >
                  <span>Ministerios</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'ministerios' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openDropdown === 'ministerios' && (
                  <div className="top-full flex flex-col top-0  mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <Link 
                      href="/ministerios/mujeres" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Mujeres</p>
                          <p className="text-sm text-gray-500">Ministerio femenino</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/hombres" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Hombres</p>
                          <p className="text-sm text-gray-500">Ministerio masculino</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/adicciones" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-500 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v4m0 4h.01M4.93 19h14.14a2 2 0 001.76-3l-7.07-12a2 2 0 00-3.52 0L3.17 16a2 2 0 001.76 3z"></path>
                             </svg>
                        </div>
                        <div>
                          <p className="font-medium">Adicciones</p>
                          <p className="text-sm text-gray-500">Ministerio de adicciones</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/matrimonios" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-500 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
                        </svg>
                        </div>
                        <div>
                          <p className="font-medium">Matrimonios</p>
                          <p className="text-sm text-gray-500">Ministerio matrimonial</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/jovenes" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Jóvenes</p>
                          <p className="text-sm text-gray-500">Ministerio juvenil</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/ministerios/citaKids" 
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">CitaKids</p>
                          <p className="text-sm text-gray-500">Ministerio infantil</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/equipo" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Nuestro Equipo
              </Link>
              <Link 
                href="/contacto" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                href="/siembra" 
                className="bg-gradient-to-r from-red-800 to-red-900 text-white px-6 py-2.5 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sembrar
              </Link>
            </div>
      </div>
    </div>
    </nav>
    </header>
  );
}
