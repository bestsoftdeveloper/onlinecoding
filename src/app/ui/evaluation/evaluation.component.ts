import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {

  private user: any;

  public evaluationQuizCriteria: any  = {
    categoryId: "5a6043ecb26e4c27c08f57de"
  }



  constructor (private localStorageService: LocalStorageService)
  {
    this.user = localStorageService.get('user');
    // if(!this.user)
    // {
    //   this.user = {name: 'john'};
    // }
  }


}


