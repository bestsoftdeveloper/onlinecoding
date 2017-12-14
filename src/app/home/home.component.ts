import { Component, OnInit, Injectable, ViewChild  } from '@angular/core';
import { HttpWrapperService } from '../services/http/httpService'
import  { SwipperComponent } from '../ui/swipper/swipper.component';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

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

  onChange(code) {
    console.log('new code', code);
  }

  ngOnInit() {

   // https://github.com/mattboldt/typed.js/
    var typed = new Typed(".element", {
      stringsElement: '#typed-strings',
      //smartBackspace: true, // Default value
      loop: true,
      typeSpeed: 80
    });
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
