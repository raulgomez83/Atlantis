
import React from 'react';

import { Carrusel } from '../Carrusel';
import { Menubar } from '../Menubar';
import { BloqueViajes } from './BloqueViajes';


export const HomePage = () => {
    return (
        <div className="wrapper">
            <Menubar/>
            <Carrusel/>
            <BloqueViajes/>
        </div>
    )
}
