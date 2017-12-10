import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { HttpWrapperService } from '../services/http/httpService'
import {CodeExecutionService} from "../services/code/codeExecution";

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {
  //@ViewChild('editor') editor;
  private text: string;
  private  httpService: HttpWrapperService;
  private codeExecutionService: CodeExecutionService;
  public codeResult : any;
  @Input() code: string;
  constructor(httpService: HttpWrapperService,codeExecutionService : CodeExecutionService)
  {
    this.httpService = httpService;
    this.codeExecutionService = codeExecutionService;
    this.text = this.code;
  }

  onChange(code) {
    console.log('new code', code);
  }

  getHttpService()
  {
    if(this.httpService)
    {
      return this.httpService;
    }
    //this.httpService = new HttpWrapperService();
    return this.httpService;
  }

  ngOnInit() {
    this.text = this.code;
  }

  async executeCodeOnServer(event)
  {
    const serverResponse = await this.httpService.postJson('http://localhost:3001/api/funcp',
      {
        code: this.text
      });
    this.codeResult = serverResponse;
  }

  async executeCodeLocally(event)
  {
    const resp = await this.codeExecutionService.executeCode(
      {
        text:this.text
      });
    this.codeResult = resp;


    // const xxx = await this.httpService.postJson('http://localhost:3001/api/funcp',
    //   {
    //     code: this.text
    //   });
    // this.codeResult = xxx;
    // console.log(xxx);
  }

//   ngAfterViewInit() {
//     this.editor.setTheme("javascript");
//
//     this.editor.getEditor().setOptions({
//         enableBasicAutocompletion: true
//     });
//
//     this.editor.getEditor().commands.addCommand({
//         name: "showOtherCompletions",
//         bindKey: "Ctrl-.",
//         exec: function (editor) {
//
//         }
//     })
// }

}
