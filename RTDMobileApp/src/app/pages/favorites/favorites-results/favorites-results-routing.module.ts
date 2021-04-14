import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesResultsPage } from './favorites-results.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesResultsPageRoutingModule {}
