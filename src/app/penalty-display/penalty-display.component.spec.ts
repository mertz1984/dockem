import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyDisplayComponent } from './penalty-display.component';

describe('PenaltyDisplayComponent', () => {
  let component: PenaltyDisplayComponent;
  let fixture: ComponentFixture<PenaltyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaltyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
