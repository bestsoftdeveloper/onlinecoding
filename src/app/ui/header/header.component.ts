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

  public user: any;
  canEditNews:boolean =false;
  canRegisterCourse: boolean = true;

  constructor (private localStorageService: LocalStorageService,
               private pubSubService: PubSubService)
  {
    this.user = localStorageService.get('user');
    this.pubSubService.subscribe("login", (userData)=>{
      this.user  = userData;
      if(this.user) {
        const userPermission: number = this.user.permission || 0;
        this.canEditNews = ((userPermission & Permissions.Roles.EditNews) === Permissions.Roles.EditNews);
        this.canRegisterCourse = (!this.user.registered);
      }
    });

    this.pubSubService.subscribe("logout", (userData)=>{
      this.user  = null;
      this.localStorageService.remove('user');

    });
    if(this.user) {
      const userPermission: number = this.user.permission || 0;
      this.canEditNews = ((userPermission & Permissions.Roles.EditNews) === Permissions.Roles.EditNews);
      this.canRegisterCourse = (!this.user.registered);
    }
  }

  title:"asfasf";
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }


  logout()
  {
    this.pubSubService.publish("logout",null);

  }


}
