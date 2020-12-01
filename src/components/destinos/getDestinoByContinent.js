import {destinos} from "../../data/destinos";

export const getDestinoByContinent = (continente) => {
    const validContinents=["Africa","America","Asia","Europa","Oceania"];

    if (!validContinents.includes(continente)){
        throw new Error (`El continente "${continente}" no es correcto`);
    }
    return  destinos.filter (destino=>destino.continente===continente);
    
}
