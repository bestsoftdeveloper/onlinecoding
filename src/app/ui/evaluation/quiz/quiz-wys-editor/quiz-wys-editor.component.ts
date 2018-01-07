import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-wys-editor',
  templateUrl: './quiz-wys-editor.component.html',
  styleUrls: ['./quiz-wys-editor.component.scss']
})
export class QuizWysEditorComponent implements OnInit {

  @Input() obj: Object;
  @Input() prop: string;
  @Input() answerType: number;

  constructor() { }

  ngOnInit() {
  }

}
