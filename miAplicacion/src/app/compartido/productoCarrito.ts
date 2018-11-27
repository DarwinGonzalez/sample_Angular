export class ProductoCarrito {
    producto: string;
    cantidad: number;

    constructor( producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getProducto(){
        return this.producto;
    }

    getCantidad(){
        return this.cantidad;
    }
}

