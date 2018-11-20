import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  usuario = { nombre: '', password: '', nocerrar: false };
  usuarios = [];
  db = null;

  constructor() {
    this.abrirBD();
  }

  autenticar(usuario): boolean { //Comprobar si es correcto
    if (this.comprobarUsuario(usuario)) {
      if (usuario.nocerrar) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
      }
      else {
        sessionStorage.setItem("usuario", JSON.stringify(usuario));
      }
      return true;
    }
    else {
      return false;
    }
  }

  cerrarSesion(): Observable<any> {
    this.usuario = { nombre: '', password: '', nocerrar: false };
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("usuario");
    return of(this.usuario);
  }

  getLogin(): Observable<any> {
    let usu = JSON.parse(localStorage.getItem("usuario"));
    if (usu) {
      this.usuario = usu;
    }
    return of(this.usuario);
  }

  abrirBD() { //Se abre la BD
    var request = window.indexedDB.open("miBD", 1); var db = this;
    var db2 = null;
    //En caso de error
    request.onerror = function (event) {
      console.log("Error al abrir la base de datos", event);
    }
    //En caso de éxito
    request.onsuccess = function (event) {
      console.log("Base de datos abierta correctamente");
      db.db = request.result;
      console.log(db.db);
      db.obtenerUsuarios().subscribe(usuarios => db.usuarios = usuarios);
    }
    request.onupgradeneeded = function (event) {
      console.log("Creando base de datos"); //Crear almacén usuarios
      db2 = request.result; if (request != null) {
        var objectStore = db2.createObjectStore("usuarios", { keyPath: "nombre" }); //Definimos un campo o índice para guardar el login y el password
        objectStore.transaction.oncomplete = function (event) {
          console.log("almacén creado correctamente");
          //Aquí el almacén "usuarios" ya ha esta creado y listo para ser usado
          //Introducimos usuario predefinidos
          var transaccion = db2.transaction(["usuarios"], "readwrite").objectStore("usuarios");
          var req = transaccion.add({ nombre: "aaa", password: "aaa" });
          transaccion.onsuccess = function (event) {
            console.log("Exito");
          };
        }
      }
    }
  }

  obtenerUsuarios(): Observable<any[]> {
    var usuarios = [];
    var self = this;
    //Obtenemos una referencia del Almacén usuarios
    //Se usa “readonly” dado que lo que buscamos es solo leer el contenido del mismo
    var itemObjectStore = self.db.transaction(["usuarios"], "readonly").objectStore("usuarios");
    //Con la referencia del almacén se abre un cursor para iterar sobre cada uno de los objetos usuario
    //que contiene el almacén y se agrega al array de elementos
    itemObjectStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result; if (cursor) {
        usuarios.push(cursor.value);
        cursor.continue();
      } else {
        //Aquí ya se ha acabado la iteración
        ;
      }
    };
    return of(usuarios);
  }

  comprobarUsuario(login): boolean {
    let encontrado = this.usuarios.find(usuario => ((usuario.nombre == login.nombre) && (usuario.password == login.password)));
    if (encontrado) {
      return true;
    } else {
      return false;
    }
  }

}
