import { Component, OnInit } from '@angular/core';
import {HttpWrapperService} from "../../services/http/httpService";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {PubSubService} from "../../services/pubsub/pubsub";

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss']
})
export class CourseRegistrationComponent implements OnInit {

  constructor(private httpService: HttpWrapperService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private pubSubService: PubSubService
  ) { }

  ngOnInit() {
  }

  message:string= "";
  showRegisterButton =true;

  registered(resp)
  {
    if(!resp.success){
      return;
    }
    this.showRegisterButton = false;
    this.message = "Inregistrarea a fost efctuata cu succes";

    this.localStorageService.add('user',resp.data);
    this.pubSubService.publish("login", resp.data);

    let timeoutId = setTimeout(() => {
      // console.log('hello');
      this.router.navigate(['/home']);

    }, 3000);
    // this.router.navigate(['/home']);
    // this.router.navigate(['/home'], { queryParams: { returnUrl: 'sd' }});
  }

  async registerToCourse(){
    const body :any = {};
    body.proxy = {
      module: 'register',
      method: 'register',
    };
    body.data = {};

    console.log(body);
    const resp  = await this.httpService.postJson('api/register', body);

    this.registered(resp);

  }

}
