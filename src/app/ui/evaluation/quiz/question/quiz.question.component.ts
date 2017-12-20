import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IQuestion} from "../facade/IQuestion";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz.question.component.html',
  styleUrls: ['./quiz.question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input()  question: IQuestion = null;
  @Output() onMessageFromQuestionControl: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.onMessageFromQuestionControl.emit({a:5});
  }

  onSelectionChange(entry)
  {

  }

}
