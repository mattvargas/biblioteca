import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ListPage} from "../list/list";
import {ResultadoPage} from "../resultado/resultado";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  buscaLivro: any;
  buscaAutor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  buscarLivros() {
    this.navCtrl.push(ResultadoPage, {
      buscarLivro: this.buscaLivro
    });
  }

  buscarAutor() {
    this.navCtrl.push(ResultadoPage, {
      buscarAutor: this.buscarAutor

    });

  }
}
