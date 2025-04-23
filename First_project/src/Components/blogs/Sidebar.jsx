import React from 'react'
// import { Link } from 'react-router'
import { NavLink } from 'react-router-dom';
import { FaUsers, FaShoppingBag, FaBaby } from 'react-icons/fa';


export const Sidebar = () => {
  return (
    <>
    

<aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Fashion Blog</h1>
      </div>
      <nav className="py-4">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 ${
              isActive ? 'text-indigo-600 font-medium bg-indigo-50' : ''
            }`
          }
        >
          <span className="w-6 h-6 mr-3">
            <FaUsers className="text-gray-600" />
          </span>
          Men's Fashion
        </NavLink>

        <NavLink
          to="womenfashion"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 ${
              isActive ? 'text-indigo-600 font-medium bg-indigo-50' : ''
            }`
          }
        >
          <span className="w-6 h-6 mr-3">
            <FaShoppingBag className="text-gray-600" />
          </span>
          Women's Fashion
        </NavLink>

        <NavLink
          to="kidfashion"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 ${
              isActive ? 'text-indigo-600 font-medium bg-indigo-50' : ''
            }`
          }
        >
          <span className="w-6 h-6 mr-3">
            <FaBaby className="text-gray-600" />
          </span>
          Kid's Fashion
        </NavLink>
      </nav>
    </aside>



    </>
  )
}
