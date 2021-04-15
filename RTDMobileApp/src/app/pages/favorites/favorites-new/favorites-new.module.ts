import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesNewPageRoutingModule } from './favorites-new-routing.module';

import { FavoritesNewPage } from './favorites-new.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesNewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FavoritesNewPage]
})
export class FavoritesNewPageModule {}
