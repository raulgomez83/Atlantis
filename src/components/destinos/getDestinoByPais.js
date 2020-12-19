import { destinos } from "../../data/destinos";
import PropTypes from "prop-types";

export const getDestinoByPais = (pais) => {
  return destinos.filter((destino) => destino.pais === pais);
};
getDestinoByPais.propTypes = {
  pais: PropTypes.string.isRequired,
};
