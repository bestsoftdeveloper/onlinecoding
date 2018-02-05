import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {PubSubService} from "../../services/pubsub/pubsub";
import Permissions from "../../facade/permissions";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private user: any;
  canEditNews:boolean =false;

  constructor (private localStorageService: LocalStorageService,
               private pubSubService: PubSubService)
  {
    this.user = localStorageService.get('user');
    this.pubSubService.subscribe("login", (userData)=>{
      console.log("LOGIN EVENT rECEIVED " + userData);
      this.user  = userData;
    });

    this.pubSubService.subscribe("logout", (userData)=>{
      console.log("LOGOUT EVENT rECEIVED ");
      this.user  = null;
    });
    if(this.user) {
      const userPermission: number = this.user.permission || 0;
      this.canEditNews = ((userPermission & Permissions.Roles.EditNews) === Permissions.Roles.EditNews);
    }
  }

  title:"asfasf";
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }


  logout()
  {
    debugger;
    if(this.user)
    {
      this.localStorageService.remove('user');
      this.user = null;
    }
  }


}
