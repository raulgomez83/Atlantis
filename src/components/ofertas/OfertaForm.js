import React from 'react'

export const OfertaForm = ({handleForm,open}) => {

    if (!open) return null;


    return (
        <div>
            <h1 onClick={handleForm}>Holi</h1>
        </div>
    )
}
