import { Component, OnInit } from '@angular/core';
import {HttpWrapperService} from "../../../../services/http/httpService";
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-quiz.add',
  templateUrl: './quiz.add.component.html',
  styleUrls: ['./quiz.add.component.scss']
})
export class QuizAddComponent implements OnInit {

  constructor(private httpService: HttpWrapperService) { }

  question: any = {
    question:'ddd',
    answers:[
      {
        index:0,
        content:"unu"
      },
      {
        index:1,
        content:"doi"
      },
      {
        index:2,
        content:"trei"
      },
      {
        index:3,
        content:"patru"
      }
    ],
    timer:{
      enabled:false,
      time:0,
      timeOptions:[
        {time:0, desc:"No limit"},
        {time:1, desc:"1 min"},
        {time:5, desc:"5 min"},
        {time:10, desc:"10 min"},
        {time:15, desc:"15 min"},
        {time:30, desc:"30 min"},
        {time:60, desc:"1 h"},
      ],
      up:true
    }
  };

  questionType:number = 1;
  answerType:any = {
    type:1,
    isCorrect:-1,
    correctAnswers:[]
  };//radio


  async saveQuestion()
  {

    debugger;

    if(!this.question.guid)
    {
      this.question.guid =  UUID.UUID();
    }

    let proxy: any = {
      module:'question',
      method:'add_edit',
    };

    let q: any = {
      question: this.question.question,
      questionType:this.questionType
    };

    this.answerType.correctAnswers = [];

    let formData:FormData = new FormData();
    formData.append('proxy', JSON.stringify(proxy));
    formData.append('q', JSON.stringify(q));
    formData.append('timer', JSON.stringify(this.question.timer));


    for(var i=0;i<this.question.answers.length;i++)
    {
      const ans = this.question.answers[i];
      if(ans.isCorrect)
      {
        this.answerType.correctAnswers.push(ans.index);
      }

      let fileName = ans.content.name;
      if(fileName)
      {
        formData.append(i.toString(), ans.content, fileName);
      }else {
        formData.append(i.toString(), ans.content);
      }
    }

    formData.append('answerType', JSON.stringify(this.answerType));

    const resp =  await this.httpService.postFormData("api/question/form", formData);
    console.log(resp);
  }

  ngOnInit() {
  }

}
