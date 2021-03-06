import { CarritoService } from './../services/carrito.service';
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { CarritoCompraComponent } from '../carrito-compra/carrito-compra.component';
import { HostListener } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  login = { nombre: '', password: '', nocerrar: false };

  constructor(public dialogo: MatDialog, @Inject('BaseURL') private BaseURL, private autenticarService: AutenticarService, private carritoService: CarritoService, private productoService: ProductoService) {
    this.autenticarService.getLogin().subscribe(login => this.login = login);
  }

  ngOnInit() {
  }

  abrirFormularioLogin() {
    let dialogo = this.dialogo.open(LoginComponent, { width: '500px', height: '450px' });
    dialogo.afterClosed().subscribe(result => this.login = result);
  }

  abrirCarrito() {
    this.dialogo.open( CarritoCompraComponent, {width: '500px', height: '450px'});
  }

  cerrarSesion() {
    this.autenticarService.cerrarSesion().subscribe(login => this.login = login);
     event.preventDefault();
  }

  @HostListener('window:storage', ['$event']) procesar(event) {
    this.autenticarService.getLogin().subscribe(login => this.login = login);
  }

}
