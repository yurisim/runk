import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewScaleComponent } from './review-scale.component';

describe('ReviewScaleComponent', () => {
  let component: ReviewScaleComponent;
  let fixture: ComponentFixture<ReviewScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewScaleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
