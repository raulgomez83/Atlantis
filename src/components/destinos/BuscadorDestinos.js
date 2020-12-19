import React from "react";
import PropTypes from "prop-types";

export const BuscadorDestinos = ({ filteredDestino, handleFilterChange }) => {
  return (
    <div className="destino__searcher">
      <form>
        <input
          className="destino__searcher_input"
          type="search"
          placeholder="Encuentra tu destino..."
          value={filteredDestino}
          onChange={handleFilterChange}
        />
      </form>
    </div>
  );
};

BuscadorDestinos.propTypes = {
  filteredDestino: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
