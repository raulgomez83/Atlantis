
import React from 'react';

import { Menubar } from '../Menubar';
import {  BloqueInfo } from './BloqueCatalogo';
/* import { BloqueViajes } from './BloqueViajes'; */
import { CustomFooter } from './CustomFooter';
import { Carrusel } from '../Carrusel';
import { Video } from './Video';
import { Nosotros } from './Nosotros';
import { Modal } from '../Modal';




export const HomePage = () => {
    return (
        <div className="wrapper">
               <Menubar/>
               <Modal/>
               <Video/>
            <main>
                <Nosotros/>
                <Carrusel/>
                <BloqueInfo/>
                {/* <BloqueViajes/> */}
                <CustomFooter/>
                <a href="https://api.whatsapp.com/send?phone=34620746902"> <h1>Holi</h1></a>
            </main>
        </div>
    )
}
