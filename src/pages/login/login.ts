import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";
import {HttpClient} from "@angular/common/http";
import {AsyncLocalStorage} from "angular-async-local-storage";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    usuario:any
    senha : any


  constructor(public navCtrl: NavController, public navParams: NavParams)
              {

  }
}






