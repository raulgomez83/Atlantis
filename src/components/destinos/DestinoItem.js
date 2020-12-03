import React, { /* useEffect, */ useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getDestinoByPais } from './getDestinoByPais';
import { Catalogo } from './Catalogo';
import { OfertaDestino } from './OfertaDestino';
import { CustomFooter } from '../CustomFooter';
import { Menubar } from '../Menubar';


export const DestinoItem = () => {

    const {pais}=useParams();

    const destino=useMemo(()=>getDestinoByPais(pais),[pais] );
    if (!destino){<Redirect to="/"/>};
    const {catalogos}=destino[0]
  
    


    return (
        <div >
            <Menubar/>
            <h1>{pais}</h1>
            <ul>
                 {catalogos.map(catalogo=>(<Catalogo key={catalogo.idC} {...catalogo}>{catalogo.idC}</Catalogo>))}     
            </ul>
            <OfertaDestino/>
            <CustomFooter/>
        </div>
    )
}