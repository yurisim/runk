import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonDataComponent } from '../components/person-data/person-data.component';
import { ReviewScaleComponent } from '../components/review-scale/review-scale.component';
import { MaterialModule } from '../material.module';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { PrComponent } from './pr.component';

describe('PrComponent', () => {
  let component: PrComponent;
  let fixture: ComponentFixture<PrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule, ApolloTestingModule],
      declarations: [PrComponent, PersonDataComponent, ReviewScaleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
