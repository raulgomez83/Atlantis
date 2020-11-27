import React from 'react';

import anet from "../../images/anet.jpeg"

export const Nosotros = () => {
    return (
        <article className="nosotros ">
            <h2>Sobre Nosotros</h2>
            <img src={anet}  alt="foto Anet"/>
            <p>“El mundo es un libro y aquellos que no viajan sólo ven una página”. 
                Esta frase, falsamente atribuida a San Agustín de Hipona, retrata a la perfección 
                el espíritu de viajar. Existen miles de razones para viajar, conocer nuevos 
                rincones y descubrir otras culturas. Los viajeros son almas inquietas que siempre 
                están pensando en el siguiente destino, aunque el dinero suele ser un obstáculo 
                en el camino, especialmente en la época navideña. Con la llegada de la Navidad, 
                muchos españoles buscan viajar fuera del país para disfrutar del ambiente navideño
                 de otras ciudades europeas, pero al mismo tiempo quieren seguir gastando en
                  regalos.
            </p>
            
        </article>
    )
}
