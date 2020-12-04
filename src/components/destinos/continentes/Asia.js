import React from 'react';

import { Menubar } from '../../Menubar';
import { Destinos } from '../Destinos';



export const Asia = () => {
    return (
        <div className="continente">
            <Menubar/>
            <h1>Asia</h1>
            <Destinos continente={"Asia"}/>
        </div>
    )
}
