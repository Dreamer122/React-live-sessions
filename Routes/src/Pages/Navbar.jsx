import React from 'react'
import {NavLink} from "react-router"
export const Navbar = () => {
  return (
    <div>Navbar

        <ul>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    about
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact">
                  contact
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
