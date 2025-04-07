import { StrictMode, useEffect,lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {About} from "./Pages/About.jsx"
import {Contact} from "./Pages/Contact.jsx"
// import {Blog} from "./Pages/Blog.jsx"
import { Errorpage } from './Pages/Errorpage.jsx'


import {BrowserRouter, Routes,Route, useLocation} from "react-router"
import { Navigate } from 'react-router'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { titles } from './constants.js'
import { Productdesc } from './Pages/Productdesc.jsx'
import { ServerError } from './Pages/ServerError.jsx'
import { Women } from './Components/blogs/Women.jsx'
import { Kids } from './Components/blogs/Kids.jsx'
import { Men } from './Components/blogs/Men.jsx'

const Blog=lazy(()=>import("./Pages/Blog.jsx"))


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
    <Header/>
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




  </Routes>
  <Footer/>
 
  </BrowserRouter>
  // </StrictMode>,
)
