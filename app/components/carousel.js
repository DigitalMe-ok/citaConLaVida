'use client';

import { useState, useEffect } from 'react';

const Carousel = ({ imgs, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imgs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return isClient ? (
    <div className="relative w-full z-30">

      <div className="relative h-[800px] overflow-hidden">

        {imgs.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >

            {/* Imagen */}
            <img
              src={item}
              className="absolute w-full h-full object-cover"
              alt="carousel"
            />

            {/* Overlay SOLO en slides ≠ 0 */}
            {index !== 0 && (
              <div className="absolute inset-0 bg-black/40"></div>
            )}

            {/* Texto SOLO en slides ≠ 0 */}
            {index !== 0 && (
              <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 z-20 text-white">
                <div className="max-w-2xl">
                  {children}
                </div>
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  ) : null;
};

export default Carousel;