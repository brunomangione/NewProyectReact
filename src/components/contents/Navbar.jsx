import {Link} from 'react-router-dom';
import React from 'react';
import Section from '../layouts/Section';
import Dropdown from '../layouts/Dropdown';
import Form from '../layouts/Form';

const Navbar = () => {
  const listDrowdown = ["Hombres", "Mujeres"]
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                    <Section/>
                    <Dropdown lista = {listDrowdown}/>
                  </ul>
                    <Form/>
                </div>
                  
              </div>
              <div>
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/carrito"><i className="fa-solid fa-cart-shopping"></i> <span className="visually-hidden"></span></a>

                  </li>
                </ul>
              </div>
            </nav>
        </>
    );
}

export default Navbar;
