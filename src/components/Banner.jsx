import React from 'react'
import banner_2 from "../assets/banner_2.png";
import banner_3 from "../assets/banner_3.png";
import banner_4 from "../assets/banner_4.png";
import Carousel from './Carousel';

const slides = [
 
  {
    src: banner_2,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
    type: "image",
  },
  {
    src: banner_3,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
    type: "image",
  },
    {
    src: banner_4,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
    type: "image",
  },
];

const Banner = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden mt-20">
      <Carousel autoSlide={true} autoSlideInterval={3000}>
        {slides.map((slide, index) => (
          <>
          <div key={index} className="relative w-full h-[360px] overflow-hidden">
            {slide.type === "image" ? (
              <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
            ) : (
              <video src={slide.src} autoPlay muted loop className="w-full h-full object-cover" />
            )}
            <div className="absolute md:bottom-30 bottom-30 left-10 md:left-30  bg-opacity-50 text-black p-4 rounded">
               <h2 className="text-4xl font-bold text-amber-950">why we are best ...</h2>
              <h4 className="text-2xl mt-8 font-bold text-cyan-950">{slide.title}</h4>
              <p className="mt-2 text-black font-semibold">{slide.description}</p>
            </div>
            </div>
   </>
        ))}
      
      </Carousel>
    </div>
    </>
  )
}

export default Banner