import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './contents/Navbar';
import '../styles/App.css'
import Carrito from './contents/Carrito';
import About from './contents/About';
import Contacto from './contents/Contacto';
import Producto from './contents/Producto';
import Home from './contents/Home';
import Categoria from './contents/Categoria';
import { CarritoProvider } from '../context/CarritoContext';




const App = () => {
    return (
        <>
          <CarritoProvider>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/producto/:id" element={<Producto/>} />
                <Route path="/categoria/:id" element={<Categoria/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Carrito/>} />
              </Routes>
          </BrowserRouter>
          </CarritoProvider>
          
          

        
          



          


          
        </>
    );
}

export default App;
