import React from 'react'
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <FaBars className='icons' style={{cursor: "pointer"}} />
        <h1>adopcanem</h1>
    </nav>
  )
}

export default Navbar