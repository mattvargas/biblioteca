import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProvedorProvider {

  urlApi = ''
  constructor(public http: HttpClient) {

  }

  exibelivrosPorAutor(selectedItem) {
    return this.http.get(this.urlApi + '?author_like='+selectedItem);

  }
  exibeLivrosPorNome(selectedeItem){
    return this.http.get(this.urlApi + '?title_like='+selectedeItem);
  }


}
