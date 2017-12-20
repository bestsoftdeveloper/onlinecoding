import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './ui/header/header.component';
import  { MainSliderComponent } from './ui/mainSlider/mainSlider.component';
import  { TypoComponent } from './ui/type/typo.component';
import  { HomePresentationComponent } from './ui/homePresentation/homePresentation.component';
import { TooltipDirective } from 'ng2-tooltip-directive/components';
import { SwiperModule } from 'angular2-useful-swiper';
import { ResetPasswordComponent } from './login/resetpassword/resetpassword.component';
import { FooterComponent } from './ui/footer/footer.component';
// import { SwiperModule } from '../node_modules/angular2-useful-swiper';
import {Component} from "@angular/core";
import { LocalStorageModule } from 'angular-2-local-storage';

import  { SwipperComponent } from './ui/swipper/swipper.component';
import {DropdownModule} from "ngx-dropdown";

import { FacebookModule } from 'ngx-facebook';
import {AuthGuard} from "./routes/auth-guard.service";

import { EvaluationComponent } from './ui/evaluation/evaluation.component';
import { QuizAddComponent } from './ui/evaluation/quiz/add/quiz.add.component';
import { QuizFooterComponent } from './ui/evaluation/quiz/footer/quiz.footer.component';
import { QuizHeaderComponent } from './ui/evaluation/quiz/header/quiz.header.component';
import { QuizManagerComponent } from './ui/evaluation/quiz/manager/quiz.manager.component';
import { QuizQuestionComponent } from './ui/evaluation/quiz/question/quiz.question.component';
import { ServicesComponent } from './ui/services/services.component';

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
    LoginComponent,
    HeaderComponent,
    MainSliderComponent,
    SwipperComponent,
    TypoComponent,
    HomePresentationComponent,
    TooltipDirective,
    ResetPasswordComponent,
    FooterComponent,
    EvaluationComponent,
    QuizAddComponent,
    QuizFooterComponent,
    QuizHeaderComponent,
    QuizManagerComponent,
    QuizQuestionComponent,
    ServicesComponent
  ],
  imports: [
    AceEditorModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Angular2SocialLoginModule,
    SwiperModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    DropdownModule,
    BrowserAnimationsModule,
    FacebookModule.forRoot()
  ],
  providers: [HttpWrapperService,CodeExecutionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
