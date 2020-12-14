

import React from 'react';


import {destinos} from "../../data/destinos"
/* import { Catalogo } from './Catalogo'; */

export const TodosCatalogos = () => {

    const catalogos=(destinos.map(d=>d.catalogos));

    console.log(catalogos.map(c=>c.nombre));


    return (
        <div className="todos_catalogos__container">
           {/*  {catalogos.map(catalogo=>(
                <Catalogo key={catalogo.idC} {...catalogo}/>
            ))}*/}
        </div> 
    )
}
