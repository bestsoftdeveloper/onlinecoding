import { Component, OnInit, Injectable, ViewChild  } from '@angular/core';
import { HttpWrapperService } from '../services/http/httpService'
import {
  trigger,
  state,
  style,
  animate,
  transition, query, stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})

//https://angularfirebase.com/lessons/animation-examples-in-angular-4-3/
@Injectable()

// @ViewChild('usefulSwiper') usefulSwiper: SwipperComponent;

  export class HomeComponent implements OnInit {

  // const interleaveOffset = 0.5;
  // https://codepen.io/udovichenko/pen/LGeQae
  //http://idangero.us/swiper/#.V9C3w4VOLaI
  //http://idangero.us/swiper/api/#initialize
  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView:3,
    loop:true,
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
    effect:'coverflow',//"slide", "fade", "cube", "coverflow" or "flip"
    // coverflow: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 250,
    //   modifier: 1,
    //   slideShadows : false,
    // },
    //tdFlow: {
      // rotate : 30,
      // stretch :10,
      // depth: 150,
      // modifier : 1,
      // shadows:true

    //},

  };

  private text: string;
  private  httpService: HttpWrapperService;
  public codeResult : any;

  constructor(httpService: HttpWrapperService)
  {
    this.httpService = httpService;
    this.text = 'console.log("start");';
  }

  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  onChange(code) {
    console.log('new code', code);
  }

  ngOnInit() {



  }

  async executeCodeOnServer(event)
  {
    const xxx = await this.httpService.postJson('http://localhost:3001/api/funcp',
      {
        code: this.text
      });
    this.codeResult = xxx;
    console.log(xxx);
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
