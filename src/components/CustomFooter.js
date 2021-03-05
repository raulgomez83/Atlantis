import React from "react";
import image from "../images/igape.png";

export const CustomFooter = () => {
  return (
    <div className="footer__parrafo">
      <p>©Atlantis by Anet</p>
      <img className="image__footer" src={image} alt="logos Xunta IGAPE" />
    </div>
  );
};
