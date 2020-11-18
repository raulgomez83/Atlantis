
import React,{useState} from 'react';

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
            <img className="menubar__image"src={logo} alt="logo de la agencia" />
            <img src={icon}  alt="icono de menú" onClick={handleModal}
                 className="modal__icon__openModal"/>
            <Modal open={isOpen}
              handleModal={handleModal}>
              </Modal>

        </div>
    )
}
