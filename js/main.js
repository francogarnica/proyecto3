//Importo clase Carrito
import { Carrito } from './Carrito.js'; 

let carrito = (JSON.parse(localStorage.getItem("carrito")));
if (carrito == null) {
    carrito = new Carrito([], 0);
} else {
    carrito = new Carrito(carrito.productos, carrito.total);
}


const contenedor = document.getElementById("seccionProductos");

//TEXTO "OFERTAS"

function imprimirCadena() {
    const cadena = "OFERTAS";
    let contador = 0;

    const intervalo = setInterval(() => {
        if (contador <= cadena.length) {
            const subcadena = cadena.substring(0, contador);
            document.getElementById("cadena").textContent = subcadena;
            contador++;
        } else {
            clearInterval(intervalo);
            imprimirCadena();
        }
    }, 1000);
}

imprimirCadena();

/////////

//ACA SE CREAN Y MUESTRAN TODOS LOS PRODUCTOS

let etiquetas = [];

fetch("./data/productos.json")
.then(response => response.json())
.then(data =>{
    data.forEach(producto => {
        const divProductos = document.createElement('div');
        divProductos.classList.add(producto.tipo);
        
        let i = 0;
        while (producto.tipo != etiquetas[i] && i <= etiquetas.length) {
            i++;
        }
        if (i > etiquetas.length) {
            etiquetas.push(producto.tipo);
        }
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
            Swal.fire('Agregado al carrito','gracias','success');
            carrito.agregarProducto(producto);
            localStorage.clear();
            localStorage.setItem("carrito", JSON.stringify(carrito));
            console.log(JSON.stringify(carrito));
        });
    })
},1000000);


//FILTRADOR

document.getElementById("filtros").addEventListener('change', function (event) {
    let productosPorTipo = [];

    for(let i = 0 ; i < etiquetas.length; i++){
        productosPorTipo.push(document.getElementsByClassName(etiquetas[i]));
    }

    let tipoActual = event.target.value;
    console.log(productosPorTipo);
    if(tipoActual == 0){
        for(let i = 0 ; i < productosPorTipo.length; i++){
            for (let j = 0; j < productosPorTipo[i].length; j++){
                productosPorTipo[i][j].style.display = 'block';
            }
        }
    }
    else{
        for(let i = 0 ; i < productosPorTipo.length; i++){
            console.log(productosPorTipo[1].length)
            
            for (let j = 0; j < productosPorTipo[i].length; j++){
                
                productosPorTipo[i][j].style.display = 'none';
               
            }
            
        }
        for (let i = 0; i < productosPorTipo[tipoActual-1].length; i++){
            productosPorTipo[tipoActual-1][i].style.display = 'block';
        }
    }
}
  
);

//FUNCIONES

function creaFiltradorHTML(etiquetas){
    const divFiltrador = document.createElement('div');
    divFiltrador.classList.add("filtrador");
    
    const titulo = document.createElement('p');
    titulo.textContent = "Filtrar productos:";
    divFiltrador.appendChild(titulo);

    const select = document.createElement('select');
    select.setAttribute("name", "cosa");
    select.setAttribute("id", "filtros");
    divFiltrador.appendChild(select);
    
    //divFiltrador.appendChild('<option value="0">todos</option>');
    //Se agrega una opcion por default:
    const etiqueta = document.createElement('option');
        etiqueta.setAttribute("value", 0);
        etiqueta.textContent = "todos";
        divFiltrador.appendChild(etiqueta);

    for(let i = 0; i < etiquetas.length; i++){
        const etiqueta = document.createElement('option');
        etiqueta.setAttribute("value", i+1);
        etiqueta.textContent = etiquetas[i];
        divFiltrador.appendChild(etiqueta);
    }

    return divFiltrador;
}

