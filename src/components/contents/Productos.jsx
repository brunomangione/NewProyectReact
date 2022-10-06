import React, {useState, useEffect} from 'react';
import DetalleProducto from './DetalleProducto'
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';
const Productos = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       consultarBDD('../json/productos.json').then(productos => {
        const producto1 = productos.find(productoArray => productoArray.id == id)
        
        setProductos(producto1)
       })
   
    }, [])

    return (
        
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <DetalleProducto producto={productos}/>
            </div>

       
    );
}

export default Productos;