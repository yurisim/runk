import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonData } from '../../types';

@Component({
  selector: 'runk-person-data',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.scss'],
})
export class PersonDataComponent {
  raterTab = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleInitial: new FormControl(''),
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
  personData: PersonData = {
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
  };

  @Input()
  rateeFields = true;

  @Input()
  raterFields = true;

  @Output()
  emitPersonData = new EventEmitter<PersonData>();

  userInfo() {
    // this.personData = data;
    console.log(this.personData.firstName);
    this.emitPersonData.emit(this.personData);
  }
}
