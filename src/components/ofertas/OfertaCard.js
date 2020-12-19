import React, { useState } from "react";

import paypal from "../../images/paypal.png";
import { OfertaForm } from "./OfertaForm";

export const OfertaCard = ({ id, destino, imagen }) => {
  const liStyle = { backgroundImage: `url(${imagen})` };

  const [formIsOpen, setFormIsOpen] = useState(false);
  const handleForm = () => {
    return setFormIsOpen(!formIsOpen);
  };

  return (
    <div className="oferta__box">
      <a href={`/assets/pdf/${id}.pdf`} target="_blank " rel="noopener">
        <div className="catalogo__box" style={liStyle}>
          <p className="catalogo__box__link">{destino}</p>
        </div>
      </a>
      <div className="compra__container" onClick={handleForm}>
        <button className="custom__button">Comprar</button>
        <img className="compra__imagen" src={paypal} alt="paypal logo" />
      </div>
      <OfertaForm
        open={formIsOpen}
        destino={destino}
        handleForm={handleForm}
      ></OfertaForm>
    </div>
  );
};
