import { Comentario } from './../compartido/comentario';
import { Component, OnInit } from '@angular/core';
import { Producto } from './../compartido/producto';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductoService } from '../services/producto.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})

export class DetalleProductoComponent implements OnInit {

  producto: Producto;
  
  comentarioForm: FormGroup;
  comentario: Comentario;

  constructor(private productoService: ProductoService, private route: ActivatedRoute,
    private location: Location, private fb: FormBuilder) { this.crearFormulario(); }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.producto = this.productoService.getProducto(id);
  }

  volver(): void { this.location.back(); }

  crearFormulario() {
    this.comentarioForm = this.fb.group({
      estrellas: 5,
      comentario: '', 
      autor: '',
      fecha: ''
    });
  }

  onSubmit() {
    this.comentario = this.comentarioForm.value; 
    console.log(this.comentario);
    this.comentarioForm.reset(); 
  }

}
