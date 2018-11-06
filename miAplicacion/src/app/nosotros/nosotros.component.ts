import { Component, OnInit } from '@angular/core';

import { EmpleadoService } from '../services/empleado.service';

import { Empleado } from '../compartido/empleado';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  vEmpleados: Empleado[];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe(empleados => this.vEmpleados = empleados);
  }

}
