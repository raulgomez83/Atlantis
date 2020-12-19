import React from "react";
import { NavLink } from "react-router-dom";

export const ContactoDestino = () => {
  return (
    <div className="contacto__destino">
      <h3>¿Listo para partir al mejor viaje de tu vida?</h3>
      <h4>Lo planeamos contigo</h4>
      <NavLink to="/contacto" className="custom__button">
        Vamos!
      </NavLink>
    </div>
  );
};
