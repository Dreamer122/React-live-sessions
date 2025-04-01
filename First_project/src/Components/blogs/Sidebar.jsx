import React from 'react'
import { Link } from 'react-router'


export const Sidebar = () => {
  return (
   
<div>
    <ul>
        <li>
            <Link to={""}>Men fashion </Link>
        </li>
        <li>
            <Link to={"womenfashion"}>Women Fashion</Link>
        </li>
        <li>
            <Link to={"kidfashion"}>Kids fashion</Link>
        </li>
    </ul>
</div>

  )
}
