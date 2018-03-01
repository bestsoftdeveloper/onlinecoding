import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IQuestion} from "../facade/IQuestion";
import {isUndefined} from "util";
import {QuestionSettings} from "../question-settings";
import {canChangeSeconds} from "ngx-bootstrap/timepicker/timepicker-controls.util";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz.question.component.html',
  styleUrls: ['./quiz.question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input()  question: any = null;
  @Output() onMessageFromQuestionControl: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

   QuestionType: any = {
    Text:1,
    Images:2,
    Code:3
  };

  AnswerType: any = {
    SingleAnswer:1,
    MultipleAnswers:2
  };

  ngOnInit() {

  }

  panelClick($event){
    $event.stopPropagation();

    let label = $($event.currentTarget).find('.qlabel');
    label.click();
    debugger;
  }

  onSelectionChange(entry)
  {

  }

  isSendAnswerDisabled() {
    if(this.question.isDisabled)
    {
      return true;
    }
    let isDisabled = true;
    switch (this.question.answerType.type) {
      case this.AnswerType.SingleAnswer: {
        isDisabled = this.question.rdValue == undefined;
        break;
      }
      case this.AnswerType.MultipleAswers: {
        isDisabled = this.question.userAnswer != null;
        break;
      }
    }

    return isDisabled;
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
    this.question.userAnswer = [];
    this.onMessageFromQuestionControl.emit({command:'sendAnswer'});
  }

  sendSurveyAnswersToServer(){
    this.sendAnswerForQuestion();

    this.onMessageFromQuestionControl.emit({command:'sendReport'});
  }

}
