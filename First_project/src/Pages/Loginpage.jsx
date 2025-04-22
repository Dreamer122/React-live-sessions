import React from 'react'
import CartContext from '../utils/context/CartContext'
import { useContext } from 'react'
export const Loginpage = () => {
    const {login}=useContext(CartContext)
  return (
   <>
   <h1 className='text-2xl text-center'>LOgin Page</h1>
   <button onClick={login} className='bg-green-400 text-white text-lg rounded px-4 py-3 block mx-auto my-5'>login</button>
   </>
  )
}
