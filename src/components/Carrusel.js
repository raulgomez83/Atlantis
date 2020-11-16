import React from 'react';

import carousel1 from "../images/carousel1.jpeg";
import carousel2 from "../images/carousel2.jpeg";
import carousel3 from "../images/carousel3.jpeg";
import carousel4 from "../images/carousel4.jpeg";
import carousel5 from "../images/carousel5.jpeg";

export const Carrusel = () => {
    return (
        <div className="carousel">
        <ul className="carousel__box">
              <li><img src={carousel1} alt="carousel1"/>PLayas</li>
              <li><img src={carousel2} alt="carousel2"/>Destinos Exóticos</li>
              <li><img src={carousel3} alt="carousel3"/>Naturaleza</li>
              <li><img src={carousel4} alt="carousel4"/>Safaris</li>
              <li><img src={carousel5} alt="carousel5"/>Grandes Urbes</li>
        </ul>
</div>
    )
}
