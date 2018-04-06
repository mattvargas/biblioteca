import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";



@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  sairLogin(){
    this.navCtrl.push(HomePage)
  }

}
