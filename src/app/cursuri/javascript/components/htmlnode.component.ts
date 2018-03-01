import { Component, OnInit, Input  } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { HttpWrapperService } from '../../../services/http/httpService'
import {CodeExecutionService} from "../../../services/code/codeExecution";

@Component({
  selector: 'app-htmlnode',
  templateUrl: './htmlnode.component.html',
  styleUrls: ['./htmlnode.component.css']
})
  export class HtmlNodeComponent implements OnInit {

  private  httpService: HttpWrapperService;
  private codeExecutionService: CodeExecutionService;
  public codeResult : any;
  private text: string;
  @Input() node: any;

  constructor(httpService: HttpWrapperService,codeExecutionService : CodeExecutionService)
  {
    this.httpService = httpService;
    this.codeExecutionService = codeExecutionService;
    this.text = 'console.log("start");';
  }

  onChange(code) {
    console.log('new code', code);
  }

  ngOnInit() {
  }

  titleClick(el)
  {
    el.expanded = !el.expanded;
  }

  getClases(el)
  {
    return el.expanded? "expanded":"notexpanded";
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
