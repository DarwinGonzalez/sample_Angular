import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductoService } from './services/producto.service';
import { EmpleadoService } from './services/empleado.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import 'hammerjs';

import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LoginComponent } from './login/login.component';
import { AtencionComponent } from './atencion/atencion.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './compartido/baseurl';
import { ProcesaHTTPMsjService } from './services/procesa-httpmsj.service';
import { ChatService } from './services/chat.service';
import { AutenticarService } from './services/autenticar.service';
import { ResaltarDirective } from './directives/resaltar.directive';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleProductoComponent,
    CabeceraComponent,
    PieComponent,
    NosotrosComponent,
    ContactoComponent,
    InicioComponent,
    EmpleadosComponent,
    LoginComponent,
    AtencionComponent,
    CarritoCompraComponent,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule ,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [ProductoService,EmpleadoService, DatePipe, {provide: 'BaseURL', useValue: baseURL}, ProcesaHTTPMsjService, ChatService, AutenticarService],
  entryComponents: [ LoginComponent, CarritoCompraComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
