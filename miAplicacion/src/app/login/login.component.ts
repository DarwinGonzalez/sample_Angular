import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = { nombre: '', password: '', nocerrar: false };

  constructor(private autenticarService: AutenticarService, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.autenticarService.autenticar(this.usuario)) {
      this.dialogRef.close(this.usuario);
    } else {
      let usuario = { nombre: '', password: '', nocerrar: false };
      this.dialogRef.close(usuario);
    }
  }
}
