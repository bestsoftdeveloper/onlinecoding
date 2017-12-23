import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private user: any;
  constructor (private localStorageService: LocalStorageService)
  {
    this.user = localStorageService.get('user');
    // if(!this.user)
    // {
    //   this.user = {name: 'john'};
    // }
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
