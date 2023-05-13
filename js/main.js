//clase producto

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
};

//clase carrito
class Carrito{
    constructor() {
        this.carrito = [];
        this.cantidad = 0;
        this.total = 0;
    }
    mostrar() {
    return mostrarArray(this.carrito);
    }
    eliminarProducto(producto) {
        if (this.carrito.includes(producto)) {
        this.carrito.pop(producto);
        this.cantidad = this.cantidad - 1;
        this.total = this.total - producto.precio;
    } else alert("No se encontró el producto en el carrito!");
    }
    agregarProducto(producto) {
        this.carrito.push(producto);
        this.cantidad = this.cantidad + 1;
        this.total = this.total + producto.precio;
    }
    

};


//SIMULADOR DE COMPRAS Y STOCK DE PRODUCTOS

alert("Bienvenido al simulador de compras y stock de productos!");

// alert(
//     "Contamos con los siguientes productos:\n[1]-Computadora HP $15000\n[2]-Computadora ASUS $20000\n[3]-Computadora Samsung $17000\n[4]-Televisor LG $30000\n[5]-Televisor Samsung $40000\n[6]-Televisor Smart Hitachi $60000 "
// );

//Productos ya existentes
let producto1 = new Producto("Computadora HP", 15000, 20);
let producto2 = new Producto("Computadora ASUS", 20000, 15);
let producto3 = new Producto("Computadora Samsung", 17000, 30);
let producto4 = new Producto("Televisor LG", 30000, 12);
let producto5 = new Producto("Televisor Samsung", 40000, 31);
let producto6 = new Producto("Televisor Smart Hitachi", 60000, 40);

let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6];

alert("Contamos con los siguientes productos:\n" + mostrarArray(listaProductos));

do {
    respuesta = confirm("¿Desea ingresar un nuevo producto a la tienda?");
    if (respuesta == true) {
        listaProductos.push(new Producto(prompt("Nombre:"), parseInt(prompt("Precio:")), parseInt(prompt("Stock:"))));
    }
} while (respuesta == true);

alert("La lista final de productos es:\n" + mostrarArray(listaProductos));

let carrito = new Carrito();

alert("Bienvenido al carrito de compras");
let eleccion;
do {
    opcion = prompt ("Elija una de las opciones:\n[1] - Agregar un producto al carrito\n[2] - Eliminar un producto del carrito\n[3] - Mostrar carrito\n[4] - Mostrar el precio total del carrito\n[0] - Salir")
    switch (opcion) {
        case '1':
            eleccion = prompt(
                "Elija que producto quiere agregar al carrito de compras segun el indice:\n" + mostrarArray(listaProductos)
            );
            if (eleccion < listaProductos.length && eleccion >= 0) {
                carrito.agregarProducto(listaProductos[Math.round(eleccion)]);
            } else alert("El producto no existe.")
            break;
        case '2':
            eleccion = prompt(
                "Elija que producto quiere eliminar del carrito de compras segun el indice:\n" + carrito.mostrar()
            );
            if (eleccion < carrito.carrito.length && eleccion >= 0) {
                carrito.eliminarProducto(carrito.carrito[Math.round(eleccion)]);
            } else alert("El producto no esta en la lista");
            break;
        case '3':
            alert (carrito.mostrar());
            break;
        case '4':
            alert("El precio total del carrito es: " + carrito.total)
            break;
        case '0':
            break;
        default:
            alert("ERROR FATAL");
            break;

    }
} while (opcion != 0);

//FUNCIONES

function mostrarArray(array) {
    cadena = "";
    for (let i = 0; i < array.length; i++) {
        cadena = cadena + "[" + i + "] " + array[i].nombre + " $" + array[i].precio + "\n";
    }
    return cadena;
}

// CALCULADORA DE CUOTAS

// alert("Bienvenido a la Calculadora de Cuotas");

// do {
//     let precio = prompt("Ingrese el precio del articulo que quiera comprar: ");

//     let cantCuotas = prompt("Ingrese la cantidad de cuotas en las que desea pagar: ");

//     alert("El interes es de: " + 100 * calcularInteres(cantCuotas) + "%");

//     let precioPorCuota = calcularPrecioPorCuota(precio, cantCuotas);

//     alert("El precio por cada cuota quedaria en: " + precioPorCuota);

//     precioTotal = precioPorCuota * cantCuotas;

//     alert("Al finalizar las cuotas habrias pagado: " + precioTotal);

//     bandera = confirm("¿Desea ingresar otro producto para calcular?");
// } while (bandera == true);

// //FUNCIONES

// function calcularPrecioPorCuota(precioOriginal, cantidadCuotas) {
//     const valorCuota = precioOriginal / cantidadCuotas;

//     const valorInteres = valorCuota * calcularInteres(cantidadCuotas);
//     let precioCuota = valorCuota + valorInteres;

//     return precioCuota;
// }

// function calcularInteres(cantidadCuotas) {
//     let tasaInteres;

//     if (cantidadCuotas <= 3) {
//         tasaInteres = 0.05;
//     } else if (cantidadCuotas <= 6) {
//         tasaInteres = 0.1;
//     } else if (cantidadCuotas <= 9) {
//         tasaInteres = 0.15;
//     } else {
//         tasaInteres = 0.2;
//     }

//     return tasaInteres;
// }
