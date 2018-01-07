import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-timer',
  templateUrl: './quiz-timer.component.html',
  styleUrls: ['./quiz-timer.component.scss']
})
export class QuizTimerComponent implements OnInit {

  @Input() obj: Object;

  constructor() { }

  ngOnInit() {
  }

}
