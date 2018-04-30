import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsumoapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsumoapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConsumoapiProvider Provider');
  }

  listarLivros() {
    return this.http.get('./assets/books.json');
  }



}
