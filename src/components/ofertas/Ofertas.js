import React from 'react';

import {ofertas} from "../../data/ofertas"
import { OfertaCard } from './OfertaCard';



export const Ofertas = () => {
    return (
        <div className="oferta__container">
          
           {ofertas.map(oferta=>(
               <OfertaCard key={oferta.id} {...oferta}/>
           ))}
        </div>
    )
}
