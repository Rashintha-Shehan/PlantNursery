import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grafting-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './grafting-details.component.html',
  styleUrl: './grafting-details.component.css'
})
export class GraftingDetailsComponent {

}
