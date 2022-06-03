import React from 'react'
import social from "../assets/images/howie-r-CjI_2QX7hvU-unsplash.png"

const GridHugSection = () => {
  return (
    <section className='hugSection'>
        <div className="mainCard">
            <h1>Abraza la familia</h1>
        </div>
        <div className='ayudaContent hugContent'>
          <div className='slugHome' style={{background: "#3636631A", color: "#363663"}}>Sumá con tu ayuda</div>
          <h1>Historias de vida</h1>
          <p>Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque muchas veces la mascota no se elige, simplemente se encuentran.</p>
        </div>
        <div className='socialContainer'>
          <div className="socialCard">
            <img className='socialImg' src={social} alt="Dog picture" />
            <div className="socialText">
              <h2>@paconcy</h2>
              <p>Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque muchas veces la mascota no se elige, simplemente se encuentran.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default GridHugSection