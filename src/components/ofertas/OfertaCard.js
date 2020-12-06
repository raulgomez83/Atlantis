import React from 'react';



export const OfertaCard = ({id,destino,imagen}) => {

    const liStyle={backgroundImage:`url(${imagen})`};

    return (
        <div>
            <a href={(`/assets/images/${id}.pdf`)} download="rutas"rel="noopener ">
                <div className="catalogo__box"  style={liStyle}  >
                <p className="catalogo__box__link">{destino}</p>
                </div>
            </a>
        </div>
    )
}
