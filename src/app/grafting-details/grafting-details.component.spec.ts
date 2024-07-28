import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraftingDetailsComponent } from './grafting-details.component';

describe('GraftingDetailsComponent', () => {
  let component: GraftingDetailsComponent;
  let fixture: ComponentFixture<GraftingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraftingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraftingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
