import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesResultsPageRoutingModule } from './favorites-results-routing.module';

import { FavoritesResultsPage } from './favorites-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesResultsPageRoutingModule
  ],
  declarations: [FavoritesResultsPage]
})
export class FavoritesResultsPageModule {}
