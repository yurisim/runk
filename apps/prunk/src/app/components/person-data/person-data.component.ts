import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Grade, Person, Role } from '../../types';

@Component({
  selector: 'runk-person-data',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.scss'],
})
export class PersonDataComponent implements OnInit {
  // These are the grades that appear in the dropdown
  grades = Object.values(Grade);

  // This is the form group for the person data
  personTab = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    middleInitial: [''],
    lastName: ['', Validators.required],
    branch: ['', Validators.required],
    DAFSC: ['', Validators.required],
    grade: ['', Validators.required],
    org: ['', Validators.required],
    DODID: ['', Validators.required],
    dutyTitle: ['', Validators.required],
    signature: ['', Validators.required],
    role: [Role.RATEE, Validators.required],
  });

  // This is the initial person data, if it exists
  @Input()
  person: Person = new Person();

  @Output()
  personChange = new EventEmitter<Person>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personTab.patchValue(this.person);
  }

  userInfo() {
    this.personChange.emit(Object.assign(this.person, this.personTab.value));
  }
}
