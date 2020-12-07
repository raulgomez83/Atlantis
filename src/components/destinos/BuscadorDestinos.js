import React from 'react'

export const BuscadorDestinos = ({filteredDestino,handleFilterChange}) => {
    return (
        <div className="destino__searcher">
            <form>
                <input
                type="search"
                placeholder="Busca tu queso favorito entre..."
                value={filteredDestino}
                onChange={handleFilterChange}/>
            </form>
        </div>
    )
}
