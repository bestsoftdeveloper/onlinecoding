import { Component, OnInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { HttpWrapperService } from '../services/http/httpService'

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {

  private text: string;
  private  httpService: HttpWrapperService;

  constructor(httpService: HttpWrapperService)
  {
    this.httpService = httpService;
    this.text = 'ffffffa';
  }

  onChange(code) {
    console.log('new code', code);
  }

  ngOnInit() {
  }

  async executeCodeOnServer(event)
  {
    const xxx = await this.httpService.postJson('http://localhost:3001/api/funcp',
      {
        code: this.text
      });
    console.log(xxx);
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
