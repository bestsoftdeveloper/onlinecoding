import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../../services/localization/localization.service";

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainSlider.component.html',
  styleUrls: ['./mainSlider.component.css']
})

export class MainSliderComponent implements OnInit {

  constructor( public localizationService: LocalizationService){

  }

  selectedHero: any = {
    name: 'ds'
  };
  config: any  = {
    name:'tesstSwipper',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    slidesPerView:3,
    loop:true,
    on: {
      init: function () {
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

  ngOnInit() {
  }

}
