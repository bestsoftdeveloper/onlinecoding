import {Component, OnInit, Input} from '@angular/core';
import TimerSettings from "../../../../facade/timerSettings";

@Component({
  selector: 'app-quiz-timer',
  templateUrl: './quiz-timer.component.html',
  styleUrls: ['./quiz-timer.component.scss']
})
export class QuizTimerComponent implements OnInit {

  @Input() obj: Object;

  constructor() { }

  ngOnInit() {
    if(!this.obj)
    {
      this.obj = TimerSettings.timer;
    }
  }

}
