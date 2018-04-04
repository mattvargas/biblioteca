import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProvedorProvider} from "../../providers/provedor/provedor";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  livros: any; // colocar tipo depois
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ProvedorProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('buscaLivro');

    this.api.exibeLivrosPorNome(this.selectedItem).subscribe( ret => {
      this.livros = ret;
      })

    this.selectedItem= navParams.get('buscaAutor');

    this.api.exibelivrosPorAutor(this.selectedItem).subscribe( ret => {
      this.livros = ret;
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
