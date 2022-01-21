import React from 'react'
import imagen from './assets/imagen'

export default function Cardtestimonios() {
    return (
        <>
            <div className='container-testimonios d-flex flex-column justify-content-center align-items-center'>
                <div className='testimonios_palabras'>
                    <p className=' par_testimonio text-center'>
                        We’ve seen a lot of efficiency in our workflow processes the way subs work and the way designers work with templates.
                    </p>
                </div>

                <div className='testimonios_imagen d-flex flex-column justify-content-center align-items-center'>
                    <img src={imagen.people1} className='imagen-testimonial rounded-circle my-3' />
                    <p>- James Hawkes -</p>
                </div>
            </div>
        </>
    )
}
