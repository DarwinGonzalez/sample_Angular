import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Consulta } from '../compartido/consulta';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient, private procesaHttpmsjService: ProcesaHTTPMsjService) { }

  enviarConsulta(consulta): Observable<Consulta> {
    return this.http.post<Consulta>(baseURL + 'consultas/', consulta, httpOptions)
      .pipe(catchError(this.procesaHttpmsjService.gestionError));
  }
}
