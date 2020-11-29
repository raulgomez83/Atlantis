import React/*,  { useEffect } */ from 'react';

 import direccion from "../../images/direccion.png";
 import telefono from "../../images/telefono.png";
 import email from "../../images/email.png";


export const CustomFooter = () => {

   /*  useEffect(() => {
        const oficina =document.querySelector(".contacto").firstChild;
        const pantalla=window.innerWidth;
        if (pantalla>1080){
            oficina.style.visibility="hidden"}
     }) */
    return (
        <div className="customFooter">
            <ul className="contacto">
                <li><h2>Oficina</h2></li>
                <li><img className="footer__icon"src={direccion}alt=""/>Dirección: <b><br/>Rua Concepción Arenal 17,<br/> 15006 A Coruña</b></li>
                <li><img className="footer__icon"src={telefono}alt=""/>Teléfono: <b>981 17 40 36</b></li>
                <li><img className="footer__icon"src={email}alt=""/>Email: <b>reservas@atlantistravel.es</b></li>
            </ul>
            <div className="agencia">
                <h2>ATLANTIS  </h2><h3>byAnet</h3><br/><p>es una agencia de viajes
                fundada en 1992 donde la experiencia e innovación se dan la mano para diseñar un  
                viaje personalizado para el viajero más exigente.<br/>Licencia: XG-123</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.9669183186743!2d-8.406112684511855!3d43.35680257913258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c9b3af8234f%3A0xede06900a60378f2!2sAtlantis%20Travel%20Cuatro%20Caminos!5e0!3m2!1ses!2ses!4v1605864153248!5m2!1ses!2ses"title="map" width="282" height="350" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"/>
        </div>
    )
}
