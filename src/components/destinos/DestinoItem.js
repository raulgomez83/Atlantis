import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getDestinoByPais } from './getDestinoByPais';

export const DestinoItem = () => {

    const {pais,continente}=useParams();
    const destino=useMemo(()=>getDestinoByPais(pais),[pais] );
    if (!destino){<Redirect to="/"/>};
    const{id,ocio,imagen,catalogos}=destino[0];
    console.log(catalogos);

    return (
        <div>
             <h1>{pais}</h1>
             <h2>{ocio}</h2>
               <ul>
                   {catalogos.map(catalogo=>(
               <li key={id+(Math.random())}>{catalogo}</li>))}
             </ul> 
        </div>
    )
}
