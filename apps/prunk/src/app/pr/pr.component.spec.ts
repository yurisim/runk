import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { PrComponent } from './pr.component';

describe('PrComponent', () => {
  let component: PrComponent;
  let fixture: ComponentFixture<PrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatCardModule],
      declarations: [PrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
