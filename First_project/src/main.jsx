import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {About} from "./Pages/About.jsx"
import {Contact} from "./Pages/Contact.jsx"
import {Blog} from "./Pages/Blog.jsx"
import { Errorpage } from './Pages/Errorpage.jsx'


import {BrowserRouter, Routes,Route} from "react-router"
import { Navigate } from 'react-router'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <Header/>
  <Routes>
<Route path='/' element={<App/>} /> {/*  "localhost:5173" -> app */}
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/*' element={<Errorpage/>}/>
{/* <Route path='/*' element={<Navigate to={"/"}/>}/> */}
  </Routes>
  <Footer/>

 
  </BrowserRouter>
  // </StrictMode>,
)
