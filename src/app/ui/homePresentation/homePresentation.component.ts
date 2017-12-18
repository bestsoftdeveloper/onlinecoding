import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, query, stagger
} from '@angular/animations';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './homePresentation.component.html',
  styleUrls: ['./homePresentation.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.05)',
      })),
      transition('small => large', animate('300ms ease-in')),
      transition('large => small', animate('300ms ease-out')),
    ]),
  ]
})

export class HomePresentationComponent implements OnInit {

  //images = ['images/slider-1.jpg','images/slider-2.jpg','images/slider-3.jpg'];

  images = [
    'images/slider-1.jpg',
    //'images/slider-2.jpg',
    'images/slider-3.png'];

  bkImageUrl= this.images[0];
  timeoutId=null;
  imageIndex = 0;
  counter=0;

  constructor()
  {
    this.timeoutId = setInterval(() => {
      console.log('hello');
      this.bkImageUrl = this.images[this.imageIndex];
      this.imageIndex ++;
      if(this.imageIndex === this.images.length)
      {
        this.imageIndex = 0;
      }
      this.counter++;
      this.state = (this.state === 'small' ? 'large' : 'small');
      setTimeout(() => {
        console.log('hello11');
        this.state = (this.state === 'small' ? 'large' : 'small');
        if(this.counter==2)
        {
          clearTimeout(this.timeoutId);
        }
      }, 300);


    }, 5000);
  }

  state: string = 'small';

  // animateMe() {
  //   this.state = (this.state === 'small' ? 'large' : 'small');
  // }s

  ngOnInit() {
  }

}
