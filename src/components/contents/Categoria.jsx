import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';
const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.claseCategoria == id)
            
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto" key={producto.idCategoria}>
                    <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Marca: {producto.marca}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/productos/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div className="row">
            {productos}
        </div>
            
        
    );
}

export default Categoria;