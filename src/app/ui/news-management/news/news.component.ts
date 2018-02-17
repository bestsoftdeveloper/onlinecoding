import {Component, OnInit, Input} from '@angular/core';
import {PubSubService} from "../../../services/pubsub/pubsub";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() newsObject: Object;
  @Input() canEditNews: boolean = false;


  constructor( private pubSub: PubSubService,
               private router: Router) { }



  ngOnInit() {
  }

  edit()
  {
    this.pubSub.setKeyValue('news', this.newsObject);
    this.router.navigate(['/addNews']);
  }

}
