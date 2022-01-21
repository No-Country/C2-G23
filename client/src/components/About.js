import React from 'react'

export default function About() {
    return (
        <>
            <h2 className='text-center my-5'>HOTEL MYHOTEL</h2>
            <div className='container'>
                <p className='text-center parrafo_about'>Howard Johnson Hotel & Suites es un hotel urbano de diseño moderno y elegante. Ubicado en pleno centro de la ciudad de Córdoba, es el lugar perfecto para ejecutivos, parejas y familias que buscan comodidad y servicio de excelencia. Nuestros espacios están diseñados para vivir una experiencia única: amplias y cómodas habitaciones, spa con tratamientos relajantes, pileta y espacio al aire libre y amplios salones para eventos y reuniones. Todos estos servicios se complementan con una exquisita oferta gastronómica en nuestro restaurante Los Aliños, donde se puede disfrutar de la mejor combinación de comidas típicas y cocina de autor.
</p>
                <div className='row'>
                    <div className='col-12 col-md-4'>

                        <div className='about_container_card d-flex flex-column justify-content-between align-items-center hvr-grow-shadow'>

                            <i class="fas fa-lock"></i>
                            <h3>SEGURIDAD</h3>
                           
                        </div>

                       </div> 
                       <div className='col-12 col-md-4'>

                        <div className='about_container_card d-flex flex-column justify-content-between align-items-center flex-wrap hvr-grow-shadow'>

                        <i class="fas fa-star"></i>
                            <h3>CALIDAD</h3>
                            
                        </div>

</div> 
<div className='col-12 col-md-4'>

                        <div className='about_container_card d-flex flex-column justify-content-between align-items-center flex-wrap hvr-grow-shadow'>

                        <i class="far fa-money-bill-alt"></i>
                            <h3>PRECIO</h3>
                           
                        </div>
                        

                    </div>

                </div>

            </div>
        </>
    )
}
