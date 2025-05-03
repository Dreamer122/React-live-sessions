import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Outlet } from 'react-router'
import { Sidebar } from "../Components/Sidebar"
export const Layout = () => {
  return (
  <>
  
    {/* main container */}
  <div className='flex'>
    {/* left div side bar */}
    <div className='w-3/12'>
        <Sidebar></Sidebar>
    </div>
    {/* right div all routes */}
    <div className='w-8/12'>
<Outlet/>
    </div>
  </div>

  
  </>
  )
}
