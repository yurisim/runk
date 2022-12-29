import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QA } from '../../types';

@Component({
  selector: 'runk-review-scale[questionNumber][QA][charLimit][commentEnabled]',
  templateUrl: './review-scale.component.html',
  styleUrls: ['./review-scale.component.scss'],
})
export class ReviewScaleComponent {
  @Input()
  questionNumber!: number;

  @Input()
  QA: QA = {
    question: '',
    answer: '',
  };

  @Input()
  initialComment = '';

  @Input()
  charLimit!: number;

  @Input()
  commentEnabled!: boolean;

  @Output()
  emitQA = new EventEmitter<QA>();

  @Output()
  emitComment = new EventEmitter<string>();

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
