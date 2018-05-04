import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IQuestion} from "../facade/IQuestion";
import {isUndefined} from "util";
import {canChangeSeconds} from "ngx-bootstrap/timepicker/timepicker-controls.util";

import {IAnswerType, IQuestionType} from "../../../../facade/quizFacade";
import QuizFacade from "../../../../facade/quizFacade";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz.question.component.html',
  styleUrls: ['./quiz.question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input()  question: any = null;
  @Output() onMessageFromQuestionControl: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  public QuestionTypeLocal : IQuestionType  = QuizFacade.QuestionType;
  public AnswerTypeLocal: IAnswerType = QuizFacade.AnswerType;

  ngOnInit() {

  }

  panelClick($event){
    $event.stopPropagation();

    // let label = $($event.currentTarget).find('.qlabel');
    // label.click();
    // debugger;
  }

  onSelectionChange(entry)
  {

  }


  isAnswerSelected() {
    // aici
    if(this.question.isAnswerSent){
      return false;
    }

    let isselected = false;


    switch (this.question.answerType.type) {
      case QuizFacade.AnswerType.SingleAnswer: {
        isselected = this.question.rdValue != undefined;
        break;
      }
      case QuizFacade.AnswerType.MultipleAnswers: {
        var isAtLeastOneAnswerSelected = this.question.answers.find(it=>it.rdValue == true);
        isselected = isAtLeastOneAnswerSelected != null;
        break;
      }
    }


    return isselected;
  }

  tryGoNext()
  {
    this.onMessageFromQuestionControl.emit({command:'tryGoNext'});
  }
  canSendAnswer = false;

  sendAnswerButtonClass = '';

  chkChanged()
  {
    if(isUndefined(this.question.rdValue))
    {
      this.sendAnswerButtonClass = '';
    }
    const checkBoxe = this.question.answers.find(it=>it.rdValue != undefined);
    if(checkBoxe != undefined)
    {
      this.sendAnswerButtonClass = '';
    }
    this.canSendAnswer = true;
    this.sendAnswerButtonClass =  'btn-primary';
  }

  getSendAnswerButtonClases()
  {

  }
  sendAnswerForQuestion()
  {
    // this.question.userAnswer = [];
    this.onMessageFromQuestionControl.emit({command:'sendAnswer'});
  }

  sendSurveyAnswersToServer(){
    this.sendAnswerForQuestion();

    this.onMessageFromQuestionControl.emit({command:'sendReport'});
  }

}
