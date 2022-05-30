import React from 'react'

const Ayuda = () => {
  return (
    <section className='ayudaContainer'>
        <div className='ayudaContentWave'>
            <div className="ayudaContent">
                <div className="slugHome" style={{background: "#3636631A", color: "#363663"}}>Sumá con tu ayuda</div>
                <h1>Nuestra historia</h1>
                <p>Existen muchas formas de ser parte de este cambio, desde algún lugar podes hacerlo.
                Los aportes económicos nos ayudan a pagar controles,, estudios, veterinarios, traslados y comprar alimento</p>
                <h1 style={{fontFamily: "sans-serif"}}>+3500</h1>
                <div className="helpRoad">
                    <span className='spanRoad'>Comienza la organización</span>
                    <h3>Mascotas rescatadas</h3>
                    <span className='spanRoad'>No más mascotas sin hogar</span>
                </div>
                <div className='helpRoad' style={{padding:"0 2rem"}}>
                    <span className='spanRoad'>2017</span>
                    <span className='spanRoad'>2022</span>
                </div>
                <div className='barRoad'>
                    <div className='midBar' />
                    <div className='lineBar' />
                </div>
                <button className='btnFind'>ir a mercadopago</button>
            </div>
        </div>
    </section>
  )
}

export default Ayuda