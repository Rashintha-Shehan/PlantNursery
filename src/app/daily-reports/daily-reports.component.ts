import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-daily-reports',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './daily-reports.component.html',
  styleUrl: './daily-reports.component.css'
})
export class DailyReportsComponent {

}
