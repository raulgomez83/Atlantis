import React from 'react';

import {destinos} from "../../data/destinos";
import { Menubar } from '../Menubar';
import { TarjetaDestino } from './TarjetaDestino';


export const ListaDestinos = () => {
    return (
        <div className="container">
            <Menubar/>
            <div className="lista__destinos">
                {destinos.map(destino=>{
                    return <TarjetaDestino key={destino.id}{...destino}/>
                })}
            </div>
        </div>
    )
}
