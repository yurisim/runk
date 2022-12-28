import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector:
    'runk-review-scale[questionNumber][questionPrompt][charLimit][commentEnabled]',
  templateUrl: './review-scale.component.html',
  styleUrls: ['./review-scale.component.scss'],
})
export class ReviewScaleComponent {
  @Input()
  questionNumber!: number;

  @Input()
  questionPrompt!: string;

  @Input()
  charLimit!: number;

  @Input()
  commentEnabled!: boolean;

  @Output()
  scaleEmit = new EventEmitter<string>();

  scaleOptions: string[] = [
    'Not Rated',
    'Met Some',
    'Met All',
    'Exceeded Some',
    'Exceeded Most',
  ];

  scaleChange(option: string) {
    this.scaleEmit.emit(option);
  }
}
