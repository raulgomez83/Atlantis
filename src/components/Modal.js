import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { SocialMedia } from "./SocialMedia";

import logo from "../images/logo.png";
import close from "../images/close.svg";

export const Modal = ({ handleModal, open = false }) => {
  if (!open) return null;

  return (
    <div className="modal__container">
      <nav className="modal__box ">
        <div className="modal__header">
          <Link to="/">
            <img
              src={logo}
              className="modal__logo"
              onClick={handleModal}
              alt="logo agencia de viajes atlantis cuatro caminos"
            />
          </Link>
          <img
            src={close}
            alt="icono cerrar"
            onClick={handleModal}
            className="modal__icon__close"
          />
        </div>
        <ul>
          <li>
            <Link className="link" onClick={handleModal} to="/africa">
              {" "}
              África
            </Link>
          </li>
          <li>
            <Link className="link" onClick={handleModal} to="/america">
              {" "}
              América
            </Link>
          </li>
          <li>
            <Link className="link" onClick={handleModal} to="/asia">
              {" "}
              Asia
            </Link>
          </li>
          <li>
            <Link className="link" onClick={handleModal} to="/europa">
              {" "}
              Europa
            </Link>
          </li>
          <li>
            <Link className="link" onClick={handleModal} to="/oceania">
              {" "}
              Oceanía
            </Link>
          </li>
          <li>
            <Link className="link" onClick={handleModal} to="/ofertas">
              {" "}
              Ofertas
            </Link>
          </li>
          <li>
            <Link className="link" onClick={handleModal} to="/contacto">
              Contacto
            </Link>
          </li>
          <li>
            <SocialMedia />
          </li>
        </ul>
      </nav>
    </div>
  );
};

Modal.propTypes = {
  handleModal: PropTypes.func,
  open: PropTypes.bool,
};
