import React, {useState} from 'react'
import FindButton from './FindButton'
import SpinnerLoad from "./SpinnerLoad"
import divT1 from "../assets/images/pexels-andrea.webp"
import divT2 from "../assets/images/pexels-mali-maeder-101635.webp"
import divT3 from "../assets/images/pexels-yuki-ghost-1193895.webp"
import divB1 from "../assets/images/pexels-pixabay-248307.webp"
import divB2 from "../assets/images/vertical-angle-dog.webp"
import divB3 from "../assets/images/pexels-bin-ziegler-1364729.webp"

const SectionMain = () => {
const [loaded, setLoaded] = useState(false)

const loadComplete = ()=>{
    setLoaded(true)
}

  return (
    <main>
        <div className='mainText'>
            <h1>Conocé a tu proxima</h1>
            <span>mascota</span>
        </div>
        <div className='cardsGrid parent' style={{paddingBottom: "2rem"}}>
            <div className='div1'>
              {!loaded &&
                <SpinnerLoad />
              } 
              <img src={divT1} alt="Dog picture" />
            </div>
            <div className='div2'>
              {!loaded &&
                <SpinnerLoad />
              } 
              <img src={divT2} onLoad={loadComplete} alt="Dog picture" />
            </div>
            <div className='div3'>
              {!loaded &&
                <SpinnerLoad />
              } 
              <img src={divT3} alt="Dog picture" />
            </div>
        </div>
        <div className='cardsGrid parent' style={{marginBottom: "2rem"}}>
            <div className='gradient'></div>
            <div className='div1'>
              {!loaded &&
                <SpinnerLoad />
              } 
              <img src={divB1} alt="Dog picture" />
            </div>
            <div className='div2'>
              {!loaded &&
                <SpinnerLoad />
              } 
              <img src={divB2} alt="Dog picture" />
            </div>
            <div className='div3'>
              {!loaded &&
                <SpinnerLoad />
              } 
              <img src={divB3} alt="Dog picture" />
            </div>
        </div>
        <div style={{paddingRight: "1rem", paddingLeft: "1rem", width: "100%"}} className="divBtnGradient">
          <FindButton />
        </div>
    </main>
  )
}

export default SectionMain