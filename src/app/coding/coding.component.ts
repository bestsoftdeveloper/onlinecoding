import { Component, OnInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';


@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {

  private text: string;

  constructor() {
    this.text = 'ffffffa';
  }

  onChange(code) {
    console.log('new code', code);
  }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   this.editor.setTheme("eclipse");

  //   this.editor.getEditor().setOptions({
  //       enableBasicAutocompletion: true
  //   });

  //   this.editor.getEditor().commands.addCommand({
  //       name: "showOtherCompletions",
  //       bindKey: "Ctrl-.",
  //       exec: function (editor) {

  //       }
  //   })
//}

}
