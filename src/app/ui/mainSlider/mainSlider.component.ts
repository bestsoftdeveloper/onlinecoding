import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainSlider.component.html',
  styleUrls: ['./mainSlider.component.css']
})

export class MainSliderComponent implements OnInit {

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

  ngOnInit() {
  }

}
