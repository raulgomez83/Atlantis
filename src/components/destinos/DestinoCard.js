import React from 'react';
import {NavLink} from 'react-router-dom';






export const DestinoCard = ({continente,pais,imagen}) => {
    return (
        <>
        <div className="destino__container">
            <NavLink className="destino__box"to= {`/${continente}/${pais}`}>
                <img src={imagen} alt={pais}></img>
                <p>{pais}</p>
            </NavLink>
        </div>
        </>
    )
}

