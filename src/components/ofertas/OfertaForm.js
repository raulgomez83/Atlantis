import React from "react";

import close from "../../images/close.png";

export const OfertaForm = ({ handleForm, open, destino }) => {
  if (!open) return null;

  const handleCloseForm = () => {
    document.forms["contactForm"].submit();
    handleForm();
  };
  return (
    <div className="modal__container">
      <div className="modal__box formulario__box">
        <h2> Envíanos tus datos de tu viaje a {destino}</h2>
        <img
          src={close}
          alt="icono cerrar"
          onClick={handleForm}
          className="modal__icon__close img__form"
        />
        <form
          id="formulario"
          action="mailto:raul_eje@hotmail.com"
          method="post"
          name="contactForm"
        >
          <label htmlFor="GET-name">*Nombre y Apellidos:</label>
          <input
            className="formulario__input"
            id="GET-name"
            type="text"
            name="name"
            required
          ></input>
          <label htmlFor="GET-email">*Email:</label>
          <input
            className="formulario__input"
            id="GET-email"
            type="email"
            name="email"
            required
          ></input>
          <label htmlFor="GET-phone">Teléfono:</label>
          <input
            className="formulario__input"
            id="GET-phone"
            type="text"
            name="phone"
          ></input>
          <textarea
            name="textarea"
            rows="6"
            cols="29"
            minLength="10"
            placeholder="Escribe tu comentario..."
            required
          ></textarea>
          <button
            className="custom__button"
            type="submit"
            onClick={handleCloseForm}
            name="Submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
