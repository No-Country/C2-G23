import React from 'react'
import Cards from './Card'
import imagen from './assets/imagen'

export default function Body() {
    return (
        <>
        <h4 className='text-center my-5'>ALGUNAS DE NUESTRAS HABITACIONES</h4>
            <div className='container'>

                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 my-3 hvr-grow-shadow'>
                        <Cards img={imagen.img1} />
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 my-3 hvr-grow-shadow'>
                        <Cards img={imagen.img2} />
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 my-3 hvr-grow-shadow'>
                        <Cards img={imagen.img3} />
                    </div>

                

                    
                </div>

            </div>
        </>
    )
}
