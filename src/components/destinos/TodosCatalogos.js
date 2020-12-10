import React from 'react';

import {destinos} from "../../data/destinos"

export const TodosCatalogos = () => {

    console.log(destinos.map(d=>d.catalogos));
    return (
        <div>
            <h1>holi</h1>
        </div>
    )
}
