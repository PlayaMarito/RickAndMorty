import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mundo',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './mundo.component.html',
  styleUrl: './mundo.component.scss'
})
export class MundoComponent {}
export class ProgressSpinnerOverviewExample {}
