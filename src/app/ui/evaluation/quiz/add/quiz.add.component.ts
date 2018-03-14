import {Component, OnInit} from '@angular/core';
import {HttpWrapperService} from "../../../../services/http/httpService";
import {UUID} from 'angular2-uuid';
import {ActivatedRoute} from "@angular/router";
import {PubSubService} from "../../../../services/pubsub/pubsub";
import QuizFacade from "../../../../facade/quizFacade";

@Component({
  selector: 'app-quiz.add',
  templateUrl: './quiz.add.component.html',
  styleUrls: ['./quiz.add.component.scss']
})
export class QuizAddComponent implements OnInit {

  // sub:any;

  constructor(private httpService: HttpWrapperService, route: ActivatedRoute, pubSub:PubSubService) {
    let q = pubSub.getKeyValue('q');
    if(q)
    {
      q.timer.timeOptions = this.timeOptions;
      if(q.questionType === this.QuestionType.Image)
      {
        if(q.answerType.type == QuizFacade.AnswerType.MultipleAnswers)
        {
          const correctAnswers = q.answerType.correctAnswers;
          for(var i=0;i<q.answers.length;i++)
          {
            const ans = q.answers[i];
            ans.index = i;
            ans.isCorrect = correctAnswers.indexOf(i)>-1;
          }
        }
      }
      this.question = q;
      pubSub.setKeyValue('q',null);
    }
    // let aaaa = route.snapshot.params['id']; // 3
    // this.sub = route
    //   .data
    //   .subscribe(v => console.log(v));
  }

  onCategoryChange($event)
  {
    $event.preventDefault();
  }

  categories:  Array<any> = [];

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  defaultCode: any = "\n\n\nfunction run()\n{\n//write the code...\n}"
  QuestionType = QuizFacade.QuestionType;
  AnswerType = QuizFacade.AnswerType;

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

  timeOptions: any = [
    {time: 0, desc: "No limit"},
    {time: 1, desc: "1 min"},
    {time: 5, desc: "5 min"},
    {time: 10, desc: "10 min"},
    {time: 15, desc: "15 min"},
    {time: 30, desc: "30 min"},
    {time: 60, desc: "1 h"}
    ];
  question: any = {
    question: 'ddd',
    questionType:1,
    answerCount:4,
    categoryId:"",
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
    testCasesStr:JSON.stringify(this.defaultTestCase),
    testCases: null,
    code:this.defaultCode,
    answerType:  {
      type: 1,
      isCorrect: -1,
      correctAnswers: []
    }
  };

  //questionType: number = 1;
  //radio


  decreaseNumberOfAnswers()
  {
    if(this.question.answers.length === 0)
      return;
    this.question.answers.pop();
  }

  increaseNumberOfAnswers()
  {
      const index = this.question.answers.length;
      this.question.answers.push({index,content:""});
  }
  async saveQuestion() {


    if (!this.question.guid) {
      this.question.guid = UUID.UUID();
    }

    let proxy: any = {
      module: 'question',
      method: 'add_edit',
    };

    // let q: any = {
    //   question: this.question.question,
    //   questionType: this.question.questionType
    // };

    this.question.answerType.correctAnswers = [];

    let formData: FormData = new FormData();

    if (this.question.questionType == 2) {//image
      for (var i = 0; i < this.question.answers.length; i++) {
        const ans = this.question.answers[i];
        if (ans.isCorrect) {
          this.question.answerType.correctAnswers.push(ans.index);
        }

        if(ans.content) {
          let fileName = ans.content.name;
          if (fileName) {
            formData.append(i.toString(), ans.content, fileName);
            ans.content = "";
          }
        }
      }
    }

    if (this.question.testCasesStr) {
      try {
        let tc = JSON.parse(this.question.testCasesStr);
        this.question.testCases = JSON.parse(this.question.testCasesStr);
      }
      catch (e) {

      }
    }
    formData.append('question', JSON.stringify(this.question));

    formData.append('proxy', JSON.stringify(proxy));
    //formData.append('q', JSON.stringify(q));
    //formData.append('timer', JSON.stringify(this.question.timer));

    // if (this.question.code) {
    //   formData.append('code', this.question.code);
    // }



    const resp = await this.httpService.postFormData("api/question/form", formData);
  }

  async ngOnInit() {
    const req: any = {
      proxy: {
        module: 'question',
        method: 'getCategories',
      },
      data: {

      }
    };

    const resp = await this.httpService.postJson("api/question", req);
    this.categories = resp.data;
  }

}
