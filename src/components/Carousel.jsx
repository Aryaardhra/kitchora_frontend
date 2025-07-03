import React, { useEffect, useState } from 'react'

const Carousel = ({ children:slides, autoSlide = false, autoSlideInterval = 3000,}) => {

    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current) => ( current === 0 ? slides.length-1 : current - 1))
    };

    const next = () => {
        setCurrent((current) => ( current === slides.length-1 ? 0 : current + 1))
    };

    useEffect (()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    },[]);

  return (
    <>
        <div className="flex transition-transform  ease-out duration-500"
        style={{ transform : `translateX(-${current * 100 }%)`}}
        >
               {slides.map((slide, i) =>
          <div key={i} className="relative w-full h-full flex-shrink-0">
            {slide}
          </div>
        )}
        </div>

    <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
                <div 
                className={`transition-all w-3 h-2 bg-gray-900/50 rounded-full 
                    ${current === i ? "p-2" : "bg-opacity-50"}
                    `}
                >
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Carousel