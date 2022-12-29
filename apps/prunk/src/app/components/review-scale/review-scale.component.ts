import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector:
    'runk-review-scale[questionNumber][questionPrompt][charLimit][commentEnabled]',
  templateUrl: './review-scale.component.html',
  styleUrls: ['./review-scale.component.scss'],
})
export class ReviewScaleComponent implements OnInit {
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

  scaleValue = '';

  scaleOptions: string[] = [
    'Not Rated',
    'Met Some',
    'Met All',
    'Exceeded Some',
    'Exceeded Most',
  ];

  ngOnInit(): void {
    this.scaleValue = this.scaleOptions[0];
  }

  scaleChange() {
    this.scaleEmit.emit(this.scaleValue);
  }
}
