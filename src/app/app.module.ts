import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { CodingComponent } from './coding/coding.component';
import { HttpWrapperService } from './services/http/httpService'

@NgModule({
  declarations: [
    AppComponent,
    CodingComponent

  ],
  imports: [
    AceEditorModule,
    BrowserModule,
    HttpModule
  ],
  providers: [HttpWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
