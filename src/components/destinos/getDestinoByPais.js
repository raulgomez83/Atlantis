import {destinos} from "../../data/destinos";

export const getDestinoByPais=(pais)=>{
    return destinos.filter(destino=>destino.pais===pais)
}