import React from 'react';
import { Link } from 'react-router-dom';

import catalogo from "../../images/catalogo.png";
/* import destino from "../../images/alrededor.png"; */
import contacto from "../../images/contacto.png";

export const BloqueInfo = () => {
    return (
    <div className="catalogo">
        <div className="catalogo__info">
            <img className="info_icono"src={catalogo} alt="icono catalogo"/>
            <p>Consulta toda la información que desees de tus destinos favoritos con
            nuestros <Link to="/catalogos"><strong>CATÁLOGOS, </strong><br/></Link> basados en la
            experiencia de nuestros clientes.</p>
        </div> 
        {/* <div className="info">
            <img className="info_icono"src={destino} alt="icono destinos"/>
            <p>Elige entre los mejores  <Link to="/destinos"><strong> DESTINOS, </strong><br/></Link> 
            seleccionados por nuestros agentes, para que disfrutes de tus vacaciones.</p>
        </div> */}
        <div className="catalogo__info">
            <img className="info_icono"src={contacto} alt="icono contacto"/>
            <p>...y si te queda alguna pregunta, no dudes en <Link to="/consultas"><strong> CONSÚLTARNOS, </strong><br/></Link> 
            podremos hacer de tu viaje una experiencia única e inolvidable.</p>
        </div>
    </div>
    )
}
