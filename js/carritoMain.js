
import { Carrito } from "./Carrito.js";

const contenedorCarrito = document.getElementById("seccionCarrito");
let carrito = (JSON.parse(localStorage.getItem("carrito")));
if (carrito == null) {
    carrito = new Carrito(0, 0);
} else {
    carrito = new Carrito(carrito.productos, carrito.total);
}

let contenedorTotal = document.getElementById("seccionTotal");

carrito.productos.forEach(producto => {
    const divCarrito = document.createElement('div');
    

    const imagen = document.createElement('img');
    imagen.src ="../" + producto.img;

    const nombre = document.createElement('h2');
    nombre.textContent = producto.nombre;
    
    const precio = document.createElement('p');
    precio.textContent = "precio:" + producto.precio;

    const botonEliminar= document.createElement('button');
    botonEliminar.innerText = "Eliminar";
    botonEliminar.className = "boton";


    divCarrito.appendChild(imagen);
    divCarrito.appendChild(nombre);
    divCarrito.appendChild(precio);
    divCarrito.appendChild(botonEliminar);
    contenedorCarrito.appendChild(divCarrito);

    botonEliminar.addEventListener("click", function () {
        carrito.eliminarProducto(producto);
        localStorage.clear();
        
        localStorage.setItem("carrito", JSON.stringify(carrito));
        location.reload();

        
        
    });

})

//CODIGO PARA MOSTRAR EL TOTAL QUE SE DEBERA PAGAR EN EL CARRITO
const total = document.createElement('p');
total.innerText = "TOTAL: " + carrito.total + "$";
contenedorTotal.appendChild(total);