import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person, QA, Role } from '../types';
import { DateTime } from 'luxon';
import { PrService } from './pr.service';

import {
  ReportReason,
  UpsertPersonPrMutationVariables,
} from '../../@generated/generated';
@Component({
  selector: 'runk-pr',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.scss'],
})
export class PrComponent {
  constructor(private prService: PrService) {
    //
  }

  roles = Role;

  maxDaysNonRated = 0;

  //TODO: find better way to do splice later
  reportReasons = Object.values(ReportReason).splice(0, 7);

  displayReasons = [
    'Annual',
    'Directed By Commander',
    'Biennial',
    'Directed By HAF',
    'CRO',
    'Initial',
    'Directed By NGB',
  ];

  rateeTab = new FormGroup({
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
    reasonReport: new FormControl('', Validators.required),
    keyDuties: new FormControl('', [
      Validators.required,
      Validators.maxLength(480),
    ]),
  });

  performanceTab = new FormGroup({});

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

  people: Person[] = [];

  charLimits = [720, 240, 240, 0];

  commentsEnabled = [true, true, true, false];

  comments = ['', '', '', ''];

  setPerson(emittedPerson: Person): void {
    const index = this.people.findIndex(
      (foundPerson: Person) => foundPerson.role === emittedPerson.role
    );

    if (index === -1) {
      this.people.push(emittedPerson);
    } else {
      this.people[index] = emittedPerson;
    }
  }

  //*

  submitRatee() {
    const ratee = this.people.find((person) => person.role === 0);

    if (!ratee) return;

    const personData: UpsertPersonPrMutationVariables = {
      create: {
        DODID: Number(ratee.DODID),
        firstName: ratee.firstName,
        lastName: ratee.lastName,
        middleInitial: ratee.middleInitial,
      },
      update: {},
      where: {
        DODID: Number(ratee.DODID),
      },
    };

    console.log(personData)

    this.prService.submitPerson(personData);
  }

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

      this.maxDaysNonRated = interval;

      let daysNonRated = Number(this.rateeTab.get('daysNonRated')?.value) ?? 0;

      daysNonRated =
        daysNonRated > this.maxDaysNonRated
          ? this.maxDaysNonRated
          : daysNonRated;

      // validate daysNonRated
      this.rateeTab.get('daysRated')?.setValue(interval - daysNonRated);
    }
  }
}
