import React, { /* useEffect, */ useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getDestinoByPais } from "./getDestinoByPais";
import { Catalogo } from "./Catalogo";
import { OfertaDestino } from "../ofertas/OfertaDestino";

export const DestinoItem = () => {
  const { pais } = useParams();

  const destino = useMemo(() => getDestinoByPais(pais), [pais]);
  if (!destino) {
    <Redirect to="/" />;
  }
  const { catalogos } = destino[0];

  return (
    <div className="destino__item">
      <h1>{pais}</h1>
      <ul className="catalogos">
        {catalogos.map((catalogo) => (
          <Catalogo key={catalogo.idC} {...catalogo}>
            {catalogo.idC}
          </Catalogo>
        ))}
      </ul>
      <OfertaDestino />
    </div>
  );
};
