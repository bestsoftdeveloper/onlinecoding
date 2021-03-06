import { Component, OnInit } from '@angular/core';
// import { Typed } from 'typed.js/src/typed.js';
import * as Typed from 'typed.js';
import {LocalizationService} from "../../services/localization/localization.service";
import {PubSubService} from "../../services/pubsub/pubsub";

@Component({
  selector: 'app-typo',
  templateUrl: './typo.component.html',
  styleUrls: ['./typo.component.css']
})

export class TypoComponent implements OnInit {

  typed=null;
  options = {
    strings: ['Innovation.', 'Discovery.'],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: true,
    cursorChar: '|',
    loop: true
  };


  constructor( private pubSubService: PubSubService, public localizationService: LocalizationService) {

    pubSubService.subscribe('change-language', (val)=>{
      if(this.typed !== undefined){
          try {
            this.typed.stop();
            this.typed.destroy();
            this.typed = null;
          }
          catch(ex){

          }

      }

      setTimeout(() => {
        this.typed = new Typed(".element", {
          stringsElement: '#typed-strings',
          //smartBackspace: true, // Default value
          loop: true,
          typeSpeed: 80,
          // strings: ["This is a JavaScript library", "This is an ES6 module"],//this.localizationService.language.home.typoText
        });
      }, 300);


    });
  }

  ngOnInit() {
    // https://github.com/mattboldt/typed.js/

  }

  ngAfterViewInit(){
    debugger;
    // this.typed = new Typed(".element", this.options);

    this.typed = new Typed(".element", {
      stringsElement: '#typed-strings',
      //smartBackspace: true, // Default value
      loop: true,
      typeSpeed: 80,
    });
  }

}
