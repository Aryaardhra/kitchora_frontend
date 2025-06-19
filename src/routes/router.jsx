import Home from "../pages/Home"
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from "../App.jsx"
import NotFound from '../pages/NotFound'
import { AppContextProvider} from "../context/AppContext.jsx"
import { Toaster } from "react-hot-toast"
import Products from "../pages/Products.jsx"
import ProductCategory from "../pages/ProductCategory.jsx"
import ProductDetails from "../pages/ProductDetails.jsx"
import Cart from "../pages/Cart.jsx"
import Address from "../pages/Address.jsx"
import MyOrder from "../pages/MyOrder.jsx"
import Seller from "../components/seller/Seller.jsx"
import AddProduct from "../pages/seller/AddProduct.jsx"
import ProductList from "../pages/seller/ProductList.jsx"
import SellerRoute from "./SellerRoute.jsx"
import Orders from "../pages/seller/Orders.jsx"

const router = createBrowserRouter([

    
    {
        path : "/",
        element: (
            <AppContextProvider>
              <App />
              <Toaster />
            </AppContextProvider>),
        children : [
            {path : "/", element : <Home /> },
            {path : "/products", element : <Products />},
            {path : "/products/:category", element : <ProductCategory />},
            {path : "/products/:category/:id", element : <ProductDetails />},
            {path : "/cart", element : <Cart />},
            {path : "/add-address", element : <Address />},
            {path : "/my-orders", element : <MyOrder />},
            {path: "*", element: <NotFound />},
             {
        path: 'seller',
        element: <SellerRoute />,
        children: [
          { index: true, element: <AddProduct /> },
          { path: 'product-list', element: <ProductList /> },
          { path: 'orders', element: <Orders /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
          

     
   

  
])
 

export default router

