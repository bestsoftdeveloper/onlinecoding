import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpWrapperService} from "../../../services/http/httpService";
import {NgForm} from "@angular/forms";
import {AuthService} from "angular2-social-login";
import {LocalStorageService} from "angular-2-local-storage";
import {PubSubService} from "../../../services/pubsub/pubsub";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  ngOnInit(): void {
  }

  private text: string;
  private  httpService: HttpWrapperService;
  public user;
  sub: any;

  formErrors = {
    'email': 'ddd',
    'password': 'sss'
  };

  // createUserForm: NgForm;
  @ViewChild('createUserForm') currentForm: NgForm;

  email: string = '';
  password: string = '';
  uiMessage: string = '';

  constructor(public _auth: AuthService, httpService: HttpWrapperService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private pubSubService: PubSubService
              //private fb: FacebookService
  )
  {
    this.httpService = httpService;
    this.text = 'console.log("start");';

    // fb.init({
    //   appId: '1123667347736940',
    //   version: 'v2.11'
    // });
  }

  validateEmail(emailValue)
  {
    // var controls = this.currentForm.form.controls;
    // if(!controls.email.isDirty)
    // {
    //   return true;
    // }
    if(!emailValue)
    {
      this.formErrors.email = "Email";
      return false;
    }
    this.formErrors.email = "";
    return true;
  }

  validatePassword(passwordValue)
  {
    if(!passwordValue)
    {
      this.formErrors.password = "Parola";
      return false;
    }
    this.formErrors.password = "";
    return true;
  }

  loginOk(resp)
  {
    this.localStorageService.add('user',resp.data);
    this.pubSubService.publish("login", resp.data);
    this.router.navigate(['/home']);
    // this.router.navigate(['/home'], { queryParams: { returnUrl: 'sd' }});
  }

  loginFailure()
  {

  }

  // private handleError(error) {
  //   console.error('Error processing action', error);
  // }


  async submitForm()
  {
    this.uiMessage = '';
    debugger;
    if(!this.validateEmail(this.email))
    {
      return;
    }
    if(!this.validatePassword(this.password))
    {
      return;
    }

    const loginRequest = {
      email:this.email,
      password: this.password
    };

    const loginResponse  = await this.httpService.postJson("api/security/createUser",loginRequest);

    if(loginResponse.success === false)
    {
      this.uiMessage = 'Invalid login ';
      return;
    }
    debugger;
    this.loginOk(loginResponse);

  }

  ngOnDestroy(){
    // if(this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

}
