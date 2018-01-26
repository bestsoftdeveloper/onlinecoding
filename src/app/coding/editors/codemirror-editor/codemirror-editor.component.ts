import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import "codemirror/lib/codemirror.js";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/edit/closetag.js";
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/selection/active-line.js";
import "codemirror/addon/runmode/runmode.js";

import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/lint/lint.js";
import "codemirror/addon/lint/javascript-lint.js";




import "codemirror/addon/hint/javascript-hint.js";


import "acorn/dist/acorn.js";
import "acorn/dist/acorn_loose.js";
import "acorn/dist/walk.js";
import "tern/lib/signal.js";
import "tern/lib/tern.js";
import "tern/lib/def.js";
import "tern/lib/comment.js";
import "tern/lib/infer.js";


import "codemirror/addon/tern/tern.js";
// import "./addon/hint/tern/tern-extension.js"

//https://stackoverflow.com/questions/47899431/ng2-codemirror-how-to-add-custom-keywords-to-autocomplete-hint
// declare let CodeMirror: any;








// import "codemirror/addon/hint/tern/tern-extension.js";
// import "defs/ecma5.json.js";
// import "defs/browser.json.js";


// import "codemirror-extension/addon/hint/show-context-info.js";

// import "codemirror-extension/addon/hint/templates-hint.js";

// import "codemirror/addon/hint/javascript/javascript-templates.js";


import * as CodeMirror from "codemirror";
import { CodemirrorService } from '@nomadreservations/ngx-codemirror';


@Component({
  selector: 'app-codemirror-editor',
  templateUrl: './codemirror-editor.component.html',
  styleUrls: ['./codemirror-editor.component.scss']
})
export class CodemirrorEditorComponent implements OnInit {

  public code: string = "function asd(){return 1;}";
  // @ViewChild('editor') editor;


  constructor(private _codeMirror: CodemirrorService) {
    // CodeMirror.ter
  }




  passAndHint(cm) {
    setTimeout(function() {cm.execCommand("autocomplete");}, 100);
    return CodeMirror.Pass;
  }

  // myHint(cm) {
  //   return CodeMirror.showHint(cm, CodeMirror.ternHint, {async: true});
  // }


  config = { lineNumbers: true,
    extraKeys: {
    "Ctrl-Space": "autocomplete"
  },
    mode: {
      name: "javascript",
      globalVars: true,
      theme : "eclipse"
    }
  };

  // config = {
  //   mode: 'javascript',
  //   globalVars: true,
  //   theme : "eclipse",
  //   styleActiveLine: true,
  //   lineNumbers: true,
  //   lineWrapping: true,
  //   autoCloseBrackets: true,
  //   matchBrackets: true,
  //   extraKeys: {
  //     "'.'": this.passAndHint,
  //     "Ctrl-Space": "autocomplete",
  //     "Ctrl-I": function(cm) { this.CodeMirror.tern.showType(cm); },
  //     "Alt-.": function(cm) { this.CodeMirror.tern.jumpToDef(cm); },
  //     "Alt-,": function(cm) { this.CodeMirror.tern.jumpBack(cm); },
  //     "Ctrl-Q": function(cm) { this.CodeMirror.tern.rename(cm); }
  //   },
  //   gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers"],
  //   // lintWith: CodeMirror.javascriptValidator,
  //   ternWith: {"plugins": {"guess-types": {}}},
  //   textHover: {delay:300}
  // };

  // public config = { lineNumbers: true };


  // CodeMirror.commands.autocomplete = function(cm) {
  //   CodeMirror.showHint(cm, this.myHint);
  // }

  public ngOnInit() {

    console.log("asfasdf");
    console.log(this._codeMirror.instance$);

    this._codeMirror.instance$.subscribe((editor) => {
      console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
      // console.log(editor.state);
    });

    // this._codeMirror
    // codemirror.commands.autocomplete = function(cm) {
    //   this.codemirror.showHint(cm, this.myHint);
    // }




  }

  ngAfterViewInit(): void {
    console.log("asfasdf");
    console.log(this._codeMirror.instance$);
    // let orig = this._codeMirror.instance$.javascript;
    // console.log(orig);
  }


  onFocus()
  {

  }

  onBlur()
  {}

}
