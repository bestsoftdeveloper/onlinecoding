import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-typo',
  templateUrl: './typo.component.html',
  styleUrls: ['./typo.component.css']
})

export class TypoComponent implements OnInit {


  ngOnInit() {
    // https://github.com/mattboldt/typed.js/
    var typed = new Typed(".element", {
      stringsElement: '#typed-strings',
      //smartBackspace: true, // Default value
      loop: true,
      typeSpeed: 80
    });
  }

}
