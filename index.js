import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { actualizarProductosCarrito, obtenerCarritoStorage } from "./carritoIndex.js";
// import { productos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();

    if (localStorage.getItem("carrito")) {
        const carritoStorage = obtenerCarritoStorage();
        actualizarProductosCarrito(carritoStorage);
        actualizarCarrito(carritoStorage);
    }
});