import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultadoPage } from '../pages/resultado/resultado';
import { ListadelivrosPage} from "../pages/listadelivros/listadelivros";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import { ConsumoapiProvider } from '../providers/consumoapi/consumoapi';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultadoPage,
    ListadelivrosPage,

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
    ResultadoPage,
    ListadelivrosPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsumoapiProvider,


  ]
})
export class AppModule {}
