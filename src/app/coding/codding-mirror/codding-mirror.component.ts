import {Component, OnInit, Input} from '@angular/core';
import {HttpWrapperService} from "../../services/http/httpService";
import {CodeExecutionService} from "../../services/code/codeExecution";

@Component({
  selector: 'app-codding-mirror',
  templateUrl: './codding-mirror.component.html',
  styleUrls: ['./codding-mirror.component.scss']
})
export class CoddingMirrorComponent implements OnInit {

  public text: string;
  private  httpService: HttpWrapperService;
  private codeExecutionService: CodeExecutionService;
  public codeResult : any;
  @Input() obj: any;
  @Input() code: string;
  @Input() testCases: any;
  @Input() prop: string;
  @Input() problemId: string;

  externalConfig: any = {
    lineNumbers: true
  };

  codeIsChanged(text){
    this.text = text;
  }

  constructor(httpService: HttpWrapperService,codeExecutionService : CodeExecutionService)
  {
    this.httpService = httpService;
    this.codeExecutionService = codeExecutionService;
    this.text = this.code;
  }

  onChange(code) {
    this.obj[this.prop] = code;
    // console.log('new code', code);
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

  executeCodeLocally(event)
  {
    if(this.testCases)
    {
      let testCode = this.text;

      for(var i = 0;i<this.testCases.list.length;i++)
      {
        const testCase = this.testCases.list[i];

        testCode = this.text + " return " + "run" + "(" + testCase.param  +");";
        let resp = this.codeExecutionService.executeCode(
          {
            text:testCode
          });
        if(testCase.expected != undefined)
        {
          if(testCase.expected != resp.data.result)
          {
            resp.param = testCase.param;
            resp.expected = testCase.expected;
            resp.success = false;
          }
        }
        this.codeResult = resp;
        if(!resp.success)
        {
          break;
        }
      }
    }else {
      const resp = this.codeExecutionService.executeCode(
        {
          text:this.text
        });
      this.codeResult = resp;


    }

    this.saveToDatabase(this.codeResult);


    // const xxx = await this.httpService.postJson('http://localhost:3001/api/funcp',
    //   {
    //     code: this.text
    //   });
    // this.codeResult = xxx;
    // console.log(xxx);
  }

  saveToDatabase(resp)
  {
    if(resp.success)
    {
      resp.code= this.text;
      const body :any = {};
      body.proxy = {
        module: 'news',
        method: 'solveExercise',
      };
      body.data = {
        _id:this.problemId,
        resp:resp
      };
      // console.log(body);
      debugger;
      const newsDbData =   this.httpService.postJson('api/news', body);
    }
  }

}
