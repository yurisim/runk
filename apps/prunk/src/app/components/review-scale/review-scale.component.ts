import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { QA } from '../../types';

@Component({
  selector: 'runk-review-scale[questionNumber][QA]',
  templateUrl: './review-scale.component.html',
  styleUrls: ['./review-scale.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class ReviewScaleComponent {
  /**
   * The question number for this question
   * @memberof ReviewScaleComponent
   * @description This is used to determine the question number in the UI
   */
  @Input()
  questionNumber!: number;

  /**
   * The question and answer for this question
   * @memberof ReviewScaleComponent
   * @description This is used to determine the question and answer in the UI
   * @description This is also used to emit the question and answer to the parent component
   * @description This is also used to set the initial value of the question and answer in the UI
   */
  @Input()
  QA: QA = {
    question: '',
    answer: '',
  };

  /***
   * The initial comment for this question
   * @memberof ReviewScaleComponent
   * @description This is used to set the initial value of the comment in the UI
   * @description This is also used to emit the comment to the parent component
   */
  @Input()
  initialComment = '';

  /***
   * The character limit for the comment box
   * @memberof ReviewScaleComponent
   * @default 0
   * @description If 0, the comment box will not be displayed
   * @description If -1, the comment box will be displayed with no character limit
   * @description If > 0, the comment box will be displayed with a character limit
   */
  @Input()
  charLimit = 0;

  /***
   * Whether or not to enable the comment box for this question
   * @type {boolean}
   * @memberof ReviewScaleComponent
   */
  @Input()
  commentEnabled: boolean;

  /***
   * The event emitter for the question and answer
   * @memberof ReviewScaleComponent
   * @description This is used to emit the question and answer to the parent component
   */
  @Output()
  emitQA = new EventEmitter<QA>();

  /***
   * The event emitter for the comment
   * @memberof ReviewScaleComponent
   * @description This is used to emit the comment to the parent component
   */
  @Output()
  emitComment = new EventEmitter<string>();


  constructor() {
    this.commentEnabled = this.charLimit > 0 || this.charLimit === -1;
  }

  scaleOptions: string[] = [
    'Not Rated',
    'Met Some',
    'Met All',
    'Exceeded Some',
    'Exceeded Most',
  ];

  scaleChange(option: string) {
    this.QA.answer = option;

    this.emitQA.emit({
      question: this.QA.question,
      answer: this.QA.answer,
    });
  }

  commentChange(content: string) {
    this.initialComment = content;
    this.emitComment.emit(this.initialComment);
  }
}
