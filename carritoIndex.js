import { productos } from "./productos.js";
import { actualizarCarrito } from "./actualizarCarrito.js";

export const carritoIndex = (productoId) => {
    let carritoDeCompras = [];

    if (localStorage.getItem("carrito")) {
        carritoDeCompras = obtenerCarritoStorage();
    }
    
    let productoRepetido = carritoDeCompras.find( producto => producto.id == productoId);
    contarProductosRepetidos(productoRepetido, productoId, carritoDeCompras);

}

const contarProductosRepetidos = (productoRepetido, productoId, carritoDeCompras) => {
    if (productoRepetido) {
        productoRepetido.cantidad++
        document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<p id=cantidad${productoRepetido.cantidad}>Cantidad: ${productoRepetido.cantidad}</p>`;
        actualizarCarrito(carritoDeCompras)
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
                    <button id=eliminar${producto.id} class="btn waves-effect waves-light boton-eliminar" value="${producto.id}"> X </button>
                    `
    contenedor.appendChild(div);
    actualizarCarrito(carritoDeCompras)                
}

export const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage ()
    const carritoActualizado = carritoStorage.filter( producto => producto.id != productoId )

    actualizarCarrito(carritoActualizado);
    actualizarProductosCarrito(carritoActualizado)

}

export const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));

    return carritoStorage;

}

export const actualizarProductosCarrito = (carritoDeCompras) => {
    const contenedor = document.getElementById("carrito-contenedor");
    
    contenedor.innerHTML = "";

   carritoDeCompras.forEach(producto => {
     const div = document.createElement("div");
     div.classList.add("productoEnCarrito");
     div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id="cantidad${producto.cantidad}">Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class="btn waves-effect waves-light boton-eliminar" value="${producto.id}"> X </button>
                    `
    contenedor.appendChild(div);
    
   });
                   
}