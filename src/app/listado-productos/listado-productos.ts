import { Component } from '@angular/core';
import { Producto } from "./producto/producto";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
    productos: Producto[] = [
        new Producto('Pantalón', 130.0),
        new Producto('Camisa', 80.0),
        new Producto('Chaqueta', 50.0),
    ];

    descripcionInput: string = '';
    precioInput: number | null = null;

    agregarProducto(){
      // Validación simple para evitar productos sin descripción o con el precio a cero
      if(this.descripcionInput.trim() === '' || this.precioInput == null ||
        this.precioInput <= 0) {
          console.log('Debe ingregar una descripción y un precio válidos');
          return;
        }

        const producto = new Producto(this.descripcionInput, this.precioInput);
        this.productos.push(producto);

        // Limpia los campos de entrada después de agregar el producto
        this.descripcionInput = '';
        this.precioInput = 0;
    }
}
