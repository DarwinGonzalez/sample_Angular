import { Injectable } from '@angular/core';

import { Producto } from '../compartido/producto';
import { PRODUCTOS } from '../compartido/productos';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos(): Observable<Producto[]> {
    return of(PRODUCTOS).pipe(delay(1000));
  }

  getProducto(id: number): Observable<Producto> {
    return of(PRODUCTOS.filter((producto) => (producto.id === id))[0]).pipe(delay(1000));
  }

  getProductosOferta(): Observable<Producto[]> {
    return of(PRODUCTOS.filter((producto) => producto.oferta)).pipe(delay(1000));
  }

  getProductosIds(): Observable<number[] | any>{
    return of(PRODUCTOS.map(producto => producto.id));
  }

}
