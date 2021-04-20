import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTripPlannerPage } from './modal-trip-planner.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTripPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTripPlannerPageRoutingModule {}
