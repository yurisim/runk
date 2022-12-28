import { Component } from '@angular/core';

@Component({
  selector: 'runk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prunk';
  reviewValue = 'HELLO';

  questions = [
    'Performance in Primary Duties/Training Requirements',
    'Followership/Leadership',
    'Whole Airman/Guardian Concept',
    'Overall Performance Assessment',
  ];

  charLimits = [700, 480, 480, 0];

  commentsEnabled = [true, true, true, false];

  setEmitValue(emittedValue: string) {
    this.reviewValue = emittedValue;
  }
}
