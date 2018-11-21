import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../compartido/productoCarrito';

import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {

  elementosCarrito: ProductoCarrito[];

  constructor(public dialogRef: MatDialogRef<CarritoCompraComponent>) { }

  ngOnInit() {
  }

  //Cuando se haga click en el botón de comprar de detalle-cproducto-component se insertará ese producto en
  // elementosCarrito[] y se devolverra con el servicio de carrito.service.
}
