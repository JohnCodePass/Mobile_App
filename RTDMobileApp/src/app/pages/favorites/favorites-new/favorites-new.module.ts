import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesNewPageRoutingModule } from './favorites-new-routing.module';

import { FavoritesNewPage } from './favorites-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesNewPageRoutingModule
  ],
  declarations: [FavoritesNewPage]
})
export class FavoritesNewPageModule {}
