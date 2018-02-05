import {Injectable} from '@angular/core';

import {HttpWrapperService} from "../../../services/http/httpService";
import {UtilsService} from "../../../services/utils/utilsService";
import {PubSubService} from "../../../services/pubsub/pubsub";
import {INewsType} from "./INewsType";

@Injectable()
export class NewsService {


  constructor(private httpService: HttpWrapperService,
              private utilsService: UtilsService
  )
  {
    console.log("ggggggggggggggggg");
  }

  async getNews(newsType, dateValue)
  {
    debugger;
    if(!dateValue)
    {
      dateValue = new Date;
    }
    const body :any = {};
    body.proxy = {
      module: 'news',
      method: 'getNews',
    };
    body.data = {
      filter:{
        newsType:newsType,
        date: dateValue,
        mili:this.utilsService.date.dateToUtcMilliSecconds(dateValue)
      }
    };
    console.log(body);
    const newsDbData =  await this.httpService.postJson('api/news', body);

    if(!newsDbData.data)
    {
      return null;
    }

    const newsObject = newsDbData.data;


    debugger;
    const newsDate = new Date(newsObject.date.jsdate);
    newsObject.date.date ={
      year: newsDate.getFullYear(),
      month:newsDate.getMonth()+1,
      day:newsDate.getDate()
    };

    return newsObject;

  }

}
