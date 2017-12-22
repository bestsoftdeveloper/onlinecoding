import {Component, OnInit, Input} from '@angular/core';
import {SimpleTimer} from 'ng2-simple-timer';
import * as moment from 'moment';
import {ITimerConfig} from "./ITimerConfig"; // add this 1 of 4

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() config: ITimerConfig;
  //link https://www.npmjs.com/package/ng2-simple-timer#example
  // config = {
  //   secStart: 0,
  //   seconds: 0,
  //   countUp: true,
  //   onStart: null,
  //   onStop: null,
  //   start: false,
  //   stop: false
  // };

  timerId: string;

  constructor(private st: SimpleTimer) {
  }

  counter = 0;
  hour = '';

  timercallback() {
    this.counter++;
    this.toMoment(this.counter);
    this.checkForStop(this.counter);
  }

  toMoment(secs) {
    this.hour = moment.utc(secs * 1000).format('HH:mm:ss');
  }


  ngOnInit() {
    this.st.newTimer('1sec', 1);
    this.start();

  }

  start() {
    if (!this.config.start)
      return;

    this.counter = 0;
    this.timerId = this.st.subscribe('1sec', this.timercallback.bind(this));

    this.config.onStart? this.config.onStart() : null;
    // if (this.config.onStart) {
    //   this.config.onStart();
    // }
  }

  stop() {
    if (!this.config.stop)
      return;

    this.counter = 0;
    this.st.unsubscribe(this.timerId);

    if (this.config.onStop) {
      this.config.onStop();
    }
  }

  checkForStop(secconds)
  {
    if(this.config.countUp)
    {
      if(secconds === 0)
      {
        return;
      }
      if(secconds === this.config.seconds)
      {
        this.config.stop = true;
        this.stop();
      }
    }
  }

}
