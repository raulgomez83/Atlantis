import React from 'react'

import { Destinos } from '../Destinos'
import { Menubar } from '../../Menubar'

export const Oceania = () => {
    return (
        <div>
             <Menubar/>
             <h1>Oceanía</h1>
             <Destinos continente={"Oceania"}/>
        </div>
    )
}
