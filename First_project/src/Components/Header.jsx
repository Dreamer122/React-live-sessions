import logo from "../assets/Images/logo.jpg"

import { NavLink,Link,useNavigate } from "react-router"
import { useState, useContext } from "react"
import useOnline from "../utils/useOnline"
import CartContext from "../utils/context/CartContext"

function Header(){
 const [isloggedin,setIsloggedin]=useState(false)
 const navigate=useNavigate()
 const {cart,auth,logout,login}=useContext(CartContext)
 const login1=()=>{
  setIsloggedin(true)
 }
   
 const move=()=>{
  if(isloggedin){
    navigate("/blog")
   
  }
  else{
    navigate("/")
  }
 }

//  console.log(isloggedin)

 const isonline=useOnline()

    return (
      <div className="bg-white shadow-sm sticky top-0 z-50 flex items-center justify-around">
        <img src={logo} alt="logo"  style={{height:"70px"}} className="rounded-full"/>
        <ul className="list-none flex gap-10 p-5 m-0">
          <li><NavLink to="/"> Home </NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog"}>Blog</NavLink></li>
          <li><NavLink to={"/cart"}>Cart <span>{cart?.length}</span></NavLink></li>
          { !auth && <li><button onClick={login}>login</button> </li>}
          {auth && <li><button onClick={logout}>logout</button> </li>}
          {/* <li><button onClick={move}>move</button> </li> */}
          {/* <li onClick={()=>navigate(-1)}>
            prev
          </li>
          <li onClick={()=>navigate(1)}>
            next
          </li> */}
          <li>{isonline?"🟢":"🔴"}</li>
        </ul>

      </div>
    )
}
export default Header