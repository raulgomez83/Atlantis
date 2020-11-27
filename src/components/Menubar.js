
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import { Modal } from './Modal';

import logo from "../images/logo.png";
import icon from "../images/menuIcon.png";


export const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleModal =()=>{
        return setIsOpen(!isOpen)
    }
    return (
        <div className="menubar">
            <Link to="/">{/* <img className="menubar__image"src={logo} alt="logo de la agencia" /> */}
            <div className="nombre"><h2>ATLANTIS </h2><h4> by Anet</h4></div></Link>
            <img src={icon}  alt="icono de menú" onClick={handleModal}
                 className="modal__icon__openModal"/>
            <Modal open={isOpen}
              handleModal={handleModal}>
              </Modal>

        </div>
    )
}
