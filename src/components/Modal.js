
import React from 'react'
import { Link } from 'react-router-dom';

import logo from "../images/logo.png";
import close from "../images/close.png" 
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import { SocialMedia } from './SocialMedia';

export const Modal = ({handleModal,open}) => {

     if (!open) return null; 

    return (
        <div className="modal__container">
            <nav className="modal__box ">
                <header>
                    <Link to="/"><img src= {logo} className="modal__logo"alt="logo agencia de viajes atlantis travel cuatro caminos"/></Link>
                    <img  src={close} alt="icono cerrar" onClick={handleModal} className="modal__icon__close"/>
                </header>
                <ul>
                    <li><Link className="link"to="/africa"> África</Link></li>
                    <li><Link className="link"to="/america"> América</Link></li>
                    <li><Link className="link"to="/asia"> Asia</Link></li>
                    <li><Link className="link"to="/europa"> Europa</Link></li>
                    <li><Link className="link"to="/oceania"> Oceania</Link></li>
                    <li><Link className="link"to="/ofertas">  Ofertas</Link></li>
                    <li><Link className="link"to="/consultas">Contacto</Link></li>
                    <li>
                        <SocialMedia/>
                    </li>
                </ul>
              </nav>
        </div>
    )
}
