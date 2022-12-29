import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QA } from '../types';

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
    daysNonRated: [0, Validators.maxLength(3)],
    daysRated: [0, Validators.required],
    dutyTitle: ['', Validators.required],
    reasonReport: ['', Validators.required],
    keyDuties: ['', [Validators.required, Validators.maxLength(480)]],
  });
  performanceTab = this.fb.group({});
  raterTab = this.fb.group({});
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  QAs: QA[] = [
    {
      question: 'Performance in Primary Duties/Training Requirements',
      answer: 'Not Rated',
    },
    {
      question: 'Followership/Leadership',
      answer: 'Not Rated',
    },
    {
      question: 'Whole Airman/Guardian Concept',
      answer: 'Not Rated',
    },
    {
      question: 'Overall Performance Assessment',
      answer: 'Not Rated',
    },
  ];

  charLimits = [675, 225, 225, 0];

  commentsEnabled = [true, true, true, false];

  comments = ['', '', '', ''];

  setQA(emittedQA: QA) {
    const index = this.QAs.findIndex(
      (qa: QA) => qa.question === emittedQA.question
    );
    this.QAs[index] = emittedQA;
  }

  setComment(emittedValue: string, index: number) {
    this.comments[index] = emittedValue
  }
}
