import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesMainPage } from './favorites-main.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesMainPage
  },
  {
    path: 'favorites-results',
    loadChildren: () => import('../favorites-results/favorites-results.module').then( m => m.FavoritesResultsPageModule)
  },
  {
    path: 'favorites-new',
    loadChildren: () => import('../favorites-new/favorites-new.module').then( m => m.FavoritesNewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesMainPageRoutingModule {}
