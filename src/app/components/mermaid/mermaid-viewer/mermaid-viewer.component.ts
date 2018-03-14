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
    var hack = Math.random().toString(36).substring(7).replace(/\d/, "a")
    mermaid.render(hack, this.code, function(svgCode) {
      let timeoutId = setTimeout(() => {
        that.renderedCode = svgCode;

      }, 10);

    });
  }

  ngOnInit() {
    // mermaid.initialize({startOnLoad: true, theme: 'forest'});
    mermaid.initialize({startOnLoad: true});


  }

}
