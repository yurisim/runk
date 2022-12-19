import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrComponent } from './pr.component';

describe('PrComponent', () => {
  let component: PrComponent;
  let fixture: ComponentFixture<PrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
