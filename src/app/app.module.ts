import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import  { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProvedorProvider } from '../providers/provedor/provedor';
import {HttpClientModule} from "@angular/common/http";
import { MoodleService } from "../providers/moodle/moodle";
import {LoginPage} from "../pages/login/login";
import {DashboardPage} from "../pages/dashboard/dashboard";


import Livro = livro.Livro;

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashboardPage,
    AsyncLocalStorageModule,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DashboardPage,
    LoginPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvedorProvider,
    MoodleService,

  ]
})
export class AppModule {}
