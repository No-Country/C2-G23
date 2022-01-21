import React from 'react'
import Cards from './Card'

import habitacion1 from '../img/habitacion1.jpg'
import habitacion2 from '../img/habitacion2.jpg'
import habitacion3 from '../img/habitacion3.jpg'

const Body = () => {
    return (
        <div className='container'>
                <h4 className='text-center my-5'>ALGUNAS DE NUESTRAS HABITACIONES</h4>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 my-3 hvr-grow-shadow'>
                        <Cards img={habitacion1} />
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 my-3 hvr-grow-shadow'>
                        <Cards img={habitacion2} />
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 my-3 hvr-grow-shadow'>
                        <Cards img={habitacion3} />
                    </div>  
                </div>
            </div>
    )
}

export default Body