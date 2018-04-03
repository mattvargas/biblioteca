import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvedorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProvedorProvider Provider');
  }

  exibelivros() {
    return this.http ('ProvedorProvider Provider')
  }
}
