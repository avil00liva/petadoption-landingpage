import React, { useEffect } from 'react'

const MenuMobile = ({isOpen}) => {

  return (
    <>
        {isOpen &&
            <div className={`menuMobile  ${isOpen && 'menuMobileOpen'}`}>
                <div className='menuContent'>
                    <ul>
                      <li>Inicio</li>
                      <li>Proceso</li>
                      <li>Hogar de tránsito</li>
                      <li>Nuestra historia</li>
                    </ul>
                </div>
            </div>
        }
    </>
  )
}

export default MenuMobile