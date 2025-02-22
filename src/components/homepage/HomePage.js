import React from "react";

import { BloqueInfo } from "./BloqueCatalogo";
/* import { BloqueViajes } from './BloqueViajes'; */
import { Carrusel } from "../Carrusel";
/* import { Video } from './Video'; */
import { Nosotros } from "./Nosotros";
import { SocialMedia } from "../SocialMedia";
import { Contacto } from "./Contacto";

export const HomePage = () => {
  return (
    <div className="wrapper">
      {/* <Video/> */}
      <header></header>
      <main>
        <Nosotros />
        <Carrusel />
        <BloqueInfo />
        {/* <BloqueViajes/> */}
        <Contacto />
        <SocialMedia />
      </main>
    </div>
  );
};
