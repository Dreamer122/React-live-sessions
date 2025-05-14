import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Outlet } from 'react-router'
import { Sidebar } from "../Components/Sidebar"
export const Layout = () => {
  return (
  <>
  
    {/* main container */}
  <div className='flex h-screen overflow-y'>
    {/* left div side bar */}
    <div className='w-3/12 sticky top-0 left-0 overflow-hidden'>
        <Sidebar></Sidebar>
    </div>
    {/* right div all routes */}
    <div className='w-9/12 overflow-y-auto'>
<Outlet/>
    </div>
  </div>

  
  </>
  )
}
