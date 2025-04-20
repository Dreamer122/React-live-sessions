import { StrictMode, useEffect,lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { titles } from './constants.js'
import {BrowserRouter, Routes,Route, useLocation} from "react-router"


import { Layout } from './Pages/Layout.jsx'
import { CartProvider } from './utils/context/CartContext.jsx'

const DynamicTitle=()=>{
 const location= useLocation()
//  console.log(location)

  useEffect(()=>{
    document.title=titles[location.pathname] // title["/about"]
  },[location.pathname])
  return null
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <DynamicTitle/>
  <CartProvider>
   <Layout/>
   </CartProvider>
  </BrowserRouter>
   </StrictMode>,
)
