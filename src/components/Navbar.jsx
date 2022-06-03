import React from 'react'
import {FaBars} from "react-icons/fa"

const Navbar = ({menuAction}) => {
  return (
    <nav className='navbar'>
        <FaBars className='icons hideRes' style={{cursor: "pointer"}} onClick={menuAction} />
        <ul className='navbarList'>
          <li>Inicio</li>
          <li>Proceso</li>
          <li>Hogar de tránsito</li>
          <li>Nuestra historia</li>
        </ul>
        <h1>adopcanem</h1>
    </nav>
  )
}

export default Navbar