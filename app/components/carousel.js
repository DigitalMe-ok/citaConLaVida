'use client';

import { useState, useEffect } from 'react';
const Carousel = ({imgs,children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % imgs.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (id) => {
        setCurrentSlide(id);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % imgs.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + imgs.length) % imgs.length);
    };

    return (
        isClient? 
        <div className={`relative w-full z-300 min-h-md `}  data-carousel="slide">
        
        <div className="relative h-200 overflow-hidden rounded-lg md:h-200" style={{backgroundColor:"#000d"}}>
                    {imgs.map((item,index) => (
                    
                        <div key={index} className={`absolute  w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}  data-carousel-item>


                            <img src={item}className={`mask-alpha mask-l-from-black mask-l-from-5% bg-[url(${item})] absolute block  w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}  alt={item.text}/>
                            
                            <div className="absolute w-full h-full flex flex-col justify-center items-center bottom-5 left-5 right-0 max-w-150 bg-transparent text-white p-4">
                               <div className='flex flex-col justify-center items-start'>{children}</div>
                            </div>
                        </div>
                    ))
                    }
        </div>


    </div>:
    <></>
    )
}
export default Carousel;