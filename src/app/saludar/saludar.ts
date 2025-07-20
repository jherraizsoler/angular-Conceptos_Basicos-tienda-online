import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saludar.html',
  styleUrl: './saludar.css'
})
export class Saludar {
  textoTituloSaludar = 'Saludar con [(ngModel)]' 
  saludo = 'Saludo inicial soy Jorge Herraiz Soler en 2025 aprendiendo Angular'
}
