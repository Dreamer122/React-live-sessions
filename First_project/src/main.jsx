import { StrictMode, useEffect,lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {About} from "./Pages/About.jsx"
// import {Contact} from "./Pages/Contact.jsx"
// // import {Blog} from "./Pages/Blog.jsx"
// import { Errorpage } from './Pages/Errorpage.jsx'

import { titles } from './constants.js'
import {BrowserRouter, Routes,Route, useLocation} from "react-router"
// import { Navigate } from 'react-router'
// import Header from './Components/Header.jsx'
// import Footer from './Components/Footer.jsx'
// import { titles } from './constants.js'
// import { Productdesc } from './Pages/Productdesc.jsx'
// import { ServerError } from './Pages/ServerError.jsx'
// import { Women } from './Components/blogs/Women.jsx'
// import { Kids } from './Components/blogs/Kids.jsx'
// import { Men } from './Components/blogs/Men.jsx'
// import { Cart } from './Pages/Cart.jsx'

// const Blog=lazy(()=>import("./Pages/Blog.jsx"))

import { Layout } from './Pages/Layout.jsx'

const DynamicTitle=()=>{
 const location= useLocation()
//  console.log(location)

  useEffect(()=>{
    document.title=titles[location.pathname] // title["/about"]
  },[location.pathname])
  return null
}


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <DynamicTitle/>
   <Layout/>
 
  </BrowserRouter>
  // </StrictMode>,
)
