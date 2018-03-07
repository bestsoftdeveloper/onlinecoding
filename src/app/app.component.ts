import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {SocketService} from "./services/socket/socketService";
import markdownIt from 'markdown-it'
import markdownItMermaid from 'markdown-it-mermaid'
import mermaid from 'mermaid';

// declare const mermaid;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // mdi = markdownIt();
  // mdi.use(markdownItMermaid)

   rrr: any = null;
  ngOnInit(): void {
//     mermaid.initialize({startOnLoad:true});
//     var that = this;
// //     var aaa = "";
//     mermaid.render('theGraph', "sequenceDiagram    A->> B: Query    B->> C: Forward query    Note right of C: Thinking...    C->> B: Response    B->> A: Forward response", function(svgCode) {
//       that.rrr = svgCode;
//     });

  }
  title = 'app';

  constructor(private socket: SocketService)
  {
    // this.socket.connect();
  }
}
