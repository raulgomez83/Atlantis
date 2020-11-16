import React from 'react'
import { Carrusel } from './components/Carrusel'
import { Menubar } from './components/Menubar'

export const Atlantis = () => {
    return (
        <div className="wrapper">
            <Menubar/>
            <section className="section parallax bg1">
                <Carrusel/>
            </section>
            <section className="section static">
               <h1>Travel</h1>
            </section>
            <section className="section parallax bg2">
               <h1>Atlantis</h1>
            </section>
        </div>
    )
}
