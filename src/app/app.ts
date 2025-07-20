import { Component } from '@angular/core';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { Producto } from "./listado-productos/producto/producto";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ListadoProductos, Producto, MostrarMensaje, Replicador, Saludar]
})
export class App {
  titulo = 'Aprendiendo y reconociendo Angular';
}
