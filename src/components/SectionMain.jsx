import React from 'react'
import FindButton from './FindButton'

const SectionMain = () => {
  return (
    <main>
        <div className='mainText'>
            <h1>Conocé a tu proxima</h1>
            <span>mascota</span>
        </div>
        <div className='cardsGrid parent' style={{paddingBottom: "2rem"}}>
            <div className='div1TopL'></div>
            <div className='div2TopC'></div>
            <div className='div3TopR'></div>
        </div>
        <div className='cardsGrid parent' style={{marginBottom: "2rem"}}>
            <div className='gradient'></div>
            <div className='div1'></div>
            <div className='div2'></div>
            <div className='div3'></div>
        </div>
        <div style={{paddingRight: "1rem", paddingLeft: "1rem", width: "100%"}} className="divBtnGradient">
          <FindButton />
        </div>
    </main>
  )
}

export default SectionMain