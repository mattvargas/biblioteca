import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MoodleService} from "../../providers/moodle/moodle";
import {HttpClient} from "@angular/common/http";


@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'dashboard.html',
  providers: [MoodleService]
})
export class DashboardPage {

  tok:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http : HttpClient,
              public service : MoodleService) {

      this.tok=this.navParams.data('RetornoOK')

    this.service.salvaToken(this.tok).(ret => {
      this.service.salvaDados(ret);
    }, erro =>{
      console.log('serviço falhou',erro)
    });

    this.service.retornaDadosUsuario(this.tok);


  }

}
