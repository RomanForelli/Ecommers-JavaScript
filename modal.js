
import { actualizarCarrito } from "./actualizarCarrito.js";
import { carritoIndex, eliminarProductoCarrito, vaciarCarritoDeCompras, } from "./carritoIndex.js";

const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("boton-eliminar"))
    {
        eliminarProductoCarrito(e.target.value);
        return;
    } 
    if (e.target.classList.contains("botton-vaciar"))
    {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) 
            {
                vaciarCarritoDeCompras();
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success',
                )
            }
          })
        return;
    }
    if ( e.target.classList.contains("botton-finalizar"))
    {
        vaciarCarritoDeCompras();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Finalizo su compra con Exito, Muchas gracias por confiar en nosotros!',
          showConfirmButton: false,
          timer: 2500
        })
        return;
    }
    
})

