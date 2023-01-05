import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { PersonDataComponent } from './person-data.component';

describe('PersonDataComponent', () => {
  let component: PersonDataComponent;
  let fixture: ComponentFixture<PersonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule],
      declarations: [PersonDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
