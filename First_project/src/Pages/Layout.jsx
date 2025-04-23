import React from 'react'
import { lazy, Suspense,useState } from 'react'

import App from '../App.jsx'
import {About} from "./About.jsx"
import {Contact} from "./Contact.jsx"
// import {Blog} from "./Blog.jsx"
import { Errorpage } from './Errorpage.jsx'


import {BrowserRouter, Routes,Route, useLocation} from "react-router"
import { Navigate } from 'react-router'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

import { Productdesc } from './Productdesc.jsx'
import { ServerError } from './ServerError.jsx'
import { Women } from '../Components/blogs/Women.jsx'
import { Kids } from '../Components/blogs/Kids.jsx'
import { Men } from '../Components/blogs/Men.jsx'
import { Cart } from './Cart.jsx'
import {Toaster} from "react-hot-toast"
import { ProtectedRoute } from './ProtectedRoute.jsx'

const Blog=lazy(()=>import("./Blog.jsx"))


export const Layout = () => {

    

   

  return (
  <>

    <Header />
    <Routes>
  <Route path='/' element={<App/>} /> {/*  "localhost:5173" -> app */}
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/blog' element={<Suspense fallback={"loading...."}> <Blog/> </Suspense>}>
  {/* nested routes  */}
   {/* 
    /blog/womenfashion
  */}
    <Route path='' index element={<Men/>} />
    <Route path='womenfashion' element={<Women/>} /> 
   
    <Route path='kidfashion' element={<Kids/>} />
  
  </Route>
  {/* dynamic route */}
  <Route path='/products/:title/:id' element={<Productdesc/>}/>
  
  {/* <Route path='/*' element={<Errorpage/>}/> */}
  <Route path='/*' element={<Navigate to={"/"}/>}/>
  <Route path="/500" element={<ServerError/>}/>
  
  

  <Route path='/cart' element={ <ProtectedRoute><Cart /> </ProtectedRoute>} />
  
  
  
  
    </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}
