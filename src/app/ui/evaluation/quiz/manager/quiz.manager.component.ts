import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {IQuestion} from "../facade/IQuestion";
import {ITimerConfig} from "../../../../timer/ITimerConfig";
import {TimerComponent} from "../../../../timer/timer.component";
import {HttpWrapperService} from "../../../../services/http/httpService";
import {PubSubService} from "../../../../services/pubsub/pubsub";
import {Router} from "@angular/router";
import {isUndefined} from "util";
import {LocalStorageService} from "angular-2-local-storage";
import QuizFacade from "../../../../facade/quizFacade";

@Component({
  selector: 'app-quiz-manager',
  templateUrl: './quiz.manager.component.html',
  styleUrls: ['./quiz.manager.component.scss']
})
export class QuizManagerComponent implements OnInit {

  private quizCriteria: any;
  @Input()
  set quizInfo(data: any) {
    this.quizCriteria = data;
  }
  @ViewChild(TimerComponent) timerComponent: TimerComponent;
  user: any = null;
  canAddQuestion : boolean = false;
  constructor(private httpService: HttpWrapperService, private router: Router, private pubSub: PubSubService, private localStorageService: LocalStorageService) {
    this.user = localStorageService.get('user');

    this.canAddQuestion = this.user && this.user.permission && this.user.permission == 1;

  }

  private pageCriteria = {
    itemsOnPage: 1,
    pageNo: 1,
    count: 0
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
    this.question.isAnswerSent = true;
    if(this.question.userAnswer == undefined && this.question.rdValue == undefined)
    {
      this.question.isAnswerSent = false;
      return;
    }

    this.question.showAnswers = true;

    const answerTypeObj = this.question.answerType;


    switch (this.question.questionType) {
      case QuizFacade.QuestionType.Text:
      case QuizFacade.QuestionType.Image: {
        this.question.answers.forEach(it=> delete it.correctAswered);

        switch (this.question.answerType.type) {
          case QuizFacade.AnswerType.SingleAnswer: {
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
              selectedAnswer.css = selectedAnswer.correctAswered ? "good":"notgood";

            break;
          }

          case QuizFacade.AnswerType.MultipleAnswers: {
            let correctAswered = true;
            const correctAnswers = this.question.answers.filter(it=> it.isCorrect);

            for (var i = 0; i < this.question.answers.length; i++) {
              let ans = this.question.answers[i];
              if (this.question.userAnswer) {
                const checkedAnswers = this.question.userAnswer.checkedAnswers;
                const checked = checkedAnswers.find(it=>it.index === ans.index);
                ans.rdValue = checked != null;
              }

              if(ans.rdValue){
                var existsInCorrectAnswers = correctAnswers.find(it=>it.index == ans.index);
                ans.css = existsInCorrectAnswers ? "good":"notgood";
              }

              if (!isUndefined(ans.isCorrect)) {
                ans.css = "good";
                if (ans.isCorrect && !ans.rdValue) {
                  correctAswered = false;
                  ans.css = "goodnotclicked";
                }

                if (!ans.isCorrect && ans.rdValue) {
                  correctAswered = false;
                  ans.css = "notgood";
                }
              }

            }

            this.question.correctAswered = correctAswered;

            break;
          }
        }

        break;
      }
      case QuizFacade.QuestionType.Code: {
        break;
      }
    }
    for (var i = 0; i < this.question.answers.length; i++) {
      let ans = this.question.answers[i];

      switch (this.question.answerType.type) {
        case QuizFacade.AnswerType.SingleAnswer: {
          const selectedOption = answerTypeObj.rdValue;
          this.question.correctAswered = selectedOption == answerTypeObj.isCorrect;

          break;
        }
        case QuizFacade.AnswerType.MultipleAnswers: {
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
        categoryId: this.quizCriteria.categoryId
      }
    };
    await this.httpService.postJson('api/question', body);

  }

  editQuestion() {
    this.pubSub.setKeyValue('q', this.question);
    this.router.navigate(['/addquestions']);
  }

  addquestion(){
    this.pubSub.setKeyValue('q', this.question);
    this.router.navigate(['/addquestions']);
  }

  sendAnswerForQuestion() {
    debugger;
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
    this.question.userAnswer = {checkedAnswers:req.data.body.checkedAnswers}  ;
    this.question.isAnswerSent = true;

     this.httpService.postJson('api/question', req);

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
    this.next();
  }

  timerConfig: ITimerConfig = {
    secStart: 0,
    seconds: 3,
    countUp: true,
    onStart: null,
    onStop: this.onstop.bind(this),
    running: false,
    enabled: false
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
    this.checkAnswers();
  }

  nextp = 0;

  next() {

    this.timerComponent.stopCalled();

    // if (this.isNextDisabled()) {
    //   this.finishQuiz();
    //   return;
    // }
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

  setIsLastQuestion(isLast){
    if(!this.question){
      return;
    }
    this.question.lastQuestion = isLast;
  }

  isNextDisabled() {
    if(this.pager.count ==0) {
      this.setIsLastQuestion(false);

      return false;
    }
    //return this.questions.list.length === this.pager.count;

    // if (this.questionIndex < this.questions.list.length - 1) {
    //   return false;
    // }
    if (this.questionIndex < this.pager.count-1) {
      this.setIsLastQuestion(false);
      return false;
    }

    this.setIsLastQuestion(true);
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
      case "tryGoNext":
      {
        let isNextDisabled = this.isNextDisabled();
        if(isNextDisabled){
          this.finishQuiz();
        }else{
          this.next();
        }
        break;
      }
      case "sendReport":
      {
        this.sendSurveyAnswersToServer();
        break;
      }
    }
  }

  sendSurveyAnswersToServer(){
    const body: any = {};
    body.proxy = {
      module: 'survey',
      method: 'createReport',
    };
    body.data = {
      filter:{categoryId:this.quizCriteria.categoryId}
    };

    const response = this.httpService.postJson("/api/reports", body);

    this.quizFinished = true;

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
    return questionsResponsePromise;
    // questionsResponsePromise.then(function (resp) {
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
