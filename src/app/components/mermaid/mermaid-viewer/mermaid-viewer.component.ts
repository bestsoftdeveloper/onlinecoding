import { Component, OnInit } from '@angular/core';
import mermaid from 'mermaid';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-mermaid-viewer',
  templateUrl: './mermaid-viewer.component.html',
  styleUrls: ['./mermaid-viewer.component.scss']
})
export class MermaidViewerComponent implements OnInit {

  constructor() { }

  code:string = "";
  renderedCode = null;


  codeChanged(){
    var that = this;
    // var sing = UUID.UUID();
    var hack = Math.random().toString(36).substring(7).replace(/\d/, "a")
    // mermaid.render(sing, this.code) => svgCode{
    //
    // }
    mermaid.render(hack, this.code, function(svgCode) {
      let timeoutId = setTimeout(() => {
        // console.log('hello');
        that.renderedCode = svgCode;

      }, 10);

    });
  }

  ngOnInit() {
    mermaid.initialize({startOnLoad: true, theme: 'forest'});
  }

}
