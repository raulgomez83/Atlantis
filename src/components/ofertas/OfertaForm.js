import React from 'react'

export const OfertaForm = ({handleForm,open}) => {

    if (!open) return null;


    return (
        <div className="modal__container" >
            <form id="formulario" className="modal__box" action="mailto:raul_eje@hotmail.com" method="post" name="contactForm">
                <h2> Deja tus datos y contactaremos contigo lo antes posible</h2>
                <label htmlFor="GET-name">*Nombre y Apellidos:</label>
                <input id="GET-name" type="text" name="name" required></input>
                <label htmlFor="GET-email">*Email:</label>
                <input id="GET-email" type="email" name="email" required></input>
                <label htmlFor="GET-phone">Teléfono:</label>
                <input id="GET-phone" type="text" name="phone"></input>
                <textarea name="textarea" rows="15" cols="40" minLength="10" placeholder="Escribe tu comentario..." required></textarea>
                <input className="custom__button form__buttom" onClick={handleForm} type="submit" name="Submit" value="Enviar"/>
            </form>
            
        </div>
    )
}
