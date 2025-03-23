import logo from "../assets/Images/logo.jpg"

import { NavLink,Link } from "react-router"

function Header(){
    return (
      <div className="nav">
        <img src={logo} alt="logo"  style={{height:"70px"}}/>
        <ul>
          <li><NavLink to="/"> Home </NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog"}>Blog</NavLink></li>
        </ul>

      </div>
    )
}
export default Header