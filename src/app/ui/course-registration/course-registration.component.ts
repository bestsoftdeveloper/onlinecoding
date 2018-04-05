import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpWrapperService} from "../../services/http/httpService";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {PubSubService} from "../../services/pubsub/pubsub";
import {LocalizationService} from "../../services/localization/localization.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss']
})
export class CourseRegistrationComponent implements OnInit {

  canRegisterCourse: boolean = true;
  message:string= "";
  showRegisterButton =true;
  public user: any = null;

  ui:any ={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  };
  @ViewChild('subForm') currentForm: NgForm;
  constructor(private httpService: HttpWrapperService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private pubSubService: PubSubService,
              public localizationService: LocalizationService
  ) {
    this.user = localStorageService.get('user');
    if(this.user) {
      this.showRegisterButton = (!this.user.registered);
      if(this.user.registered) {
        this.message = "Sunteti inregistrati";
      }
    }
  }

  ngOnInit() {
  }


  markAsDirty(ctrlName, dirty = true){
    this.currentForm.controls[ctrlName].markAsDirty({onlySelf:dirty});
  }

  validateInput(ctrlName){
    this.currentForm.controls[ctrlName].markAsDirty();
    return this.currentForm.controls[ctrlName].valid;
  }
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
    let isFormOk  = true;
    if(!this.user){
      let isCtrlValid = this.validateInput('firstName');
      if(!isCtrlValid){isFormOk = false;}
      isCtrlValid = this.validateInput('lastName');
      if(!isCtrlValid){isFormOk = false;}

      isCtrlValid = this.validateInput('email');
      if(!isCtrlValid){isFormOk = false;}
      isCtrlValid = this.validateInput('password');
      if(!isCtrlValid){isFormOk = false;}

      if(!isFormOk) {
        return;
      }

      body.data = {
        firstName: this.ui.firstName,
        lastName: this.ui.lastName,
        email: this.ui.email,
        password: this.ui.password
      };
    }


    const resp  = await this.httpService.postJson('api/register', body);

    this.registered(resp);

  }

}
