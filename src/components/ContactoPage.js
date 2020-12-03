import React from 'react'
import { Contacto } from './homepage/Contacto'
import { CustomFooter } from './CustomFooter'
import { Menubar } from './Menubar'
import { SocialMedia } from './SocialMedia'

export const ContactoPage= () => {
    return (
        <div>
            <Menubar/>
            <SocialMedia/>
            <Contacto/>
            <CustomFooter/>
        </div>
    )
}
