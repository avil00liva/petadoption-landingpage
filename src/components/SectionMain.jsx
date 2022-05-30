import React from 'react'
import FindButton from './FindButton'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import divT1 from "../assets/images/pexels-andrea.webp"
import divT2 from "../assets/images/pexels-mali-maeder-101635.webp"
import divT3 from "../assets/images/pexels-yuki-ghost-1193895.webp"
import divB1 from "../assets/images/pexels-pixabay-248307.webp"
import divB2 from "../assets/images/vertical-angle-dog.webp"
import divB3 from "../assets/images/pexels-bin-ziegler-1364729.webp"

const SectionMain = () => {

  return (
    <main>
        <div className='mainText'>
            <h1>Conocé a tu proxima</h1>
            <span>mascota</span>
        </div>
        <div className='cardsGrid parent' style={{paddingBottom: "2rem"}}>
            <div className='div1'>
              <LazyLoadImage
                src={divT1} alt="Dog picture"
                height= "260px"
                width= "200px"
                effect = "blur" 
              />
            </div>
            <div className='div2'>
              <LazyLoadImage
                src={divT2} alt="Dog picture" 
                height= "400px"
                width= "200px"
                effect = "blur" 
              />
            </div>
            <div className='div3'> 
              <LazyLoadImage
                src={divT3} alt="Dog picture"
                height= "260px"
                width= "200px"
                effect = "blur" 
              />
            </div>
        </div>
        <div className='cardsGrid parent' style={{marginBottom: "2rem"}}>
            <div className='gradient'></div>
            <div className='div1'>
              <LazyLoadImage
                src={divB1} alt="Dog picture"
                height= "260px"
                width= "200px"
                effect = "blur" 
              />
            </div>
            <div className='div2'>
              <LazyLoadImage
                src={divB2} alt="Dog picture" 
                height= "400px"
                width= "200px"
                effect = "blur" 
              />
            </div>
            <div className='div3'>
              <LazyLoadImage
                src={divB3} alt="Dog picture"
                height= "260px"
                width= "200px"
                effect = "blur" 
              />
            </div>
        </div>
        <div style={{paddingRight: "1rem", paddingLeft: "1rem", width: "100%"}} className="divBtnGradient">
          <FindButton />
        </div>
    </main>
  )
}

export default SectionMain