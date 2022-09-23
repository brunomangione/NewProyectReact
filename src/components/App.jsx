import React from 'react';
import Navbar from './contents/Navbar';
import Products from './layouts/Products';
import '../styles/App.css'



const App = () => {
    return (
        <>
          
          <Navbar/>
          

          <h2 className='title'> PERFUME </h2>

          <Products/>


          


          
        </>
    );
}

export default App;
