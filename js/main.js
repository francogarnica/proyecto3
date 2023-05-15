//Importo los productos 
import { productos } from './productos.js';
import { Carrito } from './productos.js'; //CLASE CARRITO IMPORTADA

let carrito = (JSON.parse(localStorage.getItem("carrito")));
carrito = new Carrito(carrito.productos, carrito.total);

const contenedor = document.getElementById("seccionProductos");

//ACA SE CREAN Y MUESTRAN TODOS LOS PRODUCTOS 
productos.forEach(producto => {
    const divProductos = document.createElement('div');
    divProductos.classList.add(producto.tipo);

    const imagen = document.createElement('img');
    imagen.src = producto.img;

    const nombre = document.createElement('h2');
    nombre.textContent = producto.nombre;
    
    const precio = document.createElement('p');
    precio.textContent = "precio:" + producto.precio;

    const botonAgregar = document.createElement('button');
    botonAgregar.innerText = "Agregar";
    botonAgregar.className = "boton";


    divProductos.appendChild(imagen);
    divProductos.appendChild(nombre);
    divProductos.appendChild(precio);
    divProductos.appendChild(botonAgregar);

    

    contenedor.appendChild(divProductos);

    botonAgregar.addEventListener("click", function () {
        carrito.agregarProducto(producto);
        localStorage.clear();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(JSON.stringify(carrito));
    });
})

//FILTRADOR

document.getElementById('filtrador').addEventListener('change', function (event) {
    let televisor = document.getElementsByClassName("televisor");
    let computadora = document.getElementsByClassName("computadora");
    if (event.target.value == "0") {
        for (let i = 0; i < computadora.length; i++){
            computadora[i].style.display = 'block';
        }
        for (let i = 0; i < televisor.length; i++){
            televisor[i].style.display = 'block';
        } 
    }else if (event.target.value === "1") { // SI SE SELECCIONA COMPUTADORA
        for (let i = 0; i < televisor.length; i++){
            televisor[i].style.display = 'none';
        } 
        for (let i = 0; i < computadora.length; i++){
             computadora[i].style.display = 'block';
        }
    } else if (event.target.value === "2") { // SI SE SELECCIONA TELEVISOR
        for (let i = 0; i < computadora.length; i++){
            computadora[i].style.display = 'none';
        }
        for (let i = 0; i < televisor.length; i++){
             televisor[i].style.display = 'block';
        } 
    }
}
  
);

//FUNCIONES

//NO SE UTILIZA ESTA FUNCION PERO LA DEJO POR SI ACASO LA NECESITO EN UN FUTURO
// function mostrarArray(array) {
//     cadena = "";
//     for (let i = 0; i < array.length; i++) {
//         cadena = cadena + "[" + i + "] " + array[i].nombre + " $" + array[i].precio + "\n";
//     }
//     return cadena;
// }

