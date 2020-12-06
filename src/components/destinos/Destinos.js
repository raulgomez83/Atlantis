import React, { useMemo } from 'react';

import { ContactoDestino } from './ContactoDestino';
import { DestinoCard } from './DestinoCard';
import { getDestinoByContinent } from './getDestinoByContinent';


export const Destinos= ({continente}) => {
    const destinos=useMemo(()=> getDestinoByContinent(continente),[continente]);
    return (<>
         <div className="destinos">
                {destinos.map(destino=>(
                    <DestinoCard key={destino.id} {...destino}/>
                ))}
        </div>
        <ContactoDestino/>
        </>
    )
}
