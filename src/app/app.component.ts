import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {SocketService} from "./services/socket/socketService";
import markdownIt from 'markdown-it'
import markdownItMermaid from 'markdown-it-mermaid'
import mermaid from 'mermaid';
import {PubSubService} from "./services/pubsub/pubsub";
import {LocalizationService} from "./services/localization/localization.service";
import {HttpWrapperService} from "./services/http/httpService";
import {LocalStorageService} from "angular-2-local-storage";

// declare const mermaid;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PubSubService, LocalizationService ],
})
export class AppComponent implements OnInit {
  // mdi = markdownIt();
  // mdi.use(markdownItMermaid)

   rrr: any = null;

  title = 'app';

  constructor(private socket: SocketService,
              private httpService: HttpWrapperService,
              private localStorageService: LocalStorageService,
              private pubSubService: PubSubService)
  {
    // this.socket.connect();
  }

  async ngOnInit(): void {
    const req = {
      data:{},
      proxy: {
        method: "checkToken",
        module: "security"
      }
    };
    const resp = await this.httpService.postJson('api/private/', req);

    if(resp.success) {
      // console.log(resp);
      this.localStorageService.add('user',resp.data);
      // this.pubSubService.publish("login", resp.data);
    }
//     mermaid.initialize({startOnLoad:true});
//     var that = this;
// //     var aaa = "";
//     mermaid.render('theGraph', "sequenceDiagram    A->> B: Query    B->> C: Forward query    Note right of C: Thinking...    C->> B: Response    B->> A: Forward response", function(svgCode) {
//       that.rrr = svgCode;
//     });

  }

}
