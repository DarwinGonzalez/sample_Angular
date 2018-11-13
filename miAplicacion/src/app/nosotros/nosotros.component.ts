import { Component, OnInit, Inject  } from '@angular/core';

import { EmpleadoService } from '../services/empleado.service';

import { Empleado } from '../compartido/empleado';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  vEmpleados: Empleado[];
  errorMensaje: string;

  constructor(private empleadoService: EmpleadoService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe(empleados => this.vEmpleados = empleados, errorMensaje => this.errorMensaje = <any>errorMensaje);
  }

}
