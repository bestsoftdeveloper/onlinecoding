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
  public mask = ['(', /[0-9]/, /\d/, /\d/, /\d/,')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,  /\d/];
// /^\d{4}-\d{3}-\d{3}/;
//  public mask = /^\d{4}-\d{3}-\d{3}/;

  ui:any={
    companyLogo:null,
    companyName:'',
    phone:'',
    firstName:'',
    lastName:'',
    email:'',
    userOrCompany:0,
    allowLogo:false
  };

  formErrors = {
    'email': '',
    'password': ''
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

  markAsDirty(ctrlName, dirty = true){
    this.currentForm.controls[ctrlName].markAsDirty({onlySelf:dirty});
  }

  validateInput(ctrlName){
    this.currentForm.controls[ctrlName].markAsDirty();
    return this.currentForm.controls[ctrlName].valid;
  }

  async submitForm()
  {
    debugger;
    var isCtrlValid  =false;
    isCtrlValid = this.validateInput('firstName');
    isCtrlValid = this.validateInput('lastName');
    isCtrlValid = this.validateInput('phone');
    if(this.ui.userOrCompany == 0){
      this.markAsDirty('numeFirma',false);
      this.markAsDirty('allowLogo',false);
    }else{
      this.markAsDirty('numeFirma');
      this.markAsDirty('allowLogo');
    }

    isCtrlValid = this.validateInput('emailu');
    isCtrlValid = this.validateInput('password');


    var isValid =  this.currentForm.valid;
    if(!isValid){
      return;
    }

    this.uiMessage = '';
    debugger;

    // if(!this.validateEmail(this.email))
    // {
    //   return;
    // }

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
