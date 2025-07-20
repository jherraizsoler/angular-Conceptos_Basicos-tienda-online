import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  standalone: true,
  imports: [],
  templateUrl: './replicador.html',
  styleUrl: './replicador.css'
})
export class Replicador {
  tituloReplicador = 'Replicador mensaje escrito'

  texto: string = '';

  actualizarTexto(event: Event): void {
    const elementoInput = event.target as HTMLInputElement;

    this.texto = elementoInput.value;

  }


}
