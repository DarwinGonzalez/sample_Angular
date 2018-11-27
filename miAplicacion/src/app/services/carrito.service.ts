import { ProductoCarrito } from './../compartido/productoCarrito';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  elementosCarrito: ProductoCarrito[];
  producto: ProductoCarrito;

  constructor() {
    //var prod1 = new ProductoCarrito("Producto 1", 2);
    //var prod2 = new ProductoCarrito("Producto 2", 1);
    this.elementosCarrito = [
      // prod1,
      // prod2
    ]
  }

  getProductosCarrito(): Observable<ProductoCarrito[]> {
    console.log(this.elementosCarrito);
    return of(this.elementosCarrito);
  }

  setProductoCarrito(producto){
    console.log(producto);
    if(localStorage.getItem("Producto") == null){
      this.producto = new ProductoCarrito(producto.producto, producto.cantidad);
      this.elementosCarrito.push(this.producto);
      localStorage.setItem("Producto", JSON.stringify(this.elementosCarrito));
    }
    else {
      this.elementosCarrito.push(JSON.parse(localStorage.getItem("Producto")));
      this.elementosCarrito.push(this.producto);
      localStorage.setItem("Producto", JSON.stringify(this.elementosCarrito));
    }
  }

  /*
  deleteProductoCarrito(prod): Observable<ProductoCarrito> {
  }


  obtenerCarrito(): Observable<any[]> {

  }
  */

}
