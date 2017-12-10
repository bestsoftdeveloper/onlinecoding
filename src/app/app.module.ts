import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { CodingComponent } from './coding/coding.component';
import { HttpWrapperService } from './services/http/httpService'
import { AppRoutingModule }        from './routes/app-routing.module';
import { HomeComponent }        from './home/home.component';
import { NotFoundComponent }        from './not-found/notfound.component';
import { AboutComponent }  from './about/about.component';
import { JavascriptComponent }  from './cursuri/javascript/javascript.component';
import { ObjectKeysPipe }  from './pipes/objectKeys.pipe';
import { HtmlNodeComponent }  from './cursuri/javascript/components/htmlnode.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe'
import { CodeExecutionService } from './services/code/codeExecution'
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { LoginComponent } from './login/login.component'

let providers = {
  // "google": {
  //   "clientId": "GOOGLE_CLIENT_ID"
  // },
  // "linkedin": {
  //   "clientId": "LINKEDIN_CLIENT_ID"
  // },
  "facebook": {
    "clientId": "1123667347736940",
    "apiVersion": "v2.11" //like v2.4
  }};

@NgModule({
  declarations: [
    AppComponent,
    CodingComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    JavascriptComponent,
    ObjectKeysPipe,
    HtmlNodeComponent,
    EscapeHtmlPipe,
    LoginComponent
  ],
  imports: [
    AceEditorModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Angular2SocialLoginModule
  ],
  providers: [HttpWrapperService,CodeExecutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
