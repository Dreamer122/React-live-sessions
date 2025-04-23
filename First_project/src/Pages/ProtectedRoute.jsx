import React from 'react'
import CartContext from '../utils/context/CartContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
export const ProtectedRoute = ({children}) => {
const {auth}=useContext(CartContext)
  if(!auth){
    return <Navigate to="/"  />
  }
  return (
   children
  )
}
