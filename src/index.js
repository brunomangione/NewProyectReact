import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import './utils/funcionesUtiles.js'
import { CarritoProvider } from './context/CarritoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <
    CarritoProvider >
    <
    App / >
    <
    /CarritoProvider>



);