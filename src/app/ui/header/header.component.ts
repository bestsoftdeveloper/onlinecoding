import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {PubSubService} from "../../services/pubsub/pubsub";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private user: any;
  constructor (private localStorageService: LocalStorageService,
               private pubSubService: PubSubService)
  {
    this.user = localStorageService.get('user');
    this.pubSubService.subscribe("login", (userData)=>{
      console.log("LOGIN EVENT rECEIVED");
      this.user  = userData.data;
    });
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

  addQuestion()
  {

  }

}
