import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/* import catalogo from "../../images/catalogo.png";  */
import destino from "../../images/around.svg"; /*
import contacto from "../../images/contacto.png";*/

export const BloqueInfo = () => {
  useEffect(() => {
    const consulta = document.querySelector(".contacto").firstChild;
    const pantalla = window.innerWidth;
    if (pantalla > 1080) {
      consulta.style.pointerEvents = "none";
    }
  });

  return (
    <div className="catalogo">
      <div className="catalogo__info">
        <img className="info_icono" src={destino} alt="icono destinos" />
        <p>
          Elige entre los mejores{" "}
          <Link to="/destinos">
            <strong> DESTINOS, </strong>
            <br />
          </Link>
          seleccionados por nuestros agentes, para que disfrutes de tus
          vacaciones.
        </p>
      </div>
      {/* <div className="catalogo__info">
            <img className="info_icono"src={catalogo} alt="icono catalogo"/>
            <p>Consulta toda la información que desees de tus destinos favoritos con
            nuestros <Link to="/catalogos"><strong>CATÁLOGOS, </strong><br/></Link> basados en la
            experiencia vividas por nuestros clientes en sus viajes.</p>
        </div>  */}
      {/*   <div className="catalogo__info">
            <img className="info_icono"src={contacto} alt="icono contacto"/>
            <p>...y si te queda alguna pregunta, no dudes en <a href="#customFooter"><strong> CONSULTARNOS, </strong><br/></a> 
            podremos hacer de tu viaje una experiencia única e inolvidable.</p>
        </div> */}
    </div>
  );
};
