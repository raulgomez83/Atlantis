import React, { useEffect } from 'react';

import { Contacto } from './homepage/Contacto';
import { SocialMedia } from './SocialMedia';

export const ContactoPage= () => {
    
    return (
        <div className="contacto__page">
            <SocialMedia />
            <Contacto/>
        </div>
    )
}
