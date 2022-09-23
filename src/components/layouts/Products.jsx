import React from 'react';

const Products = () => {
    return (
        <>
    <div ClassName="CardProducts"> 
        <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header">Producto 1</div>
            <div className="card-body">
                <h4 className="card-title">Marca: </h4>
                <p className="card-text">Descripcion</p>
            </div>
        </div>
        <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header">Producto 2</div>
            <div className="card-body">
                <h4 className="card-title">Marca:</h4>
                <p className="card-text">Descripcion</p>
            </div>
        </div>
    </div>



        </>
    );
}

export default Products;
