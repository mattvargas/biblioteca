import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
@Injectable()
export class MoodleService {
  urlAPI = ' https://lms.infnet.edu.br/moodle/login/token.php';
  urlAPI2 = 'https://lms.infnet.edu.br/moodle/webservice/rest/server.php'

  constructor(public web: HttpClient ,
              protected localSt: AsyncLocalStorage,) {
  }

  executaLogin(usuario, senha) {
    let formulario = new FormData();
    formulario.append('username', usuario);
    formulario.append('password', senha);
    formulario.append('service', 'moodle_mobile_app')

    return this.web.post(this.urlAPI, formulario);
  }

  verificarToken() {
    if (localStorage.getItem('token')) {
      return true
    }
    return false
  }

  salvaToken(token) {
    return localStorage.setItem('token', token);
  }

  retornaToken() {
    return localStorage.getiItem('token');
  }

  retornaDadosUsuario(token) {
        let form = new FormData();
        form.append('wstoken' , token);
        form.append('wsfunction','core_webservice_get_site_info');
        form.append('moodlewsrestformat', 'json');
          return this.web.post(this.urlAPI2,form);

  }

  salvaDados(dados) {
    return localStorage.setItem('dados',dados)
  }

  sair(token){
     return localStorage.removeItem(token);
  }

}

