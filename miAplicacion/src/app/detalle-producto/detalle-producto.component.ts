import { Component, OnInit, Input } from '@angular/core';
import { Producto } from './../compartido/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})

export class DetalleProductoComponent implements OnInit {
  
  @Input() producto:Producto;

  constructor() { }

  ngOnInit() {
  }

}
