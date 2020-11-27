import {destinos} from "../../data/destinos"


export const getDestinoById = (id) => {

    return destinos.find(destino=>destino.id===id)
}
