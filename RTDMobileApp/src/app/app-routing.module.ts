import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'favorites-main',
    loadChildren: () => import('./pages/favorites/favorites-main/favorites-main.module').then( m => m.FavoritesMainPageModule)
  },
  {
    path: 'favorites-new',
    loadChildren: () => import('./pages/favorites/favorites-new/favorites-new.module').then( m => m.FavoritesNewPageModule)
  },
  {
    path: 'favorites-results',
    loadChildren: () => import('./pages/favorites/favorites-results/favorites-results.module').then( m => m.FavoritesResultsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'rider-alerts',
    loadChildren: () => import('./pages/rider-alerts/rider-alerts.module').then( m => m.RiderAlertsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
