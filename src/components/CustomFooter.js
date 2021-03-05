import React from "react";
import { NavLink } from "react-router-dom";
import image from "../images/igape.png";

export const CustomFooter = () => {
  return (
    <div className="custom__footer">
      <div className="footer__parrafo">
        <p>©Atlantis by Anet</p>
        <img className="image__footer" src={image} alt="logos Xunta IGAPE" />
      </div>
      <div className="custom__link">
        <NavLink className="politica__link" to="politicadecookies">
          Política de cookies
        </NavLink>
        <NavLink className="politica__link" to="politicadeprivacidad">
          Política de privacidad
        </NavLink>
        <NavLink className="politica__link" to="avisolegal">
          Aviso Legal
        </NavLink>
      </div>
    </div>
  );
};
