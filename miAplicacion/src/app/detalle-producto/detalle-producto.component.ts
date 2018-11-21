import { Comentario } from './../compartido/comentario';
import { Component, OnInit, Inject } from '@angular/core';
import { Producto } from './../compartido/producto';

import { Params, ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

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
  productorest = null;

  erroresForm = {
    'autor': '',

    'comentario': ''
  };

  mensajesError = {

    'autor': {
      'required': 'El campo autor es obligatorio.',

      'minlength': 'El camp autor debe tener una longitud mÌnima de 2 caracteres.'
    },

    'comentario': {
      'required': 'El campo autor es obligatorio.'
    }
  };

  constructor(private productoService: ProductoService, private route: ActivatedRoute,
    private location: Location, private fb: FormBuilder, private datapipe: DatePipe, @Inject('BaseURL') private BaseURL) { this.crearFormulario(); }

  ngOnInit() {
    this.productoService.getProductosIds().subscribe(productoIds => this.productoIds = productoIds);

    this.route.params.pipe(switchMap((params: Params) => this.productoService.getProducto(+params['id']))).subscribe(producto => { this.producto = producto; this.productorest = producto; this.setPrevPost(producto.id); });
  }

  volver(): void { this.location.back(); }

  crearFormulario() {
    const now = new Date();

    this.comentarioForm = this.fb.group({
      estrellas: 5,
      comentario: ['', [Validators.required]],
      autor: ['', [Validators.required, Validators.minLength(2)]],
      fecha: now.toISOString()
    });

    this.comentarioForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
  }

  onSubmit() {
    this.comentario = this.comentarioForm.value;
    console.log(this.comentario);
    this.comentarioForm.reset();
    //this.producto.comentarios.push(this.comentario);
    this.productorest.comentarios.push(this.comentario);
    this.productoService.setProducto(this.productorest)
      .subscribe(producto => { this.producto = producto });
  }

  setPrevPost(productoId: number) {
    const index = this.productoIds.indexOf(productoId);
    this.prev = this.productoIds[(this.productoIds.length + index - 1) % this.productoIds.length];
    this.post = this.productoIds[(this.productoIds.length + index + 1) % this.productoIds.length];
  }

  onCambioValor(data?: any) {
    if (!this.comentarioForm) { return; } const form = this.comentarioForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesError[field]; for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  onComprar(){
    console.log("Ha hecho click en comprar, se ha añadido el producto a el carrito");
  }

}
