import React, { useMemo } from 'react';
import { ContactoDestino } from './ContactoDestino';
import { DestinoCard } from './DestinoCard';
import { getDestinoByContinent } from './getDestinoByContinent';


export const Destinos= ({continente}) => {
    const destinos=useMemo(()=> getDestinoByContinent(continente),[continente]);

    const destinosOrdenados=destinos.sort(function(a, b){
        if(a.id > b.id){return 1};
        if(a.id<b.id){return -1};
        return 0;
    })

    return (
    <div className="destinos">
         <div >
                {destinosOrdenados.map(destino=>(
                    <DestinoCard key={destino.id} {...destino}/>
                ))}
        </div>
        <ContactoDestino/>
        </div>
    )
}
