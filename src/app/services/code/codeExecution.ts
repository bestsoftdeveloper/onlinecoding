import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {any} from "codelyzer/util/function";

export class CodeExecutionService {

  private response  = null;

  private codeToBeExecuted : any;

  constructor()
  {

    console.log("ggggggggggggggggg");
  }

  createResponseObject()
  {
    return {
      data: {
        result: null,
        console: []
      },
      errorInfo: null,
      success: true
    };
  }

  executeCode(codeObj){
    //console.clear();
    this.response = this.createResponseObject();

    var self = this;
    var oldLog = console.log;

    console.log = function (s) {
      self.response.data.console.push(s);
    };


    self.response.data.result = '';
    self.codeToBeExecuted = codeObj;

    try {
      var func = new Function(self.codeToBeExecuted.text);

      const funcResult = func.apply(null);
      // const funcResult = func();

      self.response.data.result = funcResult;
      console.log = oldLog;
      return (self.response);
    }
    catch (e) {
      self.response.success = false;
      self.response.errorInfo = e;
      console.log = oldLog;
      return (self.response);
    }
  }
}
