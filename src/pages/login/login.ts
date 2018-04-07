import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";
import {HttpClient} from "@angular/common/http";
import {MoodleService} from "../../providers/moodle/moodle";
import {DashboardPage} from "../dashboard/dashboard";
import {AsyncLocalStorage} from "angular-async-local-storage";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [MoodleService],

})
export class LoginPage {

    usuario:any
    senha : any


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service: MoodleService, public http : HttpClient,) {

  }
  logarApi( ){
    this.service.executaLogin(this.usuario,this.senha).subscribe(retornoOk => {
      this.service.salvaToken(JSON.stringify(retornoOk));


<<<<<<< HEAD
  voltarPage(){
    this.navCtrl.pop();
  }

=======
      this.navCtrl.push(DashboardPage);
    },erro => {
      console.log(' deu merda', erro)

    });
    }
>>>>>>> 3fdaf82dc9c3afbb1c87cc198636241bbdd9d61e

}






