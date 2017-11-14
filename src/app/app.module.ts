import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { CodingComponent } from './coding/coding.component';

@NgModule({
  declarations: [
    AppComponent,
    CodingComponent
  ],
  imports: [
    AceEditorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
