import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css'
})
export class MostrarMensaje {
  mensaje: string = '';
  tituloMostrarMensaje = 'Event Binding en Angular'

  mostrarMensaje(): void{
    this.mensaje = 'Hola, has realizado click en el botón Ver Mensaje!';
  }

  resetearMensaje(): void{
    // Reiniciamos el valor de la variable
    this.mensaje = '';
  }

}
