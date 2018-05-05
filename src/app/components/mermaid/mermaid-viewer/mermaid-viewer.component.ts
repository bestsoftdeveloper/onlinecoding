import { Component, OnInit } from '@angular/core';
import mermaid from 'mermaid';
import {UUID} from 'angular2-uuid';
declare const mermaid;

@Component({
  selector: 'app-mermaid-viewer',
  templateUrl: './mermaid-viewer.component.html',
  styleUrls: ['./mermaid-viewer.component.scss']
})
export class MermaidViewerComponent implements OnInit {

  constructor() { }

  code:string = "";
  renderedCode = null;
  mdi = null;


  async codeChanged(){
    var that = this;
    var hack = Math.random().toString(36).substring(7).replace(/\d/, "a")
    // mermaid.render(hack, this.code, function(svgCode) {
    //   let timeoutId = setTimeout(() => {
    //     that.renderedCode = svgCode;
    //
    //   }, 10);
    // });

    // this.mdi.render(hack, this.code, function(svgCode) {
    //   let timeoutId = setTimeout(() => {
    //     that.renderedCode = svgCode;
    //
    //   }, 10);
    // });


    // that.renderedCode = await markdownItMermaidPro.mermaid2html(this.code, {});
  }

  ngOnInit() {
    // mermaid.initialize({startOnLoad: true, theme: 'forest'});
    //mermaid.initialize({startOnLoad: true});
    // this.mdi = markdownIt();
    // this.mdi.use(markdownItMermaid);


  }

}
