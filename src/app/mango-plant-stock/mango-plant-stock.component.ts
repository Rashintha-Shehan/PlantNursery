import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mango-plant-stock',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mango-plant-stock.component.html',
  styleUrls: ['./mango-plant-stock.component.css']
})
export class MangoPlantStockComponent {
  mangoPlants = [
    { name: 'Alphonso', quantity: 50, price: 15 },
    { name: 'Kesar', quantity: 30, price: 12 }
  ];

  newPlant = { name: '', quantity: 0, price: 0 };

  addPlant() {
    if (this.newPlant.name && this.newPlant.quantity > 0 && this.newPlant.price > 0) {
      this.mangoPlants.push({ ...this.newPlant });
      this.newPlant = { name: '', quantity: 0, price: 0 };
    }
  }
}
