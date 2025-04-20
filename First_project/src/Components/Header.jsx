import logo from "../assets/Images/logo.jpg"

import { NavLink,Link,useNavigate } from "react-router"
import { useState, useContext } from "react"
import useOnline from "../utils/useOnline"
import CartContext from "../utils/context/CartContext"

function Header(){
 const [isloggedin,setIsloggedin]=useState(false)
 const navigate=useNavigate()
 const {cart}=useContext(CartContext)

 const login=()=>{
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

 console.log(isloggedin)

 const isonline=useOnline()

    return (
      <div className="nav">
        <img src={logo} alt="logo"  style={{height:"70px"}} className="rounded-full"/>
        <ul>
          <li><NavLink to="/"> Home </NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog"}>Blog</NavLink></li>
          <li><NavLink to={"/cart"}>Cart <span>{cart?.length}</span></NavLink></li>
          <li><button onClick={login}>login</button> </li>
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