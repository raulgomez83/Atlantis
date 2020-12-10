import React, { useState }  from 'react';

import {destinos} from "../../data/destinos"
import { BuscadorDestinos } from './BuscadorDestinos';
import { DestinoCard } from './DestinoCard';

export const TodosDestinos = () => {

    const [filteredDestino, setFilteredDestino] = useState("");

    const handleFilterChange = (event) => {
        setFilteredDestino(event.target.value)};

        const resultFilteredDestinos=destinos.filter(destino=>{
            return destino.pais.toLowerCase().includes(filteredDestino.toLowerCase())
        });
    const destinosOrdenados=resultFilteredDestinos.sort(function(a, b){
        if(a.id > b.id){return 1};
        if(a.id<b.id){return -1};
        return 0;
    })
    return (
        <div className="todos__destinos__container">
            <BuscadorDestinos handleFilterChange={handleFilterChange} filteredDestino={filteredDestino} />
            {destinosOrdenados.map(destino=>(
                    <DestinoCard key={destino.id} {...destino}/>
                ))}
        </div>
    )
}
