import {Component, OnInit} from '@angular/core';
import {utils} from "protractor";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import Permissions from "../../facade/permissions";
import NewsType from "../../facade/newsTypes";
import {HttpWrapperService} from "../../services/http/httpService";
import {UtilsService} from "../../services/utils/utilsService";
import {PubSubService} from "../../services/pubsub/pubsub";
import {NewsService} from "../news-management/services/newsService";

import * as moment from 'moment'; // add this 1 of 4

import {MomentModule} from 'angular2-moment/moment.module';

@Component({
  selector: 'app-daily-challenge',
  templateUrl: './daily-challenge.component.html',
  styleUrls: ['./daily-challenge.component.scss']
})
export class DailyChallengeComponent implements OnInit {

  constructor(private httpService: HttpWrapperService,
              private utilsService: UtilsService,
              private pubSub: PubSubService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private newsService: NewsService) {
    this.user = localStorageService.get('user');
    let now = moment(); // add this 2 of 4
    // console.log('hello world', now.format()); // add this 3 of 4
    // console.log(now.add(7, 'days').format()); // add this 4of 4
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
    if (this.newsObject && this.newsObject.items && this.newsObject.items.length > 0) {
      this.problem = this.newsObject.items[0];
    }
  }

  newsObject: any = {};
  problem: any = {
    content: "",
    testCases: null
  };
  // externalConfig: any = {
  //   lineNumbers: true
  // };

  currentSolution : any = null;
  showSolvedSolution(sol)
  {
    // sol.selected = true;
    this.currentSolution = sol;
  }

  async previewsNews() {
    let date: Date = new Date();
    if (this.newsObject && this.newsObject.date) {
      date = new Date(this.newsObject.date.jsdate);
    }
    date.setSeconds(date.getSeconds() - 1);
    this.getNews(date);
  }

  async getNews(dateValue) {
    this.newsObject = await this.newsService.getNews(NewsType.newsType.exercise, dateValue);
    await  this.getPagedSolutionsForAExercise();
  }

  solvedSolutions: Array<any> = [];
  pager = {
    pageNo: 1,
    itemsOnPage: 3,
    pageCount: 0,
    count: 0
  };

  async pageChanged(data)
  {
    this.pager.pageNo = data.page;
    this.getPagedSolutionsForAExercise();
  }
  async getPagedSolutionsForAExercise() {
    if (!this.newsObject) {
      return;
    }
    const data= {
      pager: this.pager,
      filter: {
        problemId: this.newsObject._id
      }
    };

    const resp = await this.newsService.getPagedSolutionsForAExercise(data);
    this.pager.count = resp.data.count;
    this.pager.pageCount = 0;
    if(this.pager.count>0){
      this.pager.pageCount = Math.floor(this.pager.count / this.pager.itemsOnPage)+1;
    }

    for(var i=0;i<resp.data.items.length;i++){
      var x = resp.data.items[i];
      for(var j=0;j<x.items.length;j++){
        var y = x.items[j];
        if(!y.userId){
          y.userId = {
            email:''
          };
        }

      }
    }
    this.solvedSolutions = resp.data.items;
  }


  edit() {
    this.pubSub.setKeyValue('news', this.newsObject);
    this.router.navigate(['/addNews']);
  }

}
