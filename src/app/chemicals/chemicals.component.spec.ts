import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalsComponent } from './chemicals.component';

describe('ChemicalsComponent', () => {
  let component: ChemicalsComponent;
  let fixture: ComponentFixture<ChemicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
