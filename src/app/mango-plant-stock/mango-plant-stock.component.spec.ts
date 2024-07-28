import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangoPlantStockComponent } from './mango-plant-stock.component';

describe('MangoPlantStockComponent', () => {
  let component: MangoPlantStockComponent;
  let fixture: ComponentFixture<MangoPlantStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangoPlantStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangoPlantStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
