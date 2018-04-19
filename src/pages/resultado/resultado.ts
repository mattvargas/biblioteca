import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Books } from '../books';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }


  dadosExibidos: Books [];

  constructor(
    private web: HttpClient ) { }

  ngOnInit() {
    this.web.listaLivros().subscribe(ret => {
      this.dadosExibidos = < Books []>ret;
    });
  }

  exibeDetalhes() {
    this.rota.navigate(['/detalhes/' + detalhe.id])
  }

}