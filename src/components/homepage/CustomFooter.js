import React from 'react';

 import direccion from "../../images/direccion.png"; 
 import telefono from "../../images/telefono.png";
 import email from "../../images/email.png";
 import facebook from "../../images/facebook.png";
 import instagram from "../../images/instagram.png"

export const CustomFooter = () => {
    return (
        <div className="customFooter">
            <div className="agencia">
                <h2>ATLANTIS TRAVEL  </h2><h3>Cuatro Caminos</h3><p>es una agencia de viajes
                fundada en 1992 donde la experiencia e innovación se dan la mano para diseñar un  
                viaje personalizado para el viajero más exigente.<br/>Licencia: XG-123</p>
            </div>
            <ul className="contacto">
                <li><h2>Oficina</h2></li>
                <li><img className="footer__icon"src={direccion}alt=""/>Dirección: <b><br/>Rua Concepción Arenal 17,<br/> 15006 A Coruña</b></li>
                <li><img className="footer__icon"src={telefono}alt=""/>Teléfono: <b>981 17 40 36</b></li>
                <li><img className="footer__icon"src={email}alt=""/>Email: <b>reservas@atlantistravel.es</b></li>
            </ul>
            <div className="socialmedia">
                <h3>Síguenos:</h3>
                <nav>
                    <a href="https://www.facebook.com/atlantisbyanet/"> <img className="socialmedia__icon" src={facebook}  alt="icono facebook"/></a>
                    <a href="https://www.instagram.com/atlantis_byanet/"><img className=" socialmedia__icon"src={instagram} alt="icono instagram"/></a>
            </nav>
            </div>
        </div>
    )
}
