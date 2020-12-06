
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import { Modal } from './Modal';

/* import logo from "../images/logo.png"; */
import icon from "../images/menuIcon.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import chat from "../images/chat.png";



export const Menubar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const handleModal =()=>{
        return setIsOpen(!isOpen); 
    }

    return (
        <div className="menubar">
            <div className="nombre">
                <Link to="/">{/* <img className="menubar__image"src={logo} alt="logo de la agencia" /> */}
                    <h4><b>ATLANTIS</b> by Anet</h4>
                </Link>
                <div className="menubar__mobile" >
                    <img src={icon}  alt="icono de menú" onClick={handleModal}
                         className="modal__icon__openModal"/>
                    <Modal open={isOpen}
                      handleModal={handleModal}>
                    </Modal>
                </div>
            </div>
            <ul className="menubar__tv" >
                <li><Link className="link"to="/africa"> África</Link></li>
                <li><Link className="link"to="/america"> América</Link></li>
                <li><Link className="link"to="/asia"> Asia</Link></li>
                <li><Link className="link"to="/europa"> Europa</Link></li>
                <li><Link className="link"to="/oceania"> Oceania</Link></li>
                <li><Link className="link"to="/ofertas">  Ofertas</Link></li>
                <li><a className="link"href="#customFooter">Contacto</a></li>
                <li> 
                    <nav className="menubar__socialmedia ">
                        <a href="https://www.facebook.com/atlantisbyanet/"> <img className=" menubar__socialmedia__icon" src={facebook}  alt="icono facebook"/></a>
                        <a href="https://www.instagram.com/atlantis_byanet/"><img className="menubar__socialmedia__icon"src={instagram} alt="icono instagram"/></a>
                        <a href="https://api.whatsapp.com/send?phone=34*********"> <img className="menubar__socialmedia__icon"src={chat} alt="icono whatsapp"/></a>
                    </nav>
                </li>
            </ul>
            
        </div>
    )
}
