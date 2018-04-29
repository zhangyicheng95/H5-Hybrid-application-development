import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from "@angular/http";

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnHelloPage:true,
      backButtonText:'',
      backButtonIcon:'md-back',
      tabsHideOnSubPages: 'true' 
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
