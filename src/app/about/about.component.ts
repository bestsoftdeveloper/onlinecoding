import { Component, OnInit } from '@angular/core';
import {utils} from "protractor";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import Permissions from "../facade/permissions";
import NewsType from "../facade/newsTypes";
import {HttpWrapperService} from "../services/http/httpService";
import {UtilsService} from "../services/utils/utilsService";
import {PubSubService} from "../services/pubsub/pubsub";
import {NewsService} from "../ui/news-management/services/newsService";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
  export class AboutComponent implements OnInit {

  constructor(private httpService: HttpWrapperService,
              private utilsService: UtilsService,
              private pubSub: PubSubService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private newsService: NewsService
  ) {
    this.user = localStorageService.get('user');
  }
  user: any = null;

  canEditNews: boolean = false;

  async ngOnInit() {
    await this.getNews(new Date());
    const userPermission : number = this.user.permission || 0;
    this.canEditNews = ((userPermission & Permissions.Roles.EditNews) === Permissions.Roles.EditNews);
  }

  newsObject : any = {};

  externalConfig: any = {
    lineNumbers: false
  };

  async previewsNews()
  {
    let date: Date = new Date();
    if(this.newsObject && this.newsObject.date)
    {
      date = new Date(this.newsObject.date.jsdate);
    }
    date.setSeconds(date.getSeconds() -1);
    this.getNews(date);
  }

  async getNews(dateValue)
  {
    this.newsObject = await this.newsService.getNews(NewsType.newsType.about, dateValue);
  }



  edit()
  {
    this.pubSub.setKeyValue('news', this.newsObject);
    this.router.navigate(['/addNews']);
  }

}
