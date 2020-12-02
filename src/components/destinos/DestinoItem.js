import React, { useEffect, useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getDestinoByPais } from './getDestinoByPais';

export const DestinoItem = () => {

    const {pais,continente}=useParams();
    const destino=useMemo(()=>getDestinoByPais(pais),[pais] );

    if (!destino){<Redirect to="/"/>};

    const{id,ocio,imagen,catalogos}=destino[0];
    const{nombre,portada, ruta}=catalogos[0];

    useEffect(() => {
        const catalogoCaja=document.querySelectorAll(".catalogo__box");
        let i=0;
      
        catalogoCaja.forEach(catalogoCaja=>catalogoCaja.style.backgroundImage=`url(${portada})`)
     });
    return (
        <div>
             <h1>{pais}</h1>
               <ul className="catalogo__container">
                    {catalogos.map(catalogo=>(
                    <li key={id+(Math.random())} >
                        <a href={catalogo} download="nombre"rel="noopener noreferrer">
                            <div className="catalogo__box">
                            <p className="catalogo__box__link">{nombre}</p>
                            </div>
                        </a>
                    </li>))}
                </ul> 
        </div>
    )
}
