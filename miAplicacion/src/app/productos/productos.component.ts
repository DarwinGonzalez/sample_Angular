import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../services/producto.service';

import { Producto } from '../compartido/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})


export class ProductosComponent implements OnInit {
  vProductos: Producto[];
  productoSeleccionado;

  constructor(private productoService: ProductoService ) { }

  ngOnInit() {
    this.vProductos = this.productoService.getProductos();
  }
   
    onSeleccionado(producto: Producto) { this.productoSeleccionado = producto; }
}
