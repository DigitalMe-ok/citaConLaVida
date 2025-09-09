"use client"
import {useState , useEffect} from "react"
const CarouselGaleria = ({imgs}) =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % imgs.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return(
        isClient? 
        <section className="flex justify-center items-center w-full bg-neutral-900 py-10">
        <div className="relative w-full max-w-6xl h-[500px] overflow-hidden rounded-2xl shadow-2xl">
          {/* Slides */}
          {imgs.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={item}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>
      </section>:
    <></>
    )
}
export default CarouselGaleria;