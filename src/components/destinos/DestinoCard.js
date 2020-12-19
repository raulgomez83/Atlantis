import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const DestinoCard = ({ continente, pais, imagen }) => {
  return (
    <>
      <div className="destino__container">
        <NavLink className="destino__box" to={`/${continente}/${pais}`}>
          <img src={imagen} alt={pais}></img>
          <p>{pais}</p>
        </NavLink>
      </div>
    </>
  );
};
DestinoCard.propTypes = {
  continente: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};
