import React from 'react';
import { Link } from 'react-router-dom';

export const TarjetaDestino = ({imagen,id,nombre}) => {
    return (
        <div>
           {/*  <img src={imagen} alt="imagen de cada destino"/> */}
            <h1><Link to={`./destinos/${id}`}>{nombre}</Link></h1>

        </div>
    )
}
