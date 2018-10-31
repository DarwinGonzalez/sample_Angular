import { Comentario } from './comentario';

export class Producto {
    id: number; 
    nombre: string; 
    precio: number; 
    imagen: string;
    comentarios: Comentario[];
    oferta: boolean;
}