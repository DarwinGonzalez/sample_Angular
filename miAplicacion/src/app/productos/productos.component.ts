import { Component, OnInit, Inject  } from '@angular/core';

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
  errorMensaje: string;

  constructor(private productoService: ProductoService, @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(productos => this.vProductos = productos, errorMensaje => this.errorMensaje = <any>errorMensaje);
  }

    onSeleccionado(producto: Producto) { this.productoSeleccionado = producto; }
}
