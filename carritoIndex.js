import { productos } from "./productos.js";



const carritoIndex = (productoId) => {
    let carritoDeCompras = [];

    if (localStorage.getItem("carrito")) {
        carritoDeCompras = obtenerCarritoStorage();
    }
    
    let productoRepetido = carritoDeCompras.find( producto => producto.id == productoId);
    contarProductosRepetidos(productoRepetido, productoId, carritoDeCompras);

}

const contarProductosRepetidos = (productoRepetido, productoId, carritoDeCompras) => {
    if (productoRepetido) {

    } else {
        agregarProductoAlCarrito( productoId, carritoDeCompras);

        
    }
}

const agregarProductoAlCarrito = (productoId, carritoDeCompras) => {
    const contenedor = document.getElementById("carrito-contenedor");
    const producto = productos.find( producto => producto.id == productoId);

    carritoDeCompras.push(producto);

    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id="cantidad${producto.cantidad}">Cantidad: ${producto.cantidad}</p>

    `
}


const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));

    return carritoStorage;

}