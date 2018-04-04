import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoodleService {
  urlAPI = 'https://lms.infnet.edu.br/moodle/webservice/rest/server' +
    '.php?wstoken=437d0379b8024f05063107140d460669&moodlewsrestformat=json&wsfunction=core_webservice_get_site_info';
  constructor(public web : HttpClient ) { }

  executaLogin(usuario, senha){
    return this.web.post(this.urlAPI + '/login',{
      email: usuario,
      password:senha,
    });
  }
  retornaListaUsuarios(){
    return this.web.get(this.urlAPI + '/login' , {

    })
  }

  verificarToken(){
    if (localStorage.getItem('token')){
      return true
    }

    return false
  }
  salvaToken(token){
    localStorage.setItem('token', token);
  }

  retornaToken(){
    return localStorage.getiItem('token');
  }
}
