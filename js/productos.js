export const productos = [
    {
        nombre:"Computadora HP",
        tipo:"computadora",
        precio: 15000,
        img:"img/ComputadoraHP.jpg"
        
    },
    {
        nombre:"Computadora ASUS",
        tipo:"computadora",
        precio:20000,
        img:"img/ComputadoraAsus.jpg"
    },
    {
        nombre:"Computadora Samsung",
        tipo:"computadora",
        precio:17000,
        img:"img/ComputadoraSamsung.jpg"
    },
    {
        nombre:"Televisor LG",
        tipo:"televisor",
        precio:30000,
        img:"img/TelevisorLG.jpg"
    },
    {
        nombre:"Televisor Samsung",
        tipo:"televisor",
        precio:40000,
        img:"img/TelevisorSamsung.jpg"
    },
    {
        nombre:"Televisor Smart Hitachi",
        tipo:"televisor",
        precio:60000,
        img:"img/TelevisorHitachi.jpg"
    }
]

export class Carrito{
    constructor(productos,total) {
        this.productos = productos;
        this.cantidad = productos.length;
        this.total = total;
    }
    mostrar() {
    return mostrarArray(this.productos);
    }
    eliminarProducto(producto) {
        let i = 0;
        while (producto.nombre != this.productos[i].nombre && i <= this.productos.length) {
            i++;
            console.log(this.productos[i]);
        }
        if (producto.nombre == this.productos[i].nombre) {
            console.log(producto);
            console.log(this.productos);
            this.productos.splice(i,1);
            this.cantidad = this.cantidad - 1;
            this.total = this.total - producto.precio;
        }else alert("No se encontró el producto en el productos!");
    }
    agregarProducto(producto) {
        this.productos.push(producto);
        this.cantidad = this.cantidad + 1;
        this.total = this.total + producto.precio;
    }
    

};
