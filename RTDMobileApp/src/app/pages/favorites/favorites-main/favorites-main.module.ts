import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesMainPageRoutingModule } from './favorites-main-routing.module';

import { FavoritesMainPage } from './favorites-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesMainPageRoutingModule
  ],
  declarations: [FavoritesMainPage]
})
export class FavoritesMainPageModule {}
