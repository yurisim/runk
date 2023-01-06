import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Grade, Person, Role } from '../../types';

@Component({
  selector: 'runk-person-data[role]',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.scss'],
})
export class PersonDataComponent {
  grades = Object.values(Grade);

  personTab = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleInitial: new FormControl<string | null>(''),
    lastName: new FormControl('', Validators.required),
    branch: new FormControl('', [Validators.required]),
    DAFSC: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    org: new FormControl('', Validators.required),
    DODID: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    dutyTitle: new FormControl('', Validators.required),
    signature: new FormControl('', Validators.required),
  });

  @Input()
  role: Role = 0;

  @Input()
  person: Person = {
    firstName: '',
    lastName: '',
    middleInitial: '',
    branch: '',
    DAFSC: '',
    grade: Grade.E1,
    org: '',
    DODID: '',
    dutyTitle: '',
    signature: '',
    role: this.role,
  };

  constructor() {
    this.setPerson();
  }

  @Input()
  rateeFields = true;

  @Input()
  raterFields = true;

  @Output()
  emitPerson = new EventEmitter<Person>();

  setPerson() {
    this.person.firstName = String(this.personTab.get('firstName')?.value);
    this.person.middleInitial = String(
      this.personTab.get('middleInitial')?.value
    );
    this.person.lastName = String(this.personTab.get('lastName')?.value);
    this.person.branch = String(this.personTab.get('branch')?.value);
    this.person.DAFSC = String(this.personTab.get('DAFSC')?.value);
    this.person.grade = this.personTab.get('grade')?.value as Grade;
    this.person.org = String(this.personTab.get('org')?.value);
    this.person.DODID = String(this.personTab.get('DODID')?.value);
    this.person.dutyTitle = String(this.personTab.get('dutyTitle')?.value);
    this.person.signature = String(this.personTab.get('signature')?.value);
    this.person.role = this.role;
  }

  userInfo() {
    this.setPerson();

    this.emitPerson.emit(this.person);
  }
}
