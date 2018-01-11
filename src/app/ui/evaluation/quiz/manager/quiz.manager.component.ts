import {Component, OnInit, ViewChild} from '@angular/core';
import {IQuestion} from "../facade/IQuestion";
import {ITimerConfig} from "../../../../timer/ITimerConfig";
import {TimerComponent} from "../../../../timer/timer.component";
import {HttpWrapperService} from "../../../../services/http/httpService";
import {PubSubService} from "../../../../services/pubsub/pubsub";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-manager',
  templateUrl: './quiz.manager.component.html',
  styleUrls: ['./quiz.manager.component.scss']
})
export class QuizManagerComponent implements OnInit {

  @ViewChild(TimerComponent) timerComponent: TimerComponent;

  constructor(private httpService: HttpWrapperService,private router: Router,private pubSub:PubSubService) { }

  private pageCriteria = {
    itemsOnPage:1,
    pageNo:1,
    count:0
  };

  private QuestionType =
  {
    Text:1,
    Image:2,
    Code:3
  };
  private AnswerType =
  {
    SingleAnswer:1,
    MultipleAswers:2,
  };

  checkAnswers()
  {
    if(!this.question)
    {
      return;
    }

    this.question.showAnswers = true;

    const answerTypeObj = this.question.answerType;
    debugger;

    switch(this.question.questionType)
    {
      case this.QuestionType.Text:
      case this.QuestionType.Image:
      {
        this.question.answers.forEach(it=> delete it.correctAswered);

        switch(this.question.answerType.type)
        {
          case this.AnswerType.SingleAnswer:{
            const selectedOption = this.question.rdValue;
            this.question.answers[answerTypeObj.isCorrect].isCorrect = true;
            this.question.correctAswered = selectedOption == answerTypeObj.isCorrect;

            const selectedAnswer = this.question.answers.find(it => it.index === selectedOption);
            selectedAnswer.correctAswered = answerTypeObj.isCorrect == selectedAnswer.index;

            break;
          }
          case this.AnswerType.MultipleAswers:{

            let correctAswered = true;
            for(var i=0;i<this.question.answers.length;i++)
            {
              let ans = this.question.answers[i];
              if(ans.isCorrect && !ans.rdValue)
              {
                correctAswered = false;
                break;
              }

              if(!ans.isCorrect && ans.rdValue)
              {
                correctAswered = false;
                break;
              }
            }

            this.question.correctAswered = correctAswered;

            break;
          }
        }

        break;
      }
      case this.QuestionType.Code:
      {
        break;
      }
    }
    for(var i=0;i<this.question.answers.length;i++)
    {
      let ans = this.question.answers[i];

      switch(this.question.answerType)
      {
        case this.AnswerType.SingleAnswer:{
          const selectedOption = answerTypeObj.rdValue;
          this.question.correctAswered = selectedOption == answerTypeObj.isCorrect;

          break;
        }
        case this.AnswerType.MultipleAswers:{
          break;
        }
      }
    }
  }
  editQuestion()
  {
    this.pubSub.setKeyValue('q', this.question);
    this.router.navigate(['/addquestions']);
  }

  sendAnswerForQuestion()
  {
    if(!this.question || !this.question._id)
    {
      return;
    }
    const req: any = {
      proxy:{
        module: 'question',
        method: 'storeAnswerForQuestion',
      },
      data:{
        qid:this.question._id,
        rdValue:this.question.rdValue
      }
    };
    req.data.checkedAnswers = this.question.answers.filter(el=>el.rdValue).map(el=>({index:el.index}));
    this.httpService.postJson('api/question',req);
  }
  onstop = ()=>{
    console.log('dddddddddddddddddddd');

    this.next();
  }

  timerConfig:ITimerConfig = {
    secStart: 0,
    seconds: 3,
    countUp: true,
    onStart: null,
    onStop: this.onstop.bind(this),
    running: false
  };



  private questions = {
    list:[
      {
        _id:"b0420298-7cca-4f3d-b95b-3a1eb3a29493",
        question:"Ai folosit javascript",
        time:0,
        answers:[
          {
            id:1,
            answer:"Da",
          },
          {
            id:2,
            answer:"Nu",
          }

        ],
        rdValue:1,
      },
      {
        _id:"a88f261f-29bd-4435-a1d4-0d236c10b9b6",
        question:"<label>scrie o functie care returneaza daca un numar este par</label>",
        code:"function  isPar(n)\n{\n//write the code here\n};\n\nisPar(5);",
        testCases:{
          mainFunctionName:"isPar",
          list:[
            {
              param:5,
              expected:false
            },
            {
              param:8,
              expected:true
            }]
        },
        rdValue:1,
        time:{
          seconds:5,
          countUp:false
        },
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
        questionType: this.QuestionType.Code
      },
      {
        _id:"b26e7462-ebb0-44d5-aa83-0b1470139130",
        question:"Ce ai vrea sa inveti?",
        time:10,
        rdValue:1,
        answers:[
          {
            id:1,
            answer:"Javascript",
          },
          {
            id:2,
            answer:".net",
          },
          {
            id:4,
            answer:"es6",
          }

        ],
      },
      {
        _id:"bda49d4a-37de-45b2-8a87-005e56183e93",
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
    },
      {
        _id:"966f856f-e545-4ef7-8871-aca5a7e019a2",
        question:"hello1",
        time:0,
        rdValue:1,
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
      }]
  };

  public question:any = null;

  questionIndex = -1;




  next()
  {
    this.sendAnswerForQuestion();
    this.timerComponent.stopCalled();

    if(this.isNextDisabled())
    {
      return;
    }
    //debugger;
    this.questionIndex++;
    this.question = this.questions.list[this.questionIndex];
    if(this.question.timer) {
      this.timerConfig.countUp = this.question.timer.countUp;
      this.timerConfig.running = this.question.timer.enabled;
      this.timerComponent.reset(this.question.timer);
    }
  }

  prev()
  {
    this.timerComponent.stopCalled();
    //debugger;
    if(this.isPrevDisabled())
    {
      return;
    }
    this.questionIndex--;
    this.question = this.questions.list[this.questionIndex];
  }

  isPrevDisabled()
  {
    return this.questionIndex ==0;
  }

  isNextDisabled()
  {
    return this.questionIndex === this.questions.list.length-1;
  }


  public onMessageFromQuestionControl(date: any):void {
    console.log('Picked date: ', date);
  }

  async getNextQuestionsFomDatabase()
  {
    const self = this;
    const data = {
      proxy:{
        module: 'question',
        method: 'evaluation',
      },
      data:{
        //pager:this.pageCriteria
      }
    };
    let questionsResponsePromise = await this.httpService.postJson('api/question',data);

    return questionsResponsePromise;
    // questionsResponsePromise.then(function (resp) {
    //   debugger;
    //   self.questions.list = resp.data.items;
    //   self.pageCriteria.count =resp.data.count;
    //   this.next();
    // });
  }

  async ngOnInit() {
    debugger;
    const response = await this.getNextQuestionsFomDatabase();
    this.questions.list = response.data.items;
    this.next();
  }

}
