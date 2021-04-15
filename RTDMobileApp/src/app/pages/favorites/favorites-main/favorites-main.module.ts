import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesMainPageRoutingModule } from './favorites-main-routing.module';

import { FavoritesMainPage } from './favorites-main.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesMainPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FavoritesMainPage]
})
export class FavoritesMainPageModule {}
