import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {IQuestion} from "../facade/IQuestion";
import {ITimerConfig} from "../../../../timer/ITimerConfig";
import {TimerComponent} from "../../../../timer/timer.component";
import {HttpWrapperService} from "../../../../services/http/httpService";
import {PubSubService} from "../../../../services/pubsub/pubsub";
import {Router} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-quiz-manager',
  templateUrl: './quiz.manager.component.html',
  styleUrls: ['./quiz.manager.component.scss']
})
export class QuizManagerComponent implements OnInit {

  private quizCriteria: any;
  @Input()
  set quizInfo(data: any) {
    console.log('got name: ');
    this.quizCriteria = data;
  }
  @ViewChild(TimerComponent) timerComponent: TimerComponent;

  constructor(private httpService: HttpWrapperService, private router: Router, private pubSub: PubSubService) {
  }

  private pageCriteria = {
    itemsOnPage: 1,
    pageNo: 1,
    count: 0
  };

  private QuestionType =
  {
    Text: 1,
    Image: 2,
    Code: 3
  };
  private AnswerType =
  {
    SingleAnswer: 1,
    MultipleAswers: 2,
  };

  onBtnMouseOver(q) {
    q.btnover = true;
    q.btnoverclass = "btnOver";
  }

  onBtnMouseOut(q) {
    q.btnover = false;
    q.btnoverclass = "";
  }


  goToQuestionNumber(id) {
    //
    const q = this.questions.list.find(it=>it._id === id);
    if (!q) {
      return;
    }

    this.useQuestion(q);
  }

  checkAnswers() {
    if (!this.question) {
      return;
    }
    if(!this.question.userAnswer)
    {
      return;
    }

    this.question.showAnswers = true;

    const answerTypeObj = this.question.answerType;


    switch (this.question.questionType) {
      case this.QuestionType.Text:
      case this.QuestionType.Image: {
        this.question.answers.forEach(it=> delete it.correctAswered);

        switch (this.question.answerType.type) {
          case this.AnswerType.SingleAnswer: {
            let selectedOption = this.question.rdValue;
            if (isUndefined(selectedOption) && this.question.userAnswer) {
              selectedOption = this.question.userAnswer.rdValue;
            }
            if (isUndefined(selectedOption)) {
              break;
            }
            const selectedAnswer = this.question.answers.find(it => it.index === selectedOption);
            if (isUndefined(this.question.rdValue)) {
              this.question.rdValue = selectedOption;
            }
            if (answerTypeObj.isCorrect < 0) {
              break;
            }

            this.question.answers[answerTypeObj.isCorrect].isCorrect = true;
            this.question.correctAswered = selectedOption == answerTypeObj.isCorrect;

            selectedAnswer.correctAswered = answerTypeObj.isCorrect == selectedAnswer.index;

            break;
          }

          case this.AnswerType.MultipleAswers: {
            debugger;
            let correctAswered = true;
            for (var i = 0; i < this.question.answers.length; i++) {

              let ans = this.question.answers[i];
              if (this.question.userAnswer) {
                const checkedAnswers = this.question.userAnswer.checkedAnswers;
                const checked = checkedAnswers.find(it=>it.index === ans.index);
                ans.rdValue = checked != null;
              }

              if (!isUndefined(ans.isCorrect)) {
                if (ans.isCorrect && !ans.rdValue) {
                  correctAswered = false;
                }

                if (!ans.isCorrect && ans.rdValue) {
                  correctAswered = false;
                }
              }

            }

            this.question.correctAswered = correctAswered;

            break;
          }
        }

        break;
      }
      case this.QuestionType.Code: {
        break;
      }
    }
    for (var i = 0; i < this.question.answers.length; i++) {
      let ans = this.question.answers[i];

      switch (this.question.answerType.type) {
        case this.AnswerType.SingleAnswer: {
          const selectedOption = answerTypeObj.rdValue;
          this.question.correctAswered = selectedOption == answerTypeObj.isCorrect;

          break;
        }
        case this.AnswerType.MultipleAswers: {
          break;
        }
      }
    }

    this.question.isDisabled = true;
  }

  async checkQuestionAnswers()
  {
   //  const body : any = {};
   //
   // body.proxy = {
   //    module: 'question',
   //    method: 'checkAnswersForQuestion',
   //  };
   //  body.data = {
   //    filter:{
   //      _id:"5a63c69f1e6dbf2888ae293c"
   //    }
   //  };
    const body :any = {};
    body.proxy = {
      module: 'question',
      method: 'checkAnswersForCategory',
    };
    body.data = {
      filter:{
        categoryId:"5a6043ecb26e4c27c08f57de"
      }
    };
    await this.httpService.postJson('api/question', body);

  }

  editQuestion() {
    this.pubSub.setKeyValue('q', this.question);
    this.router.navigate(['/addquestions']);
  }

  sendAnswerForQuestion() {
    if (!this.question || !this.question._id) {
      return;
    }
    const req: any = {
      proxy: {
        module: 'question',
        method: 'storeAnswerForQuestion',
      },
      data: {
        qid: this.question._id,
        body: {
          rdValue: this.question.rdValue
        }
      }
    };
    req.data.body.checkedAnswers = this.question.answers.filter(el=>el.rdValue).map(el=>({index: el.index}));

    this.httpService.postJson('api/question', req);

    //this.next();
    this.checkAnswers();
  }

  // async getAnswerForQuestion() {
  //   if (!this.question) {
  //     return;
  //   }
  //   if (this.question.userAnswer) {
  //     return;
  //   }
  //   const req: any = {
  //     proxy: {
  //       module: 'question',
  //       method: 'getAnswerForQuestion',
  //     },
  //     data: {
  //       qid: this.question._id
  //     }
  //   };
  //   const resp = await this.httpService.postJson('api/question', req);
  //   if (resp.data) {
  //     this.question.userAnswer = resp.data;
  //     this.checkAnswers();
  //   }
  //
  // }


