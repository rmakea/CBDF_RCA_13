import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  mensaje: string = 'Hola mundo';
  nombre: string = 'Raul Cardoso Acevedo';
  edad: number = 21;
  correo: string = 'cardosoraul153@gmail.com';
}
