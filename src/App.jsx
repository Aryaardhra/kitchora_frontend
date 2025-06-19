import React from 'react'
import Navbar from './components/Navbar'
//import HeroSection from './components/HeroSection'
import { Outlet, useLocation } from 'react-router-dom'
import Toaster from "react-hot-toast";
import { Footer } from './components/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import Seller from './components/seller/Seller';
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { userLogin, isSeller } = useAppContext();

  return (
    <>
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {
        isSellerPath ? null : <Navbar />
      }

      { userLogin ? <Login /> : null }
     
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-10"}`}>
      
        <Outlet />
      </div>
      

      {!isSellerPath && <Footer />}
      </div>
      </>
  )
}


export default App
