import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
   
 
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}

