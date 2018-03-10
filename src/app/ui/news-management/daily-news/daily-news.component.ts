import { Component, OnInit } from '@angular/core';
import {HttpWrapperService} from "../../../services/http/httpService";
import {UtilsService} from "../../../services/utils/utilsService";
import {utils} from "protractor";
import {PubSubService} from "../../../services/pubsub/pubsub";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import Permissions from "../../../facade/permissions";
import NewsType from "../../../facade/newsTypes";
import {NewsService} from "../services/newsService";


@Component({
  selector: 'app-daily-news',
  templateUrl: './daily-news.component.html',
  styleUrls: ['./daily-news.component.scss']
})
export class DailyNewsComponent implements OnInit {

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
    let userPermission : number = 0;
    if(this.user) {
      userPermission = this.user.permission;
    }
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
    this.newsObject = await this.newsService.getNews(NewsType.newsType.news, dateValue);
    // return;
    // if(!dateValue)
    // {
    //   dateValue = new Date;
    // }
    // const body :any = {};
    // body.proxy = {
    //   module: 'news',
    //   method: 'getNews',
    // };
    // body.data = {
    //   filter:{
    //     newsType:1,
    //     date: dateValue,
    //     mili:this.utilsService.date.dateToUtcMilliSecconds(dateValue)
    //   }
    // };
    // console.log(body);
    // const newsDbData =  await this.httpService.postJson('api/news', body);
    //
    // if(!newsDbData.data)
    // {
    //   this.newsObject = null;
    //   return;
    // }
    //
    // const newsDate = new Date(newsDbData.data.date.jsdate);
    // newsDbData.data.date.date ={
    //   year: newsDate.getFullYear(),
    //   month:newsDate.getMonth()+1,
    //   day:newsDate.getDate()
    // };
    //
    //
    // this.newsObject = newsDbData.data;
    // console.log(this.newsObject);
  }



  edit()
  {
    this.pubSub.setKeyValue('news', this.newsObject);
    this.router.navigate(['/addNews']);
  }

}
