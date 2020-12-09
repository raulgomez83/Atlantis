import React from 'react';

export const Catalogo = ({nombre,portada,idC}) => {

    const liStyle={backgroundImage:`url(${portada})`};

    return (
        <>
        <li className="catalogo__container">
            <a href={(`/assets/pdf/${idC}.pdf`)} target="_blank "rel="noopener">
                <div className="catalogo__box"  style={liStyle}  >
                <p className="catalogo__box__link">{nombre}</p>
                </div>
            </a>
        </li>
        </>
    )
}
