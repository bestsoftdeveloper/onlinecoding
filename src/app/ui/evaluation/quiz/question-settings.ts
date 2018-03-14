export class QuestionSettings {
  public AnswerTypeObj: any = {
    SingleAnswerObj: {value: 1, desc: 'Un singur raspuns'},
    MultipleAnswersObj: {value: 2, desc: 'Mai multe raspunsuri'}
  };

  public QuestionTypeObj: any = {
    TextObj:{value:1, desc:'Text'},
    ImagesObj:{value:2, desc:'Imagini'},
    CodeObj:{value:3, desc:'Cod javascript'},
  };
}
