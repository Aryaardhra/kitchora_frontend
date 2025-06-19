import React from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import Banner from '../components/Banner'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <>
    <div className="mt-8">
        <HeroSection />
        <Categories />
        <BestSeller />
        <Banner />
        <NewsLetter /> 
    </div>
    </>
  )
}

export default Home