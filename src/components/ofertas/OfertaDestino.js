import React from "react";
import { NavLink } from "react-router-dom";

export const OfertaDestino = () => {
  return (
    <div className="oferta__destino">
      <h2>¿Ya te has decido?</h2>
      <h4>Mira nuestras ofertas</h4>
      <NavLink to="/ofertas" className="custom__button">
        Vamos!
      </NavLink>
    </div>
  );
};
