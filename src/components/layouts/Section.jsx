import {Link} from 'react-router-dom';
import React from 'react';

const Section = () => {
    return (
        <>
          
            <li class="nav-item">
                <Link class="nav-link active" to="/"> Home <span class="visually-hidden">(current)</span></Link>
                       
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Shopp</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
            </li>
               
          
        </>
    );
}

export default Section;
