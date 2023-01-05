import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person, Role } from '../../types';
import {
  Grade,
} from '../../../@generated/generated';

@Component({
  selector: 'runk-person-data[role]',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.scss'],
})
export class PersonDataComponent {

  grades = Object.values(Grade).splice(0, 9);

  personTab = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleInitial: new FormControl<string | null>(''),
    lastName: new FormControl('', Validators.required),
    branch: new FormControl('', [Validators.required]),
    DAFSC: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    org: new FormControl('', Validators.required),
    SSN: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    dutyTitle: new FormControl('', Validators.required),
    signature: new FormControl('', Validators.required),
  });

  @Input()
  role: Role = 0;

  @Input()
  personData: Person = {
    firstName: '',
    lastName: '',
    middleInitial: '',
    branch: '',
    DAFSC: '',
    grade: '',
    org: '',
    SSN: '',
    dutyTitle: '',
    signature: '',
    role: this.role,
  };

  constructor() {
    this.personTab.get('firstName')?.setValue(this.personData.firstName);
    this.personTab.get('lastName')?.setValue(this.personData.lastName);
    this.personTab.get('middleInitial')?.setValue(this.personData.middleInitial);
    this.personTab.get('branch')?.setValue(this.personData.branch);
    this.personTab.get('DAFSC')?.setValue(this.personData.DAFSC);
    this.personTab.get('grade')?.setValue(this.personData.grade);
    this.personTab.get('org')?.setValue(this.personData.org);
    this.personTab.get('SSN')?.setValue(this.personData.SSN);
    this.personTab.get('dutyTitle')?.setValue(this.personData.dutyTitle);
    this.personTab.get('signature')?.setValue(this.personData.signature);
    console.log(this.grades);
  }

  @Input()
  rateeFields = true;

  @Input()
  raterFields = true;

  @Output()
  emitPersonData = new EventEmitter<Person>();

  userInfo() {
    // this.personData = data;
    console.log(this.personData.firstName);
    this.emitPersonData.emit(this.personData);
  }
}
