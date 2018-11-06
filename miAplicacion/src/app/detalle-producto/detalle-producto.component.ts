import { Comentario } from './../compartido/comentario';
import { Component, OnInit } from '@angular/core';
import { Producto } from './../compartido/producto';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductoService } from '../services/producto.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})

export class DetalleProductoComponent implements OnInit {

  producto: Producto;

  comentarioForm: FormGroup;
  comentario: Comentario;

  productoIds: number[];
  prev: number;
  post: number;

  constructor(private productoService: ProductoService, private route: ActivatedRoute,
    private location: Location, private fb: FormBuilder) { this.crearFormulario(); }

  ngOnInit() {
    this.productoService.getProductosIds().subscribe(productoIds => this.productoIds = productoIds);

    this.route.params.pipe(switchMap((params: Params) => this.productoService.getProducto(+params['id']))).subscribe(producto => { this.producto = producto; this.setPrevPost(producto.id); });
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

  setPrevPost(productoId: number) {
    const index = this.productoIds.indexOf(productoId);
    this.prev = this.productoIds[(this.productoIds.length + index - 1)%this.productoIds.length];
    this.post = this.productoIds[(this.productoIds.length + index + 1)%this.productoIds.length];
  }

}
