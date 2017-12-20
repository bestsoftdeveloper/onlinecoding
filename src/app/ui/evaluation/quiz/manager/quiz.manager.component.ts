import { Component, OnInit } from '@angular/core';
import {IQuestion} from "../facade/IQuestion";

@Component({
  selector: 'app-quiz-manager',
  templateUrl: './quiz.manager.component.html',
  styleUrls: ['./quiz.manager.component.scss']
})
export class QuizManagerComponent implements OnInit {

  private QuestionType =
  {
    SingleAnswer:0,
    MultipleAswers:1
  };

  private questions = {
    list:[{
      question:"hello",
      time:0,
      answers:[
        {
          id:1,
          answer:"1asda",
        },
        {
          id:2,
          answer:"1asasda",
        },
        {
          id:3,
          answer:"1asasfafda",
        },
        {
          id:4,
          answer:"1asdafa",
        }
      ],
      qtype: this.QuestionType.SingleAnswer
    },
      {
        question:"hello1",
        time:0,
        answers:[
          {
            id:1,
            answer:"1asda1",
          },
          {
            id:2,
            answer:"1asasda1",
          },
          {
            id:3,
            answer:"1asasfafda1",
          },
          {
            id:4,
            answer:"1asdafa1",
          }
        ],
        qtype: this.QuestionType.SingleAnswer
      }]
  };

  public question:IQuestion = null;

  questionIndex = 0;

  constructor() {
    this.question = this.questions.list[this.questionIndex];
  }


  next()
  {
    debugger;
    this.questionIndex++;
    this.question = this.questions.list[this.questionIndex];
  }

  prev()
  {
    debugger;
    this.questionIndex--;
    this.question = this.questions.list[this.questionIndex];
  }


  public onMessageFromQuestionControl(date: any):void {
    console.log('Picked date: ', date);
  }

  ngOnInit() {


  }

}
