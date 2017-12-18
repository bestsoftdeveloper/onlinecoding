import {Component, OnInit, OnDestroy, ViewChild, AfterViewChecked} from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import {NgForm} from '@angular/forms';
import { HttpWrapperService } from '../services/http/httpService'
import { AuthService } from "angular2-social-login";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnDestroy  {

  private text: string;
  private  httpService: HttpWrapperService;
  public user;
  sub: any;

  formErrors = {
    'email': 'ddd',
    'password': 'sss'
  };

  myForm: NgForm;
  @ViewChild('myForm') currentForm: NgForm;

  email: string = '';
  password: string = '';

  constructor(public _auth: AuthService, httpService: HttpWrapperService,
              private router: Router,
              private localStorageService: LocalStorageService)
  {
    this.httpService = httpService;
    this.text = 'console.log("start");';
  }

  validateEmail(emailValue)
  {
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

  loginWithFB(){
    debugger;
    const provider = 'facebook';
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        debugger;
        console.log(data);
        //user data
        //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google)
      }
    )
  }

  logoutFB(){

    this._auth.logout().subscribe(
      (data)=>
      {
        console.log(data);
        this.user=null;
      }
    )
  }

  async submitForm()
  {
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

    const loginResponse  = await this.httpService.postJson("login",loginRequest);

    debugger;
    this.localStorageService.add('user',loginResponse);
    this.router.navigate(['/home'], { queryParams: { returnUrl: 'sd' }});

  }

  ngOnDestroy(){
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

}
