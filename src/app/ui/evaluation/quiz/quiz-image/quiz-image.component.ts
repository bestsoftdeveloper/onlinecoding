import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-image',
  templateUrl: './quiz-image.component.html',
  styleUrls: ['./quiz-image.component.scss']
})
export class QuizImageComponent implements OnInit {

  @Input() obj: Object;
  @Input() prop: string;
  @Input() answerType: number;

  constructor() { }

  ngOnInit() {
  }

}
