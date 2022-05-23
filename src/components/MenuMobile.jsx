import React from 'react'

const MenuMobile = ({isOpen}) => {

  return (
    <>
        {isOpen &&
            <div className={`menuMobile ${isOpen ? 'menuMobileOpen' : ''}`}>
                <div className='menuContent'>
                    MenuMobile
                </div>
            </div>
        }
    </>
  )
}

export default MenuMobile