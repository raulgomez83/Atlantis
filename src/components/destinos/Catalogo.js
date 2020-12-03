import React from 'react';

export const Catalogo = ({nombre,portada,idC}) => {

    const liStyle={backgroundImage:`url(${portada})`};

    return (
        <>
        <li className="catalogo__container">
            <a href={(`../../catalogos/${idC}.pdf`)} download="rutas"rel="noopener ">
                <div className="catalogo__box"  style={liStyle}  >
                <p className="catalogo__box__link">{nombre}</p>
                </div>
            </a>
        </li>
        </>
    )
}
