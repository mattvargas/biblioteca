import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Se navegarmos para esta página, teremos um item disponível como um parâmetro nav
    this.selectedItem = navParams.get('item');

    // Vamos preencher esta página com algum conteúdo de preenchimento para os funzinhos
    this.icons = ['build', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // Isso mesmo, estamos empurrando para nós mesmos!!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
