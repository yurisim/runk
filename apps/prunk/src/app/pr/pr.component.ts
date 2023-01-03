import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QA } from '../types';
import { DateTime } from 'luxon';
import { _isNumberValue } from '@angular/cdk/coercion';

@Component({
  selector: 'runk-pr',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.scss'],
})
export class PrComponent {
  constructor() {
    //
  }

  maxDaysNonRated = 0;

  // Q: regex for 3 digits
  // A:

  rateeTab = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleInitial: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    SSN: new FormControl('', Validators.required),
    DAFSC: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    org: new FormControl('', Validators.required),
    PAS: new FormControl('', Validators.required),
    FDID: new FormControl('', Validators.required),
    startDate: new FormControl<Date | null>(null, Validators.required),
    endDate: new FormControl<Date | null>(null, Validators.required),
    daysNonRated: new FormControl(0, [
      Validators.maxLength(this.maxDaysNonRated.toString().length),
      Validators.max(this.maxDaysNonRated),
      Validators.min(0),
      Validators.pattern('[0-9]{1,3}'),
    ]),
    daysRated: new FormControl(0),
    dutyTitle: new FormControl('', Validators.required),
    reasonReport: new FormControl('', Validators.required),
    keyDuties: new FormControl('', [
      Validators.required,
      Validators.maxLength(480),
    ]),
  });

  performanceTab = new FormGroup({});

  raterTab = new FormGroup({});

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

  charLimits = [720, 240, 240, 0];

  commentsEnabled = [true, true, true, false];

  comments = ['', '', '', ''];

  setQA(emittedQA: QA): void {
    const index = this.QAs.findIndex(
      (qa: QA) => qa.question === emittedQA.question
    );

    this.QAs[index] = emittedQA;
  }

  setComment(emittedValue: string, index: number) {
    this.comments[index] = emittedValue;
  }

  calculateDaysOfRating() {
    const startDate = this.rateeTab.get('startDate')?.value;
    const endDate = this.rateeTab.get('endDate')?.value;

    if (startDate && endDate) {
      const start = DateTime.fromJSDate(startDate);
      const end = DateTime.fromJSDate(endDate);

      // The component should prevent this from being negative
      const interval = end.diff(start, ['days']).days;

      console.log(interval);

      this.maxDaysNonRated = interval;

      let daysNonRated = Number(this.rateeTab.get('daysNonRated')?.value) ?? 0;

      daysNonRated =
        daysNonRated > this.maxDaysNonRated
          ? this.maxDaysNonRated
          : daysNonRated;

      // validate daysNonRated
      this.rateeTab.get('daysRated')?.setValue(interval - daysNonRated);

      console.log(this.rateeTab.get('daysNonRated')?.errors);
    }
  }
}
