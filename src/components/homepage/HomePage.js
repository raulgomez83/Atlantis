
import React from 'react';

import { Carrusel } from '../Carrusel';
import { Menubar } from '../Menubar';
import {  BloqueInfo } from './BloqueCatalogo';
import { BloqueViajes } from './BloqueViajes';
import { CustomFooter } from './CustomFooter';



export const HomePage = () => {
    return (
        <div className="wrapper">
            <Menubar/>
            <Carrusel/>
            <BloqueInfo/>
            <BloqueViajes/>
            <CustomFooter/>
            
        </div>
    )
}
