export const mostrarProductos = (productos) => {
    const contenedor = document.getElementById("contenedor-productos");

    productos.forEach( producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span> 
                        </div>
                        <div class="card-content">
                            <p>Variedad: ${producto.variedad}</p>
                            <p>Bodega: ${producto.bodega} </p>
                            <p>Valor: $${producto.precio}</p>
                            <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                        </div>    
                        `   

        contenedor.appendChild(div);

        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener("click",  () => {
            carritoIndex(producto.id);
        })
    });

};
