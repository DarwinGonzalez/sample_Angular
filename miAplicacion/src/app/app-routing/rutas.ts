import { Routes } from '@angular/router';

import { ProductosComponent } from '../productos/productos.component';
import { InicioComponent } from '../inicio/inicio.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';


export const rutas: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent }, 
    { path: 'nosotros', component: NosotrosComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'detalleProducto/:id', component: DetalleProductoComponent }
];