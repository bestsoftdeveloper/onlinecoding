export class QuestionSettings {
  public AnswerType: any = {
    SingleAnswer: {value: 1, desc: 'Un singur raspuns'},
    MultipleAnswers: {value: 2, desc: 'Mai multe raspunsuri'}
  };

  public QuestionType: any = {
    Text:{value:1, desc:'Text'},
    Images:{value:2, desc:'Imagini'},
    Code:{value:3, desc:'Cod javascript'},
  };
}
