import React from 'react'
import { Menubar } from '../../Menubar'

import { Destinos } from '../Destinos'


export const America = () => {
    return (
        <div>
            <Menubar/>
            <h1>América</h1>
            <Destinos continente={"America"}/>
        </div>
    )
}
