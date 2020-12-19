import React from "react";

export const BuscadorDestinos = ({ filteredDestino, handleFilterChange }) => {
  console.log(filteredDestino, handleFilterChange);
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