  onstop = ()=> {
    console.log('dddddddddddddddddddd');

    this.next();
  }

  timerConfig: ITimerConfig = {
    secStart: 0,
    seconds: 3,
    countUp: true,
    onStart: null,
    onStop: this.onstop.bind(this),
    running: false
  };


  private questions = {
    list: [
      {
        _id: "966f856f-e545-4ef7-8871-aca5a7e019a2",
        index: 1,
        question: "hello1",
        time: 0,
        rdValue: 1,
        selectedClass: "",
        answers: [
          {
            id: 1,
            answer: "1asda1",
          },
          {
            id: 2,
            answer: "1asasda1",
          },
          {
            id: 3,
            answer: "1asasfafda1",
          },
          {
            id: 4,
            answer: "1asdafa1",
          }
        ],
      }]
  };

  public question: any = null;

  questionIndex = -1;

  quizFinished = false;

  finishQuiz() {
    this.question = null;
    this.quizFinished = true;
  }

  useQuestion(question) {
    if (!question) {
      return;
    }
    this.question = question;
    this.questionIndex = question.index;
    this.questions.list.forEach(it=> delete it.selectedClass);
    question.selectedClass = "selected";
    // this.getAnswerForQuestion();
    debugger;
    this.checkAnswers();
  }

  nextp = 0;

  next() {

    this.timerComponent.stopCalled();

    // if (this.isNextDisabled()) {
    //   this.finishQuiz();
    //   return;
    // }
    //debugger;
    if (this.questionIndex === this.questions.list.length - 1) {
      this.nextPage();
      return;
    }
    this.questionIndex++;

    if (this.questionIndex === (this.pager.pageNo * this.pager.itemsOnPage)) {
      this.viewIndex = this.viewIndex + this.pager.itemsOnPage;
      this.pager.pageNo++;
    }

    this.useQuestion(this.questions.list[this.questionIndex]);

    if (this.question.timer) {
      this.timerConfig.countUp = this.question.timer.countUp;
      this.timerConfig.running = this.question.timer.enabled;
      this.timerComponent.reset(this.question.timer);
    }
  }

  prev() {
    this.timerComponent.stopCalled();
    //debugger;
    if (this.isPrevDisabled()) {
      return;
    }
    if (this.viewIndex === this.questionIndex) {
      this.viewIndex = this.viewIndex - this.pager.itemsOnPage;
      this.pager.pageNo--;
    }
    this.questionIndex--;
    const question = this.questions.list[this.questionIndex];
    this.useQuestion(question);
  }

  isPrevDisabled() {
    return this.questionIndex == 0;
  }

  isNextDisabled() {
    if(this.pager.count ==0)
      return false;
    //return this.questions.list.length === this.pager.count;

    // if (this.questionIndex < this.questions.list.length - 1) {
    //   return false;
    // }
    if (this.questionIndex < this.pager.count-1) {
      return false;
    }
    return true;
    // return this.questionIndex === this.questions.list.length-1;
  }


  public onMessageFromQuestionControl(data: any): void {
    // console.log('Picked date: ', data);
    switch (data.command)
    {
      case "sendAnswer":
      {
        this.sendAnswerForQuestion();
        break;
      }
    }
  }

  pager = {
    pageNo: 1,
    itemsOnPage: 3,
    pageCount: 0,
    count: 0
  };

  async getNextQuestionsFomDatabase() {
    //
    const self = this;
    const data = {
      proxy: {
        module: 'question',
        method: 'getQuestions',
      },
      data: {
        pager: this.pager,
        filter:{
          categoryId: this.quizCriteria.categoryId
        }
      }
    };
    let questionsResponsePromise = await this.httpService.postJson('api/question', data);
    console.log(questionsResponsePromise);
    return questionsResponsePromise;
    // questionsResponsePromise.then(function (resp) {
    //   debugger;
    //   self.questions.list = resp.data.items;
    //   self.pageCriteria.count =resp.data.count;
    //   this.next();
    // });
  }


  async ngOnInit() {
    this.questions.list = [];
    this.getPage();
  }

  viewIndex = 0;

  async getPage() {
    const startIndex = (this.pager.pageNo - 1) * this.pager.itemsOnPage;

    if (this.pager.count == 0 || this.questions.list.length < this.pager.count) {
      this.nextp++;

      const response = await this.getNextQuestionsFomDatabase();
      const data = response.data;

      data.items.forEach((el, i) => {
        el.index = startIndex + i;
        if(el.userAnswers && el.userAnswers.length)
        {
          el.userAnswer = el.userAnswers[0].body;
        }
      });
      this.pager.count = data.count;
      this.pager.pageCount = Math.ceil(data.count / this.pager.itemsOnPage);
      this.questions.list = this.questions.list.concat(data.items);
    }
    this.questionIndex = startIndex - 1;
    this.viewIndex = startIndex;
    this.next();
  }

  prevPage() {
    this.pager.pageNo--;
    const startIndex = (this.pager.pageNo - 1) * this.pager.itemsOnPage;
    this.viewIndex = startIndex;
    this.questionIndex = startIndex - 1;
    this.next();
  }

  nextPage() {


    this.pager.pageNo++;

    this.getPage();

  }

  isPrevPageDisabled() {
    return this.pager.pageNo <= 1;
  }

  isNextPageDisabled() {
    return this.pager.pageNo === this.pager.pageCount;
  }

}
