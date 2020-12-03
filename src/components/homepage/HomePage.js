
import React from 'react';

import { Menubar } from '../Menubar';
import {  BloqueInfo } from './BloqueCatalogo';
/* import { BloqueViajes } from './BloqueViajes'; */
import { Carrusel } from '../Carrusel';
import { Video } from './Video';
import { Nosotros } from './Nosotros';
import { Modal } from '../Modal';
import { SocialMedia } from '../SocialMedia';
import { Contacto } from './Contacto';
import { CustomFooter } from '../CustomFooter';




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
                <Contacto/>
                <SocialMedia/>
                <CustomFooter/>
            </main>
        </div>
    )
}
