import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:4000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMensaje(mensaje) {
    console.log(mensaje);
    this.socket.emit('nuevo_mensaje', mensaje);
  }

  public getMensajes = () => {
    return Observable.create((observer) => {
      this.socket.on('nuevo_mensaje', (mensaje) => {
        observer.next(mensaje);
      });
    });
  }

}
