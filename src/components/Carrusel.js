import React from 'react';

import carousel1 from "../images/carousel1.jpeg"
import carousel2 from "../images/carousel2.jpeg"
import carousel3 from "../images/carousel3.jpeg"
import carousel4 from "../images/carousel4.jpeg"
import carousel5 from "../images/carousel5.jpeg"


export const Carrusel = () => {
    return (
<div className="carousel">
    <ul className="carousel__box">
        <li><img src={carousel1} alt="carousel1"/></li>
        <li><img src={carousel2} alt="carousel2"/></li>
        <li><img src={carousel3} alt="carousel3"/></li>
        <li><img src={carousel4} alt="carousel4"/></li>
        <li><img src={carousel5} alt="carousel4"/></li>
    </ul>
</div>
    )
}
