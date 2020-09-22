import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotificationCenterModule } from 'notification-center';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotificationCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
