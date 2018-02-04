import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-componet',
  templateUrl: './console-componet.component.html',
  styleUrls: ['./console-componet.component.scss']
})
export class ConsoleComponetComponent implements OnInit {

  messages = [];
  constructor() {

    console.log =  (s) => {
      this.messages.push(s);
    };

  }

  clear()
  {
    this.messages = [];
  }

  ngOnInit() {
  }

}
