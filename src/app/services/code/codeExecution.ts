import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {any} from "codelyzer/util/function";

export class CodeExecutionService {

  private response  = {
  data: {
    result: null,
    console:[]
  },
  errorInfo: null,
  success: true
};

  private codeToBeExecuted : any;


  exec = function(codeObj) {
    let counter = 0;
    var self = this;


  }

  start = function(codeObj): Promise<any> {
    this.codeToBeExecuted = codeObj;
    let self = this;
    let promise = new Promise((resolve, reject) => {
      try {
        var func = new Function(self.codeToBeExecuted.text);
        self.response.data = func.apply(null);
        resolve(self.response);
      }
      catch (e) {
        self.response.success = false;
        self.response.errorInfo = e;
        resolve(self.response);
      }
    });
    return promise;
  }

  stop = function(){
    setTimeout(
      function()
      {
        console.log("stop");
        clearInterval( this.exec);
      },
      2000
    );
  };


  executeCode0(codeObj)
  {
    console.clear();
    var oldLog = console.log;

    console.log = function(s) {
      this.response.data.console.push(s);
    };

    try {
      this.stop();
      this.start(codeObj);
    }
    catch (e)
    {
      this.response.success = false;
      this.response.errorInfo = e;
    }
    console.log = oldLog;

    return this.response;
  }

  executeCode(codeObj):Promise<any> {
    console.clear();
    var oldLog = console.log;

    console.log = function (s) {
      this.response.data.console.push(s);
    };

    var self = this;
    self.codeToBeExecuted = codeObj;

    var promise = new Promise((resolve, reject) => {
        //this.stop();
        let prom = this.start(codeObj);
        prom.then(function (data) {
          resolve(self.response);
        });

      setTimeout(() => {
        //prom.reject();
        self.start =  function(){return null;};
        resolve(self.response);
      }, 1000);
    });
    return promise;
  }
}
