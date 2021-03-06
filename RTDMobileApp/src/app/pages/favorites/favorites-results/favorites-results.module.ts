import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesResultsPageRoutingModule } from './favorites-results-routing.module';

import { FavoritesResultsPage } from './favorites-results.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesResultsPageRoutingModule
  ],
  declarations: [FavoritesResultsPage]
})
export class FavoritesResultsPageModule {}
