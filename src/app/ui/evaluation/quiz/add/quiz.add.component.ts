import {Component, OnInit} from '@angular/core';
import {HttpWrapperService} from "../../../../services/http/httpService";
import {UUID} from 'angular2-uuid';
import {ActivatedRoute} from "@angular/router";
import {PubSubService} from "../../../../services/pubsub/pubsub";

@Component({
  selector: 'app-quiz.add',
  templateUrl: './quiz.add.component.html',
  styleUrls: ['./quiz.add.component.scss']
})
export class QuizAddComponent implements OnInit {

  sub:any;

  constructor(private httpService: HttpWrapperService, route: ActivatedRoute, pubSub:PubSubService) {
    debugger;
    let q = pubSub.getKeyValue('q');
    if(q)
    {
      this.question = q;
      pubSub.setKeyValue('q',null);
    }
    let aaaa = route.snapshot.params['id']; // 3
    this.sub = route
      .data
      .subscribe(v => console.log(v));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  defaultCode: any = "\n\n\nfunction run()\n{\n//write the code...\n}"
  private QuestionType =
  {
    Text:1,
    Image:2,
    Code:3
  };
  defaultTestCase: any = {
    list: [
      {
        param: 5,
        expected: false
      },
      {
        param: 8,
        expected: true
      }]
  };

  question: any = {
    question: 'ddd',
    questionType:1,
    answers: [
      {
        index: 0,
        content: "unu"
      },
      {
        index: 1,
        content: "doi"
      },
      {
        index: 2,
        content: "trei"
      },
      {
        index: 3,
        content: "patru"
      }
    ],
    timer: {
      enabled:false,
      secStart:0,
      countUp:false,
      running:false,
      seconds: 0,
      timeOptions: [
        {time: 0, desc: "No limit"},
        {time: 1, desc: "1 min"},
        {time: 5, desc: "5 min"},
        {time: 10, desc: "10 min"},
        {time: 15, desc: "15 min"},
        {time: 30, desc: "30 min"},
        {time: 60, desc: "1 h"},
      ],
      up: true
    },
    testCases: JSON.stringify(this.defaultTestCase),
    code:this.defaultCode
  };

  //questionType: number = 1;
  answerType: any = {
    type: 1,
    isCorrect: -1,
    correctAnswers: []
  };//radio


  async saveQuestion() {

    debugger;

    if (!this.question.guid) {
      this.question.guid = UUID.UUID();
    }

    let proxy: any = {
      module: 'question',
      method: 'add_edit',
    };

    let q: any = {
      question: this.question.question,
      questionType: this.question.questionType
    };

    this.answerType.correctAnswers = [];

    let formData: FormData = new FormData();
    formData.append('proxy', JSON.stringify(proxy));
    formData.append('q', JSON.stringify(q));
    formData.append('timer', JSON.stringify(this.question.timer));

    if (this.question.code) {
      formData.append('code', this.question.code);
    }
    if (this.question.testCases) {
      try {
        let tc = JSON.parse(this.question.testCases);
        formData.append('testCases', JSON.stringify(tc));
      }
      catch (e) {

      }

    }

    if (this.question.questionType == 2) {
      for (var i = 0; i < this.question.answers.length; i++) {
        const ans = this.question.answers[i];
        if (ans.isCorrect) {
          this.answerType.correctAnswers.push(ans.index);
        }

        let fileName = ans.content.name;
        if (fileName) {
          formData.append(i.toString(), ans.content, fileName);
        } else {
          formData.append(i.toString(), ans.content);
        }
      }
    } else {
      formData.append('answers', JSON.stringify(this.question.answers));
    }

    formData.append('answerType', JSON.stringify(this.answerType));

    const resp = await this.httpService.postFormData("api/question/form", formData);
    console.log(resp);
  }

  ngOnInit() {
  }

}
