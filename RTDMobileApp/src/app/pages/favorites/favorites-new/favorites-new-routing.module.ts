import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesNewPage } from './favorites-new.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesNewPageRoutingModule {}
