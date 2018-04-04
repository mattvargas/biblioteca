import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from "../list/list";
import { Form } from '@angular/forms';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  buscaLivro: any;
  buscaAutor: any;

  constructor(public navCtrl: NavController) {

  }

  buscarLivros() {
    this.navCtrl.push(ListPage, {
      buscarLivro: this.buscaLivro
    });
  }

    buscarAutor(){
      this.navCtrl.push(ListPage, {
        buscarAutor: this.buscarAutor
      });

    }


}
