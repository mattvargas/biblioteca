import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ResultadoPage } from "../resultado/resultado";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {


  buscarLivro: any;
  buscarAutor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  buscarLivros() {
    this.navCtrl.push(ResultadoPage, {
      buscarLivro: this.buscarLivro
    });
  }

  buscarAutor() {
    this.navCtrl.push(ResultadoPage, {
      buscarAutor: this.buscarAutor

    });

  }
}
