import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../services/utils/utilsService";
import {HttpWrapperService} from "../../services/http/httpService";
import {IMyDpOptions} from "mydatepicker";
import {Router} from "@angular/router";
import {PubSubService} from "../../services/pubsub/pubsub";
import TimerSettings from "../../facade/timerSettings";
import NewsType from "../../facade/newsTypes";
import { BsDropdownModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-news-management',
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.scss']
})
export class NewsManagementComponent implements OnInit {

  constructor(private utilsService: UtilsService, private httpService: HttpWrapperService, private pubSub: PubSubService) { }

  ItemTypes = [{id:1, name:'html'},{id:2, name:'code'}];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy',
  };

  newsItem: any = {
    guid:"",
    ItemTypeValue:2,
    content:"",
    class:"",
    p:0
  };

  ItemTypeValue = 1;

  newsTypes: Array<any> =  NewsType.Items;

  newsObject: any = {
    newsType:1,//news
    title:"",
    titleClass:"",
    items:[],
    timer:  TimerSettings.timer,
    date:this.getDateObject(new Date()),
    selectedNewsItem: null,
    p:1
  };

  ngOnInit() {
    let newsItem = this.pubSub.getKeyValue('news');
    if(!newsItem)
    {
      return;
    }

    if(!newsItem.timer)
    {
      newsItem.timer = TimerSettings.timer;
    }

    this.newsObject = newsItem;

  }

  // newsTypeChange($event)
  // {
  //   $event.preventDefault();
  //   this.newsObject.newsType = parseInt($event.target.value);
  // }
  getDateObject(date)
  {
    return {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }
    };
  }
  dateFromObject(obj)
  {
    return new Date(obj.year,obj.month,obj.day);
  }

  addNewsItem()
  {
    const newNewsItem: any = {...this.newsItem};
    newNewsItem.p = (this.newsObject.items.length) * 2 +1;
    newNewsItem.guid = this.utilsService.uuid();
    newNewsItem.class = "";


    this.newsObject.items.push(newNewsItem);
    this.selectNewsItem(newNewsItem);
  }

  selectNewsItem(it)
  {
    this.newsObject.selectedNewsItem = it;
  }

  deleteNewsItem(it)
  {
    this.newsObject.items= this.newsObject.items.filter(el=>el.guid != it.guid);
  }

  async saveNews()
  {
    const now = new Date();
    this.newsObject.newsType = parseInt(this.newsObject.newsType);
    this.newsObject.p = parseInt(this.newsObject.p);

    const dbNews: any  = { ...this.newsObject };
    // .dbNews.date = this.utilsService.date.dateToUtcMilliSecconds(new Date())
    if(!dbNews.date.jsdate)
    {
      dbNews.date.jsdate = new Date(dbNews.date.date.year,dbNews.date.date.month -1,dbNews.date.date.day, now.getHours(),now.getMinutes(),now.getSeconds(),0);
      dbNews.date.mili = this.utilsService.date.dateToUtcMilliSecconds(dbNews.date.jsdate);

    }
    const body :any = {};
    body.proxy = {
      module: 'news',
      method: 'add_edit',
    };
    body.data = dbNews;

    console.log(body);
    await this.httpService.postJson('api/news', body);

    this.pubSub.setKeyValue('news',null);
  }



}
