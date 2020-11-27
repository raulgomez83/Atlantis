import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { Menubar } from '../Menubar';
import { getDestinoById } from './getDestinoById';

export const DestinoItem = () => {
    const {Id}= useParams();
    const destino=  useMemo(() => getDestinoById(Id),[Id]);
    if ( !destino ) {
        return <Redirect to="/destinos" />
    };

    const {nombre,zona,ocio,imagen,pdf,descripcion,punto1,punto2,punto3,hoteles}=destino;


    return (
        <div>
            <Menubar/>
            <header>
                <img src={imagen} alt={nombre}/>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
            </header>
            <section>
                <img src={punto1.imagen} alt={nombre}/>
                <h3>{punto1.titulo}</h3>
                <p>{punto1.parrafo}</p>
            </section>
            <section>
                <img src={punto2.imagen} alt={nombre}/>
                <h3>{punto2.titulo}</h3>
                <p>{ punto2.parrafo}</p>
            </section>
            <section>
                <img src={punto3.imagen} alt={nombre}/>
                <h3>{punto3.titulo}</h3>
                <p>{ punto3.parrafo}</p>
            </section>
        </div>
    )
}
