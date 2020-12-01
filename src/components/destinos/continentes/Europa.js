import React from 'react'
import { Menubar } from '../../Menubar'
import { Destinos } from '../Destinos'

export const Europa = () => {
    return (
        <div>
             <Menubar/>
             <h1>Europa</h1>
             <Destinos continente={"Europa"}/>
        </div>
    )
}
