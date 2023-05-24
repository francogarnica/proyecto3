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
        }
        if (producto.nombre == this.productos[i].nombre) {
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