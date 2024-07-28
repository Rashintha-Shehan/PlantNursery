import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chemicals',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './chemicals.component.html',
  styleUrl: './chemicals.component.css'
})
export class ChemicalsComponent {

}
