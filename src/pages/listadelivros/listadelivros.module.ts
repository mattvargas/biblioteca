import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadelivrosPage } from './listadelivros';

@NgModule({
  declarations: [
    ListadelivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadelivrosPage),
  ],
})
export class ListadelivrosPageModule {}
