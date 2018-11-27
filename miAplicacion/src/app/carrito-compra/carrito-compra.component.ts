import { CarritoService } from './../services/carrito.service';
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
  elemento = { producto: '', cantidad: ''};
  chivato: Object;
  elementos = [];

  constructor(public dialogRef: MatDialogRef<CarritoCompraComponent>, private carritoService: CarritoService) { }

  ngOnInit() {
    this.mostrarCarrito();
  }

  mostrarCarrito() {
    this.carritoService.getProductosCarrito().subscribe(productos => this.elementosCarrito = productos);
    console.log(this.elementosCarrito);
  }

  /*
  onDeleteCarrito(id) {
    var listItems = document.getElementById(id);
    var contenido = listItems.innerText;
    listItems.innerText = "";
    listItems.remove();
    this.carritoService.deleteProductoCarrito(contenido.split("||")[0]).subscribe();
  }
  */
}
