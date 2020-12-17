import React from 'react';

 import direccion from "../../images/direccion.png";
 import telefono from "../../images/telefono.png";
 import email from "../../images/email.png";

export const Contacto = () => {

    /*  useEffect(() => {
        const oficina =document.querySelector("iframe");
        const pantalla=window.innerWidth;
        if (pantalla>700){
            oficina.style.height="250px";
            oficina.style.width="400px";
        }if (pantalla>1000){
            oficina.style.height="250px";
            oficina.style.width="400px";
        }
     }) */ 
    return (
        <div id="contacto"className="contact">
            <ul className="contacto">
                <li><h2>Oficina</h2></li>
                <li><img className="contact__icon"src={direccion}alt=""/>Dirección: <b><br/>Rua Concepción Arenal 17,<br/> 15006 A Coruña</b></li>
                <li><img className="contact__icon"src={telefono}alt=""/>Teléfono: <b>981 17 40 36</b></li>
                <li><img className="contact__icon"src={email}alt=""/>Email: <b>reservas@atlantistravel.es</b></li>
            </ul>
            <div className="agencia">
                <h2>ATLANTIS  </h2><h3>byAnet</h3><br/><p> es una agencia en la que llevamos viajando desde 
                    1993, para que nuestra experiencia e innovación se den la mano en 
                    el diseño de un viaje personalizado para el viajero más exigente.</p>
            </div>
        </div>
    )
}
