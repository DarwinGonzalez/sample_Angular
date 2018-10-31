import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consulta, TipoContacto } from '../compartido/consulta';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  consultaForm: FormGroup;
  consulta: Consulta;
  tipoContacto = TipoContacto;

  constructor(private fb: FormBuilder) { this.crearFormulario(); }

  ngOnInit() {
  }

  crearFormulario() {
    this.consultaForm = this.fb.group({
      nombre: '',
      apellidos: '', telefono: 0,
      email: '',
      contactar: false, tipocontacto: 'None', mensaje: ''
    });
  }

  onSubmit() {
    this.consulta = this.consultaForm.value; 
    console.log(this.consulta);
    this.consultaForm.reset(); 
  1}
    
}
