import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderAlertsPage } from './rider-alerts.page';

const routes: Routes = [
  {
    path: '',
    component: RiderAlertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderAlertsPageRoutingModule {}
