import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReportsComponent } from './daily-reports.component';

describe('DailyReportsComponent', () => {
  let component: DailyReportsComponent;
  let fixture: ComponentFixture<DailyReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
