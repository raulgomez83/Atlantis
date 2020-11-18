
import React from 'react'
import { Link } from 'react-router-dom';

import logo from "../images/logo.png";
import close from "../images/close.png" 

export const Modal = ({handleModal,open}) => {

     if (!open) return null; 

    return (
        <div className="modal__container">
            <nav className="modal__box ">
                <header>
                    <img src= {logo} className="modal__logo"alt="logo agencia de viajes atlantis travel cuatro caminos"/>
                    <img  src={close} alt="icono cerrar" onClick={handleModal} className="modal__icon__close"/>
                </header>
                <ul>
                    <li><Link className="link"to="/">Home</Link></li>
                    <li><Link className="link"to="/destinos"> Destinos</Link></li>
                    <li><Link className="link"to="/ofertas">  Ofertas</Link></li>
                    <li><Link className="link"to="/catalogos">Catálogos</Link></li>
                    <li><Link className="link"to="/consultas">Consúltanos</Link></li>
                </ul>
              </nav>
        </div>
    )
}
