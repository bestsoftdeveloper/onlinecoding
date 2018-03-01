import { Component, OnInit } from '@angular/core';
import {HttpWrapperService} from "../../../services/http/httpService";
import {UtilsService} from "../../../services/utils/utilsService";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private httpService: HttpWrapperService,
              private utilsService: UtilsService
              ) { }

   ngOnInit() {
     this.getPagedUsers();
  }

  pager = {
    pageNo: 1,
    itemsOnPage: 3,
    pageCount: 0,
    count: 0,
    items: []
  };

  async getPagedUsers() {
    const data= {
      pager: this.pager,
      filter: {
      }
    };

    const body :any = {};
    body.proxy = {
      module: 'security',
      method: 'getUsers',
    };
    body.data = data;

    const resp = await  this.httpService.postJson('api/private', body);

    this.pager.count = resp.data.count;
    this.pager.pageCount = 0;

    //if(this.pager.count>0){
      this.pager.pageCount = Math.floor(this.pager.count / this.pager.itemsOnPage)+1;
    //}

    this.pager.items = resp.data.items;
  }

  async pageChanged(data)
  {
    this.pager.pageNo = data.page;
    this.getPagedUsers();
  }
}
