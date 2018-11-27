import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Producto } from '../compartido/producto';
import { ProductoService } from '../services/producto.service';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { PRODUCTOS } from '../compartido/productos';
import { baseURL } from '../compartido/baseurl';
import { Observable, of } from 'rxjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';
import { By } from '@angular/platform-browser';
 import { DebugElement } from '@angular/core';


describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(async(() => { let productoServiceReplica = {
    getProductos: function (): Observable<Producto[]> {
      return of(PRODUCTOS);
    }
  };
  TestBed.configureTestingModule({
    imports: [BrowserAnimationsModule, FlexLayoutModule,
      MatListModule, MatGridListModule, MatCardModule,
      MatButtonModule, MatFormFieldModule, MatInputModule,
      MatCheckboxModule, FormsModule, MatSelectModule,
      MatSlideToggleModule, ReactiveFormsModule, MatSliderModule,
      MatProgressSpinnerModule, MatDialogModule, MatSliderModule,
      MatProgressSpinnerModule,
      FlexLayoutModule,
      RouterTestingModule.withRoutes([{ path: 'productos', component: ProductosComponent }])],
    declarations: [
      DetalleProductoComponent,
      ProductosComponent,
    ],
    providers: [
      { provide: ProductoService, useValue: productoServiceReplica },
      { provide: 'BaseURL', useValue: baseURL },
    ]
  }).compileComponents();

  let productoservice = TestBed.get(ProductoService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('productos creados deben ser 4', () => { expect(component.vProductos.length).toBe(4);
    expect(component.vProductos[1].nombre).toBe('Producto 2');
    expect(component.vProductos[2].oferta).toBeFalsy();
  });

  it('vProductos contiene un nombre de producto', () => { fixture.detectChanges();
    let de: DebugElement;
    let el: HTMLElement;
    de = fixture.debugElement.query(By.css('h1')); el = de.nativeElement;
    expect(el.textContent).toContain(PRODUCTOS[0].nombre.toUpperCase());
  });

});
