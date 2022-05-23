import React from 'react'
import { FaInstagram,FaLinkedinIn,FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <ul>
            <li>Encontrá tu mascota</li>
            <li>Sobre nosotros</li>
            <li>Contáctanos</li>
            <li>Hacé tu donación</li>
            <li className='liSocial'>
                <FaLinkedinIn className='socialIcons' />
                <FaFacebookF className='socialIcons' />
                <FaInstagram className='socialIcons' />
            </li>
        </ul>
    </footer>
  )
}

export default Footer