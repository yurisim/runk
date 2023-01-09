import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person, QA, Role } from '../types';
import { DateTime } from 'luxon';
import { PrService } from './pr.service';

import {
  ReportReason,
  ResponseStatus,
  UpsertOrgPrMutationVariables,
  UpsertPersonPrMutationVariables,
  UpsertResponsePrMutationVariables,
} from '../../@generated/generated';
@Component({
  selector: 'runk-pr',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.scss'],
})
export class PrComponent implements OnInit {
  constructor(private prService: PrService) {
    //
  }

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
      question: 'Performance',
      answer: 'Not Rated',
      charLimit: 720,
      comment: '',
    },
    {
      question: 'Followership/Leadership',
      answer: 'Not Rated',
      charLimit: 240,
      comment: '',
    },
    {
      question: 'Whole Airman',
      answer: 'Not Rated',
      charLimit: 240,
      comment: '',
    },
    {
      question: 'Overall',
      answer: 'Not Rated',
      charLimit: 0,
    },
  ];

  people: Person[] = [];

  ngOnInit(): void {
    const ratee = new Person();
    ratee.role = Role.RATEE;

    const rater = new Person();
    rater.role = Role.RATER;

    const additional = new Person();
    additional.role = Role.ADDITIONAL;

    const cc = new Person();
    cc.role = Role.CC;

    this.people = [ratee, rater, additional, cc];
  }

  upsertRatee() {
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

    this.prService.upsertPerson(personData);
  }

  upsertOrg(person: Person) {
    const orgData: UpsertOrgPrMutationVariables = {
      create: {
        name: person.org,
        PAS: String(this.rateeTab.get('PAS')?.value),
      },
      update: {},
      where: {
        name: person.org,
      },
    };

    this.prService.upsertOrg(orgData);
  }

  upsertResponse() {
    const guid = Math.random() + DateTime.now().toString();

    console.log(guid);

    const responseData: UpsertResponsePrMutationVariables = {
      create: {
        answers: {
          create: [
            {
              value: this.people[0].dutyTitle,
              question: {
                connect: {
                  value: 'Duty Title',
                },
              },
            },
            {
              value: this.people[0].DAFSC,
              question: {
                connect: {
                  value: 'DAFSC',
                },
              },
            },
            {
              value: this.people[0].grade,
              question: {
                connect: {
                  value: 'Grade',
                },
              },
            },
            {
              value: String(this.rateeTab.get('FDID')?.value),
              question: {
                connect: {
                  value: 'FDID',
                },
              },
            },
            {
              value: String(this.rateeTab.get('keyDuties')?.value),
              question: {
                connect: {
                  value: 'Key Duties/Responsibilities',
                },
              },
            },
            {
              question: {
                connect: {
                  value: 'Performance Rating',
                },
              },
              value: this.QAs[0].answer,
            },
            {
              question: {
                connect: {
                  value: 'Performance Comment',
                },
              },
              value: String(this.QAs[0].comment),
            },
            {
              question: {
                connect: {
                  value: 'Followership/Leadership Rating',
                },
              },
              value: this.QAs[1].answer,
            },
            {
              question: {
                connect: {
                  value: 'Followership/Leadership Comment',
                },
              },
              value: String(this.QAs[1].comment),
            },
            {
              question: {
                connect: {
                  value: 'Whole Airman Rating',
                },
              },
              value: this.QAs[2].answer,
            },
            {
              question: {
                connect: {
                  value: 'Whole Airman Comment',
                },
              },
              value: String(this.QAs[2].comment),
            },
            {
              question: {
                connect: {
                  value: 'Overall Rating',
                },
              },
              value: this.QAs[3].answer,
            },
          ],
        },
        id: guid,
        begin: this.rateeTab.get('startDate')?.value,
        end: this.rateeTab.get('endDate')?.value,
        form: {
          connect: {
            version: 1,
          },
        },
        nonRatedDays: Number(this.rateeTab.get('daysNonRated')?.value),
        ratee: {
          connect: {
            DODID: Number(this.people[0].DODID),
          },
        },
        reason: String(this.rateeTab.get('reason')?.value) as ReportReason,
        status: ResponseStatus.InProgress,
      },
      update: {},
      where: {
        id: guid,
      },
    };

    this.prService.upsertResponse(responseData);
  }

  submitRatee() {
    this.upsertRatee();
    this.upsertOrg(this.people[0]);
  }

  setQA(emittedQA: QA): void {
    const index = this.QAs.findIndex(
      (qa: QA) => qa.question === emittedQA.question
    );

    this.QAs[index] = emittedQA;
  }

  setComment(emittedValue: string, index: number) {
    this.QAs[index].comment = emittedValue;
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
