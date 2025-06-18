import React from 'react'
import {useSelector} from "react-redux"
import { Navigate } from 'react-router'
export const ProtectedRoute = ({children}) => {
    const {userSession}=useSelector((state)=>state.auth)
    if(userSession){
        return children
    }else{
        return <Navigate to={"/login"}/>
    }

  
}
{/* <h1> <dahsboard/></h1> */}
