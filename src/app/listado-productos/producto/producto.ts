import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {

  constructor(
    public description: String, 
    public precio: Number
  ){}
  // Muy buenas

}
