import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONServer } from 'json-server'

@Injectable()
export class ConsumoapiService {

  urlAPI = '../books.json';
  constructor(
    private web: HttpClient
  ) {}

    listaLivros()
    {
      return this.web.get(this.urlAPI);
    }

}
