import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Menubar } from '../../Menubar'
import { Destinos } from '../Destinos'



export const Africa = () => {
   console.log("holi")
    return (
        <div> 
            <Menubar/>
            <h1>África</h1>
            <Destinos continente={"Africa"}/>
        </div>
    )
}
