import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProvedorProvider} from "../../providers/provedor/provedor";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
    selectedItem: any;
    books: any ;//  Livro ; // colocar tipo depois

  constructor(public navCtrl: NavController,
                    public navParams: NavParams,
                      public api: ProvedorProvider) {

    this.selectedItem = navParams.get('buscarLivro');

      this.api.exibeLivrosPorNome(this.selectedItem).subscribe(ret => {
        this.books = ret;
      });


    this.selectedItem= navParams.get('buscaAutor');

    this.api.exibelivrosPorAutor(this.selectedItem).subscribe( ret => {
      this.books.author = ret;
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
