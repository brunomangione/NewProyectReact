import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, getDocs, getDoc, upDateDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "newproyectreact.firebaseapp.com",
    projectId: "newproyectreact",
    storageBucket: "newproyectreact.appspot.com",
    messagingSenderId: "361961633612",
    appId: "1:361961633612:web:b5ab33b4be553f3393c1e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarBaseDeDatos = async() => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async(producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            idCategoria: producto.idCategoria,
            marca: producto.marca,
            claseCategoria: producto.claseCategoria,
            precio: producto.precio,
            stock: producto.stock,
            img: producto.img
        })
    });
}
const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    return prod
}

const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
}

const createOrdenCompra = async(preTotal, nombre, apellido, email, dni) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: nombre,
        apellido: apellido,
        email: email,
        dni: dni,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}


export { cargarBaseDeDatos, getProductos, getProducto, createOrdenCompra, getOrdenCompra }