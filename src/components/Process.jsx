import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import step1 from "../assets/images/pexels-bin-ziegler-1364729.webp"
import step2 from "../assets/images/pexels-pixabay-248307.webp"
import step3 from "../assets/images/pexels-andrea.webp"
import step4 from "../assets/images/pexels-yuki-ghost-1193895.webp"

const Process = () => {
  return (
    <section className='processContainer'>
        <div className='processContent'>
            <div className='processText'>
              <span>El proceso</span>
              <h1>
                  Narices frias y corazones contentos
              </h1>
              <p>
                  Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es importante que estés capacitado para hacerlo. 
              </p>
            </div>
            <div className='parentProcess' style={{gridTemplateRows: "auto"}}>
              <div className='processCard'>
                <LazyLoadImage
                  className= "imgCard"
                  src={step1} alt="Dog picture"
                  height= "360px"
                  width= "300px"
                  effect = "blur" 
                />
                <h1 className='stepProcessCard'>1</h1>
                <p>Encontrá a tu mascota</p>
              </div>
              <div className="line line1" />
              <div className='processCard'>
                <LazyLoadImage
                  className= "imgCard"
                  src={step2} alt="Dog picture"
                  height= "360px"
                  width= "300px"
                  effect = "blur" 
                />
                <h1 className='stepProcessCard'>2</h1>
                <p>Completá el formulario</p>
              </div>
              <div className="line line2" style={{transform:"scale(-1, 1) rotate(291deg)"}} />
              <div className='processCard'>
                <LazyLoadImage
                  className= "imgCard"
                  src={step3} alt="Dog picture"
                  height= "360px"
                  width= "300px"
                  effect = "blur" 
                />
                <h1 className='stepProcessCard'>3</h1>
                <p>Conocé a tu mascota</p>
              </div>
              <div className="line line3" style={{transform:"rotate(324deg)"}} />
              <div className='processCard'>
                <LazyLoadImage
                  className= "imgCard"
                  src={step4} alt="Dog picture"
                  height= "360px"
                  width= "300px"
                  effect = "blur" 
                />
                <h1 className='stepProcessCard'>4</h1>
                <p>Dale todo tu amor</p>
              </div>
            </div>
        </div>
        
    </section>
  )
}

export default Process