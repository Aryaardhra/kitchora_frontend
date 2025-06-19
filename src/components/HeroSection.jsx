import React from 'react'
import hero from "../assets/Hero.png"
import hero_ph from "../assets/hero_ph.png"
import white_arrow_icon from"../assets/white_arrow_icon.svg"
import black_arrow_icon from "../assets/black_arrow_icon.svg"
import { Link } from 'react-router-dom'


const HeroSection = () => {
  return (
    <>
    <div className="relative">
        <img src={hero} alt="" className="w-full hidden md:block"/>
        <img src={hero_ph} alt="" className="w-full md:hidden"/>
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-34">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-center md:text-end lg:text-start text-text max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">Hay muchas variaciones de los pasajes</h1>
       
        <div className="flex items-center mt-6 font-medium">
            <Link to={"/products"} className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-secondary transition rounded text-white cursor-pointer">
            Show now 
            <img src={white_arrow_icon} alt="" className="md:hidden transition group-focus:translate-x-1" />
            </Link>

            <Link to={"/products"} className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer">
            Show now 
            <img src={black_arrow_icon} alt="" className=" transition group-focus:translate-x-1" />
            </Link>
             </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection

