import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hola',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hola.component.html',
  styleUrl: './hola.component.scss'
})
export class HolaComponent {
  nombre = '';
  apellido = '';
  nombres = ['Carlos','Ramón','Mario']

  miMetodo () {

  }

}
