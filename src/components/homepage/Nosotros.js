import React from 'react';

import anet from "../../images/anet.jpeg"

export const Nosotros = () => {
    return (
        <article className="nosotros ">
            <h2>Sobre Nosotros</h2>
            <section className="nosotros__section">
            <img src={anet}  alt="foto Anet"/>
            <p>En Atlantis travel_by anet somos viajeros expertos en turismo a medida. 
                Desde 1993 inspeccionamos personal y minuciosamente la oferta hotelera,
                gastronómica y de ocio para diseñar el viaje perfecto para ti y los tuyos.<br/>
                Nuestra obsesión por la perfección fue creciendo y en 2008 dimos un paso más,
                abriendo nuestro primer atelier de viajes. Porque queremos que tus viajes te 
                sienten como un guante, nuestro leitmotiv es buscar la máxima personalización, 
                para que disfrutes de una experiencia adaptada 100% a tu presupuesto y gustos, 
                con la tranquilidad de que cualquier eventualidad será resuelta rápidamente por
                nosotros estés donde estés las 24 horas.<br/>
                <b>Cuéntanos tus sueños, y los diseñamos a tu medida.</b>
            </p>
            </section>
            
            
        </article>
    )
}
