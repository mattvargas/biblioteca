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
import { MoodleService } from "../providers/moodle/moodle";
import {LoginPage} from "../pages/login/login";
import {DashboardPage} from "../pages/dashboard/dashboard";
<<<<<<< HEAD
import {HttpClientModule} from "@angular/common/http";

=======


import Livro = livro.Livro;
>>>>>>> 3fdaf82dc9c3afbb1c87cc198636241bbdd9d61e

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
