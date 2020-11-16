import React from 'react'
import { Carrusel } from './components/Carrusel'
import { Menubar } from './components/Menubar'

export const Atlantis = () => {
    return (
        <div className="wrapper">
            <Menubar/>
            <Carrusel/>
        </div>
    )
}
