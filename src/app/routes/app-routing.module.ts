import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from '../home/home.component';
import { NotFoundComponent }    from '../not-found/notfound.component';
import { AboutComponent }  from '../about/about.component';
import { JavascriptComponent }  from '../cursuri/javascript/javascript.component';
import { LoginComponent }  from '../login/login.component';
import {ResetPasswordComponent} from "../login/resetpassword/resetpassword.component";
import {AuthGuard} from "./auth-guard.service";
import {EvaluationComponent} from "../ui/evaluation/evaluation.component";
import {QuizAddComponent} from "../ui/evaluation/quiz/add/quiz.add.component";
import {CourseRegistrationComponent} from "../ui/course-registration/course-registration.component";
import {CoursesComponent} from "../ui/courses/courses.component";
import {NewsManagementComponent} from "../ui/news-management/news-management.component";
import {DailyNewsComponent} from "../ui/news-management/daily-news/daily-news.component";
import {DailyChallengeComponent} from "../ui/daily-challenge/daily-challenge.component";
import {CreateUserComponent} from "../ui/user/create-user/create-user.component";
import {ForgotPasswordComponent} from "../ui/user/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "../ui/user/change-password/change-password.component";
import {EditUserComponent} from "../ui/user/edit-user/edit-user.component";
import {ConfirmEmailComponent} from "../ui/user/confirm-email/confirm-email.component";
import {UserListComponent} from "../ui/user/user-list/user-list.component";


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'users',
    component: UserListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'edituser',
    component: EditUserComponent
  },
  {
    path: 'confirmemail',
    component: ConfirmEmailComponent
  },
  {
    path: 'resetpassword',
    component: ChangePasswordComponent
  },

  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'js',
    component:JavascriptComponent
  },
  {
    path:'login',
    component:LoginComponent,
    // children: [
    //   {
    //     path: 'resetpassword',
    //     component: ResetPasswordComponent
    //   },
    // ]
  },
  {
    path:'createUser',
    component:CreateUserComponent
  },

  {
    path:'resetpassword',
    component:ResetPasswordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'survey',
    component:EvaluationComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path: 'add',
        component: QuizAddComponent

      }
    ]
  },

  {
    path:'addquestions',
    component:QuizAddComponent
  },
  {
    path:'addNews',
    component:NewsManagementComponent
  },
  {
    path:'dailyNews',
    component:DailyNewsComponent
  },
  {
    path:'dailyChallenge',
    component:DailyChallengeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'registercourse',
    component:CourseRegistrationComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //CanDeactivateGuard,
    //SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
