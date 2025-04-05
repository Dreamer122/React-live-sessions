import React from 'react'
import { Header2 } from './Header2'
import Header from "./Header"

export const Home = () => {
  return (
    <div>
        <h1>HOME</h1>
        {/* class based component */}
    <Header name={"sayali"} userid={"sayali_123"}/>
    {/* functional component */}
    <Header2 name={"monika"}/>
    </div>
  )
}
