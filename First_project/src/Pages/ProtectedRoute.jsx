
import CartContext from "../utils/context/CartContext"
import { useContext } from "react"
import { Navigate } from "react-router"
export const ProtectedRoute=({children})=>{
    const {auth}=useContext(CartContext)
    if(auth){
    return children
    }
    else{
return <Navigate to="/login"/>
    }

  
}

