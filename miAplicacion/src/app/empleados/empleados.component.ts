import { Component, OnInit } from '@angular/core';

import { Empleado } from '../compartido/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  vEmpleados: Empleado[];
  empleadoSeleccionado;
  
  constructor() { }

  ngOnInit() {
  }

}
