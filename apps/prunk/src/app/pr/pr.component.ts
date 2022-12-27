import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'runk-pr',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.scss'],
})
export class PrComponent {
  constructor(private fb: FormBuilder) {}

  rateeTab = this.fb.group({
    firstName: ['', Validators.required],
    middleInitial: [''],
    lastName: ['', Validators.required],
    SSN: ['', Validators.required],
    DAFSC: ['', Validators.required],
    grade: ['', Validators.required],
    org: ['', Validators.required],
    PAS: ['', Validators.required],
    FDID: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    daysNonRated:[0, Validators.maxLength(3)],
    daysRated:[0, Validators.required],
    dutyTitle: ['', Validators.required],
    reasonReport:['', Validators.required],
    keyDuties: ['', [Validators.required, Validators.maxLength(480)]],

  });
  performanceTab = this.fb.group({});
  raterTab = this.fb.group({});
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
}
