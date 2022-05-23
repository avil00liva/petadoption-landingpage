import React from 'react'
import {FaBars} from "react-icons/fa"

const Navbar = ({menuAction}) => {
  return (
    <nav className='navbar'>
        <FaBars className='icons' style={{cursor: "pointer"}} onClick={menuAction} />
        <h1>adopcanem</h1>
    </nav>
  )
}

export default Navbar