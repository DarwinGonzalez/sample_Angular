import { Component, OnInit, Inject } from '@angular/core';

import { Producto } from '../compartido/producto';
import { ProductoService } from './../services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  productosOferta: Producto[];
  errorMensaje: string;
  constructor(private productoService:ProductoService, @Inject('BaseURL') private BaseURL) {   }

  ngOnInit() {
    this.productoService.getProductosOferta().subscribe(productos => this.productosOferta = productos, errorMensaje => this.errorMensaje = <any>errorMensaje);
  }


}
