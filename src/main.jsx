//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, RouterProvider } from 'react-router-dom'
import {AppContextProvider} from './context/AppContext.jsx'
import router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
    
    
    <RouterProvider router={router} />
     
  
    
    
)
