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
    if(this.config.countUp)
    {
      this.counter++;
    }else{
      this.counter--;
    }


    console.log('counter val' + this.counter);

    this.checkForStop(this.counter);
    this.toMoment(this.counter);

  }

  toMoment(secs) {
    this.hour = moment.utc(secs * 1000).format('HH:mm:ss');
  }


  ngOnInit() {
    this.st.newTimer('1sec', 1);
    this.start();

  }

  start() {
    console.log('start 1');
    if (!this.config.running)
      return;
    console.log('start OK');

    this.counter = 0;
    this.timerId = this.st.subscribe('1sec', this.timercallback.bind(this));

    this.config.onStart? this.config.onStart() : null;
    // if (this.config.onStart) {
    //   this.config.onStart();
    // }
  }

  reset(data:any) {
    // return;
    debugger;
    console.log('reset');
    this.counter = 0;
    if(!data)
    {
      return;
    }

    if(!data.seconds)
    {
      return;
    }
    if(data.countUp === false)
    {
      this.counter = data.seconds;
    }

    this.config.seconds = data.seconds;
    this.config.countUp = data.countUp;
    this.config.running = true;
    this.timerId = this.st.subscribe('1sec', this.timercallback.bind(this));
    //
    this.config.onStart? this.config.onStart() : null;

  }

  stop() {
    // if (!this.config.running)
    //   return;
    // debugger;
    if(!this.config)
    {
      return;
    }
    console.log('stop');

    this.config.running = false;

    this.counter = 0;
    if(this.timerId) {
      this.st.unsubscribe(this.timerId);
      this.timerId = null;
      if (this.config.onStop) {
        this.config.onStop();
      }
    }
  }

  stopCalled() {
    // if (!this.config.running)
    //   return;
    // debugger;
    if(!this.config)
    {
      return;
    }
    console.log('stop');

    this.config.running = false;

    this.counter = 0;
    if(this.timerId) {
      this.st.unsubscribe(this.timerId);
      this.timerId = null;
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
      if(secconds >= this.config.seconds+1)
      {
        this.stop();
      }
    }else{
      if(secconds === 0)
      {
        this.stop();
      }
    }
  }

}
