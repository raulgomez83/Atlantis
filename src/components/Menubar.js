
import React from 'react';



import logo from "../images/logo.png"
import icon from "../images/menuIcon.png"

export const Menubar = () => {
    return (
        <div className="menubar">
            <img className="menubar__image"src={logo} alt="logo de la agencia" />
            <img src={icon}  alt="icono de menú"className="modal__icon__openModal"/>

        </div>
    )
}
