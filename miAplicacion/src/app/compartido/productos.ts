
import { Producto } from './producto';

export const PRODUCTOS: Producto[] = [
{
  id: 1,
  nombre: 'Producto 1',
  precio: 300,
  imagen: '/assets/images/movil1.jpg',
  comentarios: [
    {
      estrellas: 5,
      comentario: "Producto funciona perfectamente, envío perfecto",
      autor: "Juan García",
      fecha: "2017-10-16T12:32:23.126094Z"
    },
    {
      estrellas: 4,
      comentario: "Producto correcto, envío con retraso",
      autor: "Emilio Fernández",
      fecha: "2016-12-03T07:52:24.236094Z"
    }
  ],
  oferta: true
},
{
  id: 2,
  nombre: 'Producto 2',
  precio: 400,
  imagen: '/assets/images/movil2.jpg',
  comentarios: [
    {
      estrellas: 4,
      comentario: "Producto funciona perfectamente, envío perfecto",
      autor: "Pedro García",
      fecha: "2017-10-16T12:32:23.126094Z"
    },
    {
      estrellas: 3,
      comentario: "Producto correcto, envío con retraso",
      autor: "Lucas Fernández",
      fecha: "2016-12-03T07:52:24.236094Z"
    }
  ],
  oferta: true
},
{
  id: 3,
  nombre: 'Producto 3',
  precio: 500,
  imagen: '/assets/images/movil3.jpg',
  comentarios: [
    {
      estrellas: 5,
      comentario: "Producto funciona perfectamente, envío perfecto",
      autor: "Lara García",
      fecha: "2017-10-16T12:32:23.126094Z"
    },
    {
      estrellas: 3,
      comentario: "Producto correcto, envío con retraso",
      autor: "Silvia Fernández",
      fecha: "2016-12-03T07:52:24.236094Z"
    }
  ],
  oferta: false
},
{
  id: 4,
  nombre: 'Producto 4',
  precio: 600,
  imagen: '/assets/images/movil4.jpg',
  comentarios: [
    {
      estrellas: 5,
      comentario: "Producto funciona perfectamente, envío perfecto",
      autor: "Teresa García",
      fecha: "2017-10-16T12:32:23.126094Z"
    },
    {
      estrellas: 5,
      comentario: "Producto correcto",
      autor: "Joan Puigdemont",
      fecha: "2016-12-03T07:52:24.236094Z"
    }
  ],
  oferta: false
}
];