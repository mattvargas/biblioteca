import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { ConsumoapiProvider} from "../../providers/consumoapi/consumoapi";

/**
 * Generated class for the ListadelivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listadelivros',
  templateUrl: 'listadelivros.html',
})
export class ListadelivrosPage {

  ListarLivros: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public APILivros:ConsumoapiProvider) {
    this.APILivros.listarLivros().subscribe(retorno =>{
      this.ListarLivros=retorno;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadelivrosPage');
  }


}
