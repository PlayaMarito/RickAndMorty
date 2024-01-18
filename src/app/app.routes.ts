import { Routes } from '@angular/router';
import { HolaComponent } from './hola/hola.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MundoComponent } from './mundo/mundo.component';

export const routes: Routes = [
    {
        path: '',
        component: MundoComponent
    }
];
