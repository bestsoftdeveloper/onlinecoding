import {Component, OnInit, OnDestroy} from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { HttpWrapperService } from '../services/http/httpService'
import { AuthService } from "angular2-social-login";

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

  constructor(public _auth: AuthService, httpService: HttpWrapperService)
  {
    this.httpService = httpService;
    this.text = 'console.log("start");';
  }

  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        debugger;
        console.log(data);
        //user data
        //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google)
      }
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
